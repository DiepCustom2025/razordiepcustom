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
import MazeWall from "../Entity/Misc/MazeWall";
import ArenaEntity from "../Native/Arena";
import Client from "../Client";

import TeamBase from "../Entity/Misc/TeamBase";
import TankBody from "../Entity/Tank/TankBody";

import { TeamEntity } from "../Entity/Misc/TeamEntity";
import { Color } from "../Const/Enums";

const arenaSize = 11150;
const baseWidth = 2007;

/**
 * Teams2 Gamemode Arena
 */
export default class Teams2Arena extends ArenaEntity {
    /** Blue Team entity */
    public blueTeamBase: TeamBase;
    /** Red Team entity */
    public redTeamBase: TeamBase;
    // /** Limits shape count 100 */
    //     protected shapes: ShapeManager = new class extends ShapeManager {
    //     protected get wantedShapes() {
    //         return 64;
    //     }
    // }(this);

    /** Maps clients to their teams */
    public playerTeamMap: Map<Client, TeamBase> = new Map();
    
    public constructor(game: GameServer) {
        super(game);
        this.updateBounds(arenaSize * 2, arenaSize * 2);
        this.blueTeamBase = new TeamBase(game, new TeamEntity(this.game, Color.TeamBlue), -arenaSize + baseWidth / 2, 0, arenaSize * 2, baseWidth);
        this.redTeamBase = new TeamBase(game, new TeamEntity(this.game, Color.TeamRed), arenaSize - baseWidth / 2, 0, arenaSize * 2, baseWidth);
        
new MazeWall(game, -8792.50, -3405.00, 567.50, 567.50);
new MazeWall(game, -8225.00, -3405.00, 567.50, 567.50);
new MazeWall(game, -7657.50, -3405.00, 567.50, 567.50);
new MazeWall(game, -7090.00, -3405.00, 567.50, 567.50);
new MazeWall(game, -6522.50, -3405.00, 567.50, 567.50);
new MazeWall(game, -5955.00, -3405.00, 567.50, 567.50);
new MazeWall(game, -5387.50, -3405.00, 567.50, 567.50);
new MazeWall(game, -4820.00, -3405.00, 567.50, 567.50);
new MazeWall(game, -4252.50, -3405.00, 567.50, 567.50);
new MazeWall(game, -3685.00, -3405.00, 567.50, 567.50);
new MazeWall(game, -3117.50, -3405.00, 567.50, 567.50);
new MazeWall(game, -2550.00, -3405.00, 567.50, 567.50);
new MazeWall(game, -1982.50, -3405.00, 567.50, 567.50);
new MazeWall(game, -1415.00, -3405.00, 567.50, 567.50);
new MazeWall(game, -847.50, -3405.00, 567.50, 567.50);
new MazeWall(game, -280.00, -3405.00, 567.50, 567.50);
new MazeWall(game, 287.50, -3405.00, 567.50, 567.50);
new MazeWall(game, 855.00, -3405.00, 567.50, 567.50);
new MazeWall(game, 1422.50, -3405.00, 567.50, 567.50);
new MazeWall(game, 1990.00, -3405.00, 567.50, 567.50);
new MazeWall(game, 2557.50, -3405.00, 567.50, 567.50);
new MazeWall(game, 3125.00, -3405.00, 567.50, 567.50);
new MazeWall(game, 3692.50, -3405.00, 567.50, 567.50);
new MazeWall(game, 4260.00, -3405.00, 567.50, 567.50);
new MazeWall(game, 4827.50, -3405.00, 567.50, 567.50);
new MazeWall(game, 5395.00, -3405.00, 567.50, 567.50);
new MazeWall(game, 5962.50, -3405.00, 567.50, 567.50);
new MazeWall(game, 6530.00, -3405.00, 567.50, 567.50);
new MazeWall(game, 7097.50, -3405.00, 567.50, 567.50);
new MazeWall(game, 7665.00, -3405.00, 567.50, 567.50);
new MazeWall(game, 8232.50, -3405.00, 567.50, 567.50);
new MazeWall(game, 8800.00, -3405.00, 567.50, 567.50);
new MazeWall(game, -8792.50, -2837.50, 567.50, 567.50);
new MazeWall(game, -8225.00, -2837.50, 567.50, 567.50);
new MazeWall(game, -7657.50, -2837.50, 567.50, 567.50);
new MazeWall(game, -7090.00, -2837.50, 567.50, 567.50);
new MazeWall(game, -6522.50, -2837.50, 567.50, 567.50);
new MazeWall(game, -5955.00, -2837.50, 567.50, 567.50);
new MazeWall(game, -5387.50, -2837.50, 567.50, 567.50);
new MazeWall(game, -4820.00, -2837.50, 567.50, 567.50);
new MazeWall(game, -4252.50, -2837.50, 567.50, 567.50);
new MazeWall(game, -3685.00, -2837.50, 567.50, 567.50);
new MazeWall(game, -3117.50, -2837.50, 567.50, 567.50);
new MazeWall(game, -2550.00, -2837.50, 567.50, 567.50);
new MazeWall(game, -1982.50, -2837.50, 567.50, 567.50);
new MazeWall(game, -1415.00, -2837.50, 567.50, 567.50);
new MazeWall(game, -847.50, -2837.50, 567.50, 567.50);
new MazeWall(game, -280.00, -2837.50, 567.50, 567.50);
new MazeWall(game, 287.50, -2837.50, 567.50, 567.50);
new MazeWall(game, 855.00, -2837.50, 567.50, 567.50);
new MazeWall(game, 1422.50, -2837.50, 567.50, 567.50);
new MazeWall(game, 1990.00, -2837.50, 567.50, 567.50);
new MazeWall(game, 2557.50, -2837.50, 567.50, 567.50);
new MazeWall(game, 3125.00, -2837.50, 567.50, 567.50);
new MazeWall(game, 3692.50, -2837.50, 567.50, 567.50);
new MazeWall(game, 4260.00, -2837.50, 567.50, 567.50);
new MazeWall(game, 4827.50, -2837.50, 567.50, 567.50);
new MazeWall(game, 5395.00, -2837.50, 567.50, 567.50);
new MazeWall(game, 5962.50, -2837.50, 567.50, 567.50);
new MazeWall(game, 6530.00, -2837.50, 567.50, 567.50);
new MazeWall(game, 7097.50, -2837.50, 567.50, 567.50);
new MazeWall(game, 7665.00, -2837.50, 567.50, 567.50);
new MazeWall(game, 8232.50, -2837.50, 567.50, 567.50);
new MazeWall(game, 8800.00, -2837.50, 567.50, 567.50);
new MazeWall(game, -8792.50, -2270.00, 567.50, 567.50);
new MazeWall(game, -8225.00, -2270.00, 567.50, 567.50);
new MazeWall(game, -7657.50, -2270.00, 567.50, 567.50);
new MazeWall(game, -7090.00, -2270.00, 567.50, 567.50);
new MazeWall(game, -6522.50, -2270.00, 567.50, 567.50);
new MazeWall(game, -5955.00, -2270.00, 567.50, 567.50);
new MazeWall(game, -5387.50, -2270.00, 567.50, 567.50);
new MazeWall(game, -4820.00, -2270.00, 567.50, 567.50);
new MazeWall(game, -4252.50, -2270.00, 567.50, 567.50);
new MazeWall(game, -3685.00, -2270.00, 567.50, 567.50);
new MazeWall(game, -3117.50, -2270.00, 567.50, 567.50);
new MazeWall(game, -2550.00, -2270.00, 567.50, 567.50);
new MazeWall(game, -1982.50, -2270.00, 567.50, 567.50);
new MazeWall(game, -1415.00, -2270.00, 567.50, 567.50);
new MazeWall(game, -847.50, -2270.00, 567.50, 567.50);
new MazeWall(game, -280.00, -2270.00, 567.50, 567.50);
new MazeWall(game, 287.50, -2270.00, 567.50, 567.50);
new MazeWall(game, 855.00, -2270.00, 567.50, 567.50);
new MazeWall(game, 1422.50, -2270.00, 567.50, 567.50);
new MazeWall(game, 1990.00, -2270.00, 567.50, 567.50);
new MazeWall(game, 2557.50, -2270.00, 567.50, 567.50);
new MazeWall(game, 3125.00, -2270.00, 567.50, 567.50);
new MazeWall(game, 3692.50, -2270.00, 567.50, 567.50);
new MazeWall(game, 4260.00, -2270.00, 567.50, 567.50);
new MazeWall(game, 4827.50, -2270.00, 567.50, 567.50);
new MazeWall(game, 5395.00, -2270.00, 567.50, 567.50);
new MazeWall(game, 5962.50, -2270.00, 567.50, 567.50);
new MazeWall(game, 6530.00, -2270.00, 567.50, 567.50);
new MazeWall(game, 7097.50, -2270.00, 567.50, 567.50);
new MazeWall(game, 7665.00, -2270.00, 567.50, 567.50);
new MazeWall(game, 8232.50, -2270.00, 567.50, 567.50);
new MazeWall(game, 8800.00, -2270.00, 567.50, 567.50);
new MazeWall(game, -8792.50, -1702.50, 567.50, 567.50);
new MazeWall(game, -8225.00, -1702.50, 567.50, 567.50);
new MazeWall(game, -7657.50, -1702.50, 567.50, 567.50);
new MazeWall(game, -7090.00, -1702.50, 567.50, 567.50);
new MazeWall(game, -6522.50, -1702.50, 567.50, 567.50);
new MazeWall(game, -5955.00, -1702.50, 567.50, 567.50);
new MazeWall(game, -5387.50, -1702.50, 567.50, 567.50);
new MazeWall(game, -4820.00, -1702.50, 567.50, 567.50);
new MazeWall(game, -4252.50, -1702.50, 567.50, 567.50);
new MazeWall(game, -3685.00, -1702.50, 567.50, 567.50);
new MazeWall(game, 3692.50, -1702.50, 567.50, 567.50);
new MazeWall(game, 4260.00, -1702.50, 567.50, 567.50);
new MazeWall(game, 4827.50, -1702.50, 567.50, 567.50);
new MazeWall(game, 5395.00, -1702.50, 567.50, 567.50);
new MazeWall(game, 5962.50, -1702.50, 567.50, 567.50);
new MazeWall(game, 6530.00, -1702.50, 567.50, 567.50);
new MazeWall(game, 7097.50, -1702.50, 567.50, 567.50);
new MazeWall(game, 7665.00, -1702.50, 567.50, 567.50);
new MazeWall(game, 8232.50, -1702.50, 567.50, 567.50);
new MazeWall(game, 8800.00, -1702.50, 567.50, 567.50);
new MazeWall(game, -8792.50, -1135.00, 567.50, 567.50);
new MazeWall(game, -8225.00, -1135.00, 567.50, 567.50);
new MazeWall(game, -7657.50, -1135.00, 567.50, 567.50);
new MazeWall(game, -7090.00, -1135.00, 567.50, 567.50);
new MazeWall(game, -6522.50, -1135.00, 567.50, 567.50);
new MazeWall(game, -5955.00, -1135.00, 567.50, 567.50);
new MazeWall(game, -5387.50, -1135.00, 567.50, 567.50);
new MazeWall(game, -4820.00, -1135.00, 567.50, 567.50);
new MazeWall(game, -4252.50, -1135.00, 567.50, 567.50);
new MazeWall(game, -3685.00, -1135.00, 567.50, 567.50);
new MazeWall(game, 3692.50, -1135.00, 567.50, 567.50);
new MazeWall(game, 4260.00, -1135.00, 567.50, 567.50);
new MazeWall(game, 4827.50, -1135.00, 567.50, 567.50);
new MazeWall(game, 5395.00, -1135.00, 567.50, 567.50);
new MazeWall(game, 5962.50, -1135.00, 567.50, 567.50);
new MazeWall(game, 6530.00, -1135.00, 567.50, 567.50);
new MazeWall(game, 7097.50, -1135.00, 567.50, 567.50);
new MazeWall(game, 7665.00, -1135.00, 567.50, 567.50);
new MazeWall(game, 8232.50, -1135.00, 567.50, 567.50);
new MazeWall(game, 8800.00, -1135.00, 567.50, 567.50);
new MazeWall(game, -8792.50, 567.50, 567.50, 567.50);
new MazeWall(game, -8225.00, 567.50, 567.50, 567.50);
new MazeWall(game, -7657.50, 567.50, 567.50, 567.50);
new MazeWall(game, -7090.00, 567.50, 567.50, 567.50);
new MazeWall(game, -6522.50, 567.50, 567.50, 567.50);
new MazeWall(game, -5955.00, 567.50, 567.50, 567.50);
new MazeWall(game, -5387.50, 567.50, 567.50, 567.50);
new MazeWall(game, -4820.00, 567.50, 567.50, 567.50);
new MazeWall(game, -4252.50, 567.50, 567.50, 567.50);
new MazeWall(game, -3685.00, 567.50, 567.50, 567.50);
new MazeWall(game, 3692.50, 567.50, 567.50, 567.50);
new MazeWall(game, 4260.00, 567.50, 567.50, 567.50);
new MazeWall(game, 4827.50, 567.50, 567.50, 567.50);
new MazeWall(game, 5395.00, 567.50, 567.50, 567.50);
new MazeWall(game, 5962.50, 567.50, 567.50, 567.50);
new MazeWall(game, 6530.00, 567.50, 567.50, 567.50);
new MazeWall(game, 7097.50, 567.50, 567.50, 567.50);
new MazeWall(game, 7665.00, 567.50, 567.50, 567.50);
new MazeWall(game, 8232.50, 567.50, 567.50, 567.50);
new MazeWall(game, 8800.00, 567.50, 567.50, 567.50);
new MazeWall(game, -8792.50, 1135.00, 567.50, 567.50);
new MazeWall(game, -8225.00, 1135.00, 567.50, 567.50);
new MazeWall(game, -7657.50, 1135.00, 567.50, 567.50);
new MazeWall(game, -7090.00, 1135.00, 567.50, 567.50);
new MazeWall(game, -6522.50, 1135.00, 567.50, 567.50);
new MazeWall(game, -5955.00, 1135.00, 567.50, 567.50);
new MazeWall(game, -5387.50, 1135.00, 567.50, 567.50);
new MazeWall(game, -4820.00, 1135.00, 567.50, 567.50);
new MazeWall(game, -4252.50, 1135.00, 567.50, 567.50);
new MazeWall(game, -3685.00, 1135.00, 567.50, 567.50);
new MazeWall(game, 3692.50, 1135.00, 567.50, 567.50);
new MazeWall(game, 4260.00, 1135.00, 567.50, 567.50);
new MazeWall(game, 4827.50, 1135.00, 567.50, 567.50);
new MazeWall(game, 5395.00, 1135.00, 567.50, 567.50);
new MazeWall(game, 5962.50, 1135.00, 567.50, 567.50);
new MazeWall(game, 6530.00, 1135.00, 567.50, 567.50);
new MazeWall(game, 7097.50, 1135.00, 567.50, 567.50);
new MazeWall(game, 7665.00, 1135.00, 567.50, 567.50);
new MazeWall(game, 8232.50, 1135.00, 567.50, 567.50);
new MazeWall(game, 8800.00, 1135.00, 567.50, 567.50);
new MazeWall(game, -8792.50, 1702.50, 567.50, 567.50);
new MazeWall(game, -8225.00, 1702.50, 567.50, 567.50);
new MazeWall(game, -7657.50, 1702.50, 567.50, 567.50);
new MazeWall(game, -7090.00, 1702.50, 567.50, 567.50);
new MazeWall(game, -6522.50, 1702.50, 567.50, 567.50);
new MazeWall(game, -5955.00, 1702.50, 567.50, 567.50);
new MazeWall(game, -5387.50, 1702.50, 567.50, 567.50);
new MazeWall(game, -4820.00, 1702.50, 567.50, 567.50);
new MazeWall(game, -4252.50, 1702.50, 567.50, 567.50);
new MazeWall(game, -3685.00, 1702.50, 567.50, 567.50);
new MazeWall(game, -3117.50, 1702.50, 567.50, 567.50);
new MazeWall(game, -2550.00, 1702.50, 567.50, 567.50);
new MazeWall(game, -1982.50, 1702.50, 567.50, 567.50);
new MazeWall(game, -1415.00, 1702.50, 567.50, 567.50);
new MazeWall(game, -847.50, 1702.50, 567.50, 567.50);
new MazeWall(game, -280.00, 1702.50, 567.50, 567.50);
new MazeWall(game, 287.50, 1702.50, 567.50, 567.50);
new MazeWall(game, 855.00, 1702.50, 567.50, 567.50);
new MazeWall(game, 1422.50, 1702.50, 567.50, 567.50);
new MazeWall(game, 1990.00, 1702.50, 567.50, 567.50);
new MazeWall(game, 2557.50, 1702.50, 567.50, 567.50);
new MazeWall(game, 3125.00, 1702.50, 567.50, 567.50);
new MazeWall(game, 3692.50, 1702.50, 567.50, 567.50);
new MazeWall(game, 4260.00, 1702.50, 567.50, 567.50);
new MazeWall(game, 4827.50, 1702.50, 567.50, 567.50);
new MazeWall(game, 5395.00, 1702.50, 567.50, 567.50);
new MazeWall(game, 5962.50, 1702.50, 567.50, 567.50);
new MazeWall(game, 6530.00, 1702.50, 567.50, 567.50);
new MazeWall(game, 7097.50, 1702.50, 567.50, 567.50);
new MazeWall(game, 7665.00, 1702.50, 567.50, 567.50);
new MazeWall(game, 8232.50, 1702.50, 567.50, 567.50);
new MazeWall(game, 8800.00, 1702.50, 567.50, 567.50);
new MazeWall(game, -8792.50, 2270.00, 567.50, 567.50);
new MazeWall(game, -8225.00, 2270.00, 567.50, 567.50);
new MazeWall(game, -7657.50, 2270.00, 567.50, 567.50);
new MazeWall(game, -7090.00, 2270.00, 567.50, 567.50);
new MazeWall(game, -6522.50, 2270.00, 567.50, 567.50);
new MazeWall(game, -5955.00, 2270.00, 567.50, 567.50);
new MazeWall(game, -5387.50, 2270.00, 567.50, 567.50);
new MazeWall(game, -4820.00, 2270.00, 567.50, 567.50);
new MazeWall(game, -4252.50, 2270.00, 567.50, 567.50);
new MazeWall(game, -3685.00, 2270.00, 567.50, 567.50);
new MazeWall(game, -3117.50, 2270.00, 567.50, 567.50);
new MazeWall(game, -2550.00, 2270.00, 567.50, 567.50);
new MazeWall(game, -1982.50, 2270.00, 567.50, 567.50);
new MazeWall(game, -1415.00, 2270.00, 567.50, 567.50);
new MazeWall(game, -847.50, 2270.00, 567.50, 567.50);
new MazeWall(game, -280.00, 2270.00, 567.50, 567.50);
new MazeWall(game, 287.50, 2270.00, 567.50, 567.50);
new MazeWall(game, 855.00, 2270.00, 567.50, 567.50);
new MazeWall(game, 1422.50, 2270.00, 567.50, 567.50);
new MazeWall(game, 1990.00, 2270.00, 567.50, 567.50);
new MazeWall(game, 2557.50, 2270.00, 567.50, 567.50);
new MazeWall(game, 3125.00, 2270.00, 567.50, 567.50);
new MazeWall(game, 3692.50, 2270.00, 567.50, 567.50);
new MazeWall(game, 4260.00, 2270.00, 567.50, 567.50);
new MazeWall(game, 4827.50, 2270.00, 567.50, 567.50);
new MazeWall(game, 5395.00, 2270.00, 567.50, 567.50);
new MazeWall(game, 5962.50, 2270.00, 567.50, 567.50);
new MazeWall(game, 6530.00, 2270.00, 567.50, 567.50);
new MazeWall(game, 7097.50, 2270.00, 567.50, 567.50);
new MazeWall(game, 7665.00, 2270.00, 567.50, 567.50);
new MazeWall(game, 8232.50, 2270.00, 567.50, 567.50);
new MazeWall(game, 8800.00, 2270.00, 567.50, 567.50);
new MazeWall(game, -8792.50, 2837.50, 567.50, 567.50);
new MazeWall(game, -8225.00, 2837.50, 567.50, 567.50);
new MazeWall(game, -7657.50, 2837.50, 567.50, 567.50);
new MazeWall(game, -7090.00, 2837.50, 567.50, 567.50);
new MazeWall(game, -6522.50, 2837.50, 567.50, 567.50);
new MazeWall(game, -5955.00, 2837.50, 567.50, 567.50);
new MazeWall(game, -5387.50, 2837.50, 567.50, 567.50);
new MazeWall(game, -4820.00, 2837.50, 567.50, 567.50);
new MazeWall(game, -4252.50, 2837.50, 567.50, 567.50);
new MazeWall(game, -3685.00, 2837.50, 567.50, 567.50);
new MazeWall(game, -3117.50, 2837.50, 567.50, 567.50);
new MazeWall(game, -2550.00, 2837.50, 567.50, 567.50);
new MazeWall(game, -1982.50, 2837.50, 567.50, 567.50);
new MazeWall(game, -1415.00, 2837.50, 567.50, 567.50);
new MazeWall(game, -847.50, 2837.50, 567.50, 567.50);
new MazeWall(game, -280.00, 2837.50, 567.50, 567.50);
new MazeWall(game, 287.50, 2837.50, 567.50, 567.50);
new MazeWall(game, 855.00, 2837.50, 567.50, 567.50);
new MazeWall(game, 1422.50, 2837.50, 567.50, 567.50);
new MazeWall(game, 1990.00, 2837.50, 567.50, 567.50);
new MazeWall(game, 2557.50, 2837.50, 567.50, 567.50);
new MazeWall(game, 3125.00, 2837.50, 567.50, 567.50);
new MazeWall(game, 3692.50, 2837.50, 567.50, 567.50);
new MazeWall(game, 4260.00, 2837.50, 567.50, 567.50);
new MazeWall(game, 4827.50, 2837.50, 567.50, 567.50);
new MazeWall(game, 5395.00, 2837.50, 567.50, 567.50);
new MazeWall(game, 5962.50, 2837.50, 567.50, 567.50);
new MazeWall(game, 6530.00, 2837.50, 567.50, 567.50);
new MazeWall(game, 7097.50, 2837.50, 567.50, 567.50);
new MazeWall(game, 7665.00, 2837.50, 567.50, 567.50);
new MazeWall(game, 8232.50, 2837.50, 567.50, 567.50);
new MazeWall(game, 8800.00, 2837.50, 567.50, 567.50);

    }

    public spawnPlayer(tank: TankBody, client: Client) {
        tank.positionData.values.y = 2 * arenaSize * Math.random() - arenaSize;

        const xOffset = (Math.random() - 0.5) * baseWidth;
        
        const base = this.playerTeamMap.get(client) || [this.blueTeamBase, this.redTeamBase][0|Math.random()*2];
        tank.relationsData.values.team = base.relationsData.values.team;
        tank.styleData.values.color = base.styleData.values.color;
        tank.positionData.values.x = base.positionData.values.x + xOffset;
        this.playerTeamMap.set(client, base);

        if (client.camera) client.camera.relationsData.team = tank.relationsData.values.team;
    }

}
