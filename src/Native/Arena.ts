/*
    DiepCustom - custom tank game server that shares diep.io's WebSocket protocol
    Copyright (C) 2022 ABCxFF (github.com/ABCxFF)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program. If not, see <https://www.gnu.org/licenses/>
*/

import GameServer from "../Game";
import ShapeManager from "../Entity/Shape/Manager";
import TankBody from "../Entity/Tank/TankBody";
import ArenaCloser from "../Entity/Misc/ArenaCloser";
import ClientCamera from "./Camera";

import { VectorAbstract } from "../Physics/Vector";
import { ArenaGroup, TeamGroup } from "./FieldGroups";
import { Entity } from "./Entity";
import { Color, ArenaFlags, ValidScoreboardIndex } from "../Const/Enums";
import { PI2, saveToLog } from "../util";
import { TeamEntity, TeamGroupEntity } from "../Entity/Misc/TeamEntity";
import Client from "../Client";
import AbstractBoss from "../Entity/Boss/AbstractBoss";
import Guardian from "../Entity/Boss/Guardian";
import Summoner from "../Entity/Boss/Summoner";
import FallenOverlord from "../Entity/Boss/FallenOverlord";
import FallenBooster from "../Entity/Boss/FallenBooster";
import Defender from "../Entity/Boss/Defender";
import { bossSpawningInterval, scoreboardUpdateInterval } from "../config";
import { maze } from "../Gamemodes/Maze";

export const enum ArenaState {
    OPEN = 0,
    OVER = 1,
    CLOSING = 2,
    CLOSED = 3,
}

export default class ArenaEntity extends Entity implements TeamGroupEntity {
    public arenaData: ArenaGroup = new ArenaGroup(this);
    public teamData: TeamGroup = new TeamGroup(this);
    public width: number;
    public height: number;
    public state: ArenaState = ArenaState.OPEN;
    public shapeScoreRewardMultiplier: number = 1;
    public allowBoss: boolean = true;
    public boss: AbstractBoss | null = null;
    public leader: TankBody | null = null;
    protected shapes = new ShapeManager(this);
    public ARENA_PADDING = 200;

    public constructor(game: GameServer) {
        super(game);

        this.updateBounds(this.width = 22300, this.height = 22300);

        this.arenaData.values.topY = -this.height / 2;
        this.arenaData.values.bottomY = this.height / 2;
        this.arenaData.values.leftX = -this.width / 2;
        this.arenaData.values.rightX = this.width / 2;

        this.arenaData.values.flags = ArenaFlags.gameReadyStart;
        this.teamData.values.teamColor = Color.Neutral;
    }

    /**
     * Finds a spawnable location on the map.
     */
    public findSpawnLocation(): VectorAbstract {
        const pos = {
            x: ~~(Math.random() * this.width - this.width / 2),
            y: ~~(Math.random() * this.height - this.height / 2),
        }

        findSpawn: for (let i = 0; i < 100; ++i) {
            const entities = this.game.entities.collisionManager.retrieve(pos.x, pos.y, 1000, 1000);

            // ✅ Avoid spawning inside wall structures
            if (this.isInWall(pos.x, pos.y)) {
                pos.x = ~~(Math.random() * this.width - this.width / 2);
                pos.y = ~~(Math.random() * this.height - this.height / 2);
                continue findSpawn;
            }

            for (let len = entities.length; --len >= 0;) {
                if (entities[len] instanceof TankBody &&
                    (entities[len].positionData.values.x - pos.x) ** 2 +
                    (entities[len].positionData.values.y - pos.y) ** 2 < 1_000_000) {
                    pos.x = ~~(Math.random() * this.width - this.width / 2);
                    pos.y = ~~(Math.random() * this.height - this.height / 2);
                    continue findSpawn;
                }
            }

            break;
        }

        return pos;
    }

    /**
     * NEW: Checks if the spawn point is inside a wall.
     */
    private isInWall(x: number, y: number): boolean {
        return maze.contains?.(x, y) ?? false;
    }

    protected updateScoreboard(scoreboardPlayers: TankBody[]) {
        const scoreboardCount = this.arenaData.scoreboardAmount = (this.arenaData.values.flags & ArenaFlags.hiddenScores) ? 0 : Math.min(scoreboardPlayers.length, 10);

        if (!scoreboardCount) {
            if (this.arenaData.values.flags & ArenaFlags.showsLeaderArrow) {
                this.arenaData.flags ^= ArenaFlags.showsLeaderArrow;
            }

            return;
        }

        scoreboardPlayers.sort((p1, p2) => p2.scoreData.values.score - p1.scoreData.values.score);
        this.leader = scoreboardPlayers[0];
        
        this.arenaData.flags |= ArenaFlags.showsLeaderArrow;
        for (let i: ValidScoreboardIndex = 0; i < scoreboardCount; i = (i + 1) as ValidScoreboardIndex) {
            const player = scoreboardPlayers[i];
            
            if (player.styleData.values.color === Color.Tank) this.arenaData.values.scoreboardColors[i] = Color.ScoreboardBar;
            else this.arenaData.values.scoreboardColors[i] = player.styleData.values.color;
            this.arenaData.values.scoreboardNames[i] = player.nameData.values.name;
            this.arenaData.values.scoreboardScores[i] = player.scoreData.values.score;
            this.arenaData.values.scoreboardTanks[i] = player['_currentTank'];
        }
    }

    protected updateArenaState() {
        if ((this.game.tick % scoreboardUpdateInterval) !== 0) return;

        const players = this.getAlivePlayers();
        this.updateScoreboard(players);
        
        if (players.length === 0 && this.state === ArenaState.CLOSING) {
            this.state = ArenaState.CLOSED;

            setTimeout(() => {
                this.game.end();
            }, 10000);
            return;
        }
    }

    public getAlivePlayers() {
        const players: TankBody[] = [];
        for (let id = 0; id <= this.game.entities.lastId; ++id) {
            const entity = this.game.entities.inner[id];

            if (
                Entity.exists(entity) &&
                entity instanceof TankBody &&
                entity.cameraEntity instanceof ClientCamera &&
                entity.cameraEntity.cameraData.values.player === entity
            ) players.push(entity);
        }
        return players;
    }

    public getTeamPlayers(team: TeamEntity) {
        const players = this.getAlivePlayers();
        const teamPlayers: TankBody[] = [];
        for (let i = 0; i < players.length; i++) {
            const entity = players[i];

            if (entity.relationsData.values.team === team) teamPlayers.push(entity);
        }
        return teamPlayers;
    }

    public updateBounds(arenaWidth: number, arenaHeight: number) {
        this.width = arenaWidth;
        this.height = arenaHeight;

        this.arenaData.topY = -arenaHeight / 2;
        this.arenaData.bottomY = arenaHeight / 2;
        this.arenaData.leftX = -arenaWidth / 2;
        this.arenaData.rightX = arenaWidth / 2;
    }

    public spawnPlayer(tank: TankBody, client: Client) {
        const { x, y } = this.findSpawnLocation();

        tank.positionData.values.x = x;
        tank.positionData.values.y = y;
    }

    public close() {
        for (const client of this.game.clients) {
            client.notify("Arena closed: No players can join", 0xFF0000, -1);
        }

        this.state = ArenaState.CLOSING;
        this.arenaData.flags |= ArenaFlags.noJoining;

        setTimeout(() => {
            const acCount = Math.floor(Math.sqrt(this.width) / 10);
            const radius = this.width * Math.SQRT1_2 + 500;
            for (let i = 0; i < acCount; ++i) {
                const ac = new ArenaCloser(this.game);

                const angle = (i / acCount) * PI2;
                ac.positionData.values.x = Math.cos(angle) * radius;
                ac.positionData.values.y = Math.sin(angle) * radius;
                ac.positionData.values.angle = angle + Math.PI;
            }

            saveToLog("Arena Closing", "Arena running at `" + this.game.gamemode + "` is now closing.", 0xFFE869);
        }, 5000);
    }

    protected spawnBoss() {
        const TBoss = [Guardian, Summoner, FallenOverlord, FallenBooster, Defender]
            [~~(Math.random() * 5)];
        
        this.boss = new TBoss(this.game);
    }

    public tick(tick: number) {
        this.shapes.tick();
        this.updateArenaState();

        if (this.leader && this.arenaData.values.flags & ArenaFlags.showsLeaderArrow) {
            this.arenaData.leaderX = this.leader.positionData.values.x;
            this.arenaData.leaderY = this.leader.positionData.values.y;
        }

        if (this.allowBoss && this.game.tick >= 1 && (this.game.tick % bossSpawningInterval) === 0 && !this.boss) {
            this.spawnBoss();
        }
    }
}
