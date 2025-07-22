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
import { Entity } from "../../Native/Entity";

import { PhysicsFlags, Color } from "../../Const/Enums";
/**
 * Only used for maze walls and nothing else.
 */
export default class MinimapIndicator extends ObjectEntity {
    public followEntity: ObjectEntity;
    
    public constructor(game: GameServer, x: number, y: number, entity: ObjectEntity) {
        super(game);

        this.positionData.values.x = x;
        this.positionData.values.y = y;

        this.followEntity = entity;
        this.physicsData.values.sides = 1;
        this.physicsData.values.flags |= PhysicsFlags.showsOnMap;
        this.physicsData.values.pushFactor = 0;
        this.physicsData.values.absorbtionFactor = 0;
        this.physicsData.size = this.game.arena.width / 50;

        this.styleData.values.borderWidth = 0.1;
        this.styleData.values.opacity = 0.00;
        this.styleData.values.color = entity.styleData?.values.color;
        
        this.relationsData.values.team = entity.relationsData.values.team;

        // Workaround due to a rendering bug in the diep.io client - must have an attached entity to properly render circles on the minimap
        const workaroundEntity = new ObjectEntity(game)
        workaroundEntity.setParent(this)
    }
    public tick(tick: number) {
        if (!Entity.exists(this.followEntity)) return this.destroy(false);
        
        this.positionData.x = this.followEntity.positionData.values.x;
        this.positionData.y = this.followEntity.positionData.values.y;
        this.physicsData.size = this.game.arena.width / 50;
        this.styleData.color = this.followEntity.styleData?.values.color;
        this.relationsData.values.team = this.followEntity.relationsData.values.team;
        
        super.tick(tick);
    }
}