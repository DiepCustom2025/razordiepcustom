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

import GameServer from "../../Game";
import ObjectEntity from "../Object";
import { Color, PositionFlags, NameFlags } from "../../Const/Enums";
import { NameGroup } from "../../Native/FieldGroups";
import { AI } from "../AI";
import { normalizeAngle, PI2 } from "../../util";

// Lazy loader to prevent circular dependency
function getLivingEntity(): typeof import("../Live").default {
    return require("../Live").default;
}

const TURN_TIMEOUT = 300;

export default class AbstractShape extends getLivingEntity() {
    protected static BASE_ROTATION = AI.PASSIVE_ROTATION;
    protected static BASE_ORBIT = 0.005;
    protected static BASE_VELOCITY = 1;

    public nameData: NameGroup = new NameGroup(this);
    public isShiny: boolean = false;

    protected doIdleRotate: boolean = true;
    protected orbitAngle: number;
    protected orbitRate = (Math.random() < 0.5 ? -1 : 1) *
        (this.constructor as typeof AbstractShape).BASE_ORBIT;
    protected rotationRate = (Math.random() < 0.5 ? -1 : 1) *
        (this.constructor as typeof AbstractShape).BASE_ROTATION;
    protected shapeVelocity =
        (this.constructor as typeof AbstractShape).BASE_VELOCITY;

    protected isTurning: number = 0;
    protected targetTurningAngle: number = 0;

    public constructor(game: GameServer) {
        super(game);

        this.relationsData.values.team = game.arena;

        this.nameData.values.flags = NameFlags.hiddenName;
        this.positionData.values.flags |= PositionFlags.absoluteRotation;
        this.orbitAngle = this.positionData.values.angle = Math.random() * PI2;

        this.maxDamageMultiplier = 4.0;
    }

    protected turnTo(angle: number) {
        if (normalizeAngle(this.orbitAngle - angle) < 0.2) return;
        this.targetTurningAngle = angle;
        this.isTurning = TURN_TIMEOUT;
    }

    public tick(tick: number) {
        if (!this.doIdleRotate) {
            return super.tick(tick);
        }

        const y = this.positionData.values.y;
        const x = this.positionData.values.x;

        if (this.isTurning === 0) {
            if (
                x > this.game.arena.arenaData.values.rightX - 400 ||
                x < this.game.arena.arenaData.values.leftX + 400 ||
                y < this.game.arena.arenaData.values.topY + 400 ||
                y > this.game.arena.arenaData.values.bottomY - 400
            ) {
                this.turnTo(Math.PI + Math.atan2(y, x));
            } else if (x > this.game.arena.arenaData.values.rightX - 500) {
                this.turnTo(Math.sign(this.orbitRate) * Math.PI / 2);
            } else if (x < this.game.arena.arenaData.values.leftX + 500) {
                this.turnTo(-1 * Math.sign(this.orbitRate) * Math.PI / 2);
            } else if (y < this.game.arena.arenaData.values.topY + 500) {
                this.turnTo(this.orbitRate > 0 ? 0 : Math.PI);
            } else if (y > this.game.arena.arenaData.values.bottomY - 500) {
                this.turnTo(this.orbitRate > 0 ? Math.PI : 0);
            }
        }

        this.positionData.angle += this.rotationRate;
        this.orbitAngle += this.orbitRate + (this.isTurning === TURN_TIMEOUT ? this.orbitRate * 10 : 0);

        const angleDiff = (((this.orbitAngle - this.targetTurningAngle) % PI2) + PI2) % PI2;
        if (this.isTurning === TURN_TIMEOUT && angleDiff < 0.2) {
            this.isTurning -= 1;
        } else if (this.isTurning !== TURN_TIMEOUT && this.isTurning !== 0) {
            this.isTurning -= 1;
        }

        this.maintainVelocity(this.orbitAngle, this.shapeVelocity);
        super.tick(tick);
    }
}
