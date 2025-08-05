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
import ArenaEntity, { ArenaState } from "../Native/Arena";
import MazeWall from "../Entity/Misc/MazeWall";
import TankBody from "../Entity/Tank/TankBody";
import { VectorAbstract } from "../Physics/Vector";

// constss.
const CELL_SIZE = 635;
const GRID_SIZE = 30;
const ARENA_SIZE = CELL_SIZE * GRID_SIZE;

export default class MazeArena extends ArenaEntity {
    static currentArena: MazeArena | null = null;

    private WALLS: MazeWall[] = [];

    constructor(a: any) {
        super(a);
        this.updateBounds(ARENA_SIZE, ARENA_SIZE);
        this.allowBoss = false;

        MazeArena.currentArena = this; // Enable auto-registering of MazeWalls

        this._buildMaze();

        MazeArena.currentArena = null; // Clean up reference after done
    }

    public registerWall(wall: MazeWall) {
        this.WALLS.push(wall);
    }

    private _buildMaze() {
new MazeWall(this.game, -8810.63, -8810.63, 476.25, 476.25);
new MazeWall(this.game, -8334.38, -8810.63, 476.25, 476.25);
new MazeWall(this.game, -7858.13, -8810.63, 476.25, 476.25);
new MazeWall(this.game, -7381.88, -8810.63, 476.25, 476.25);
new MazeWall(this.game, -6905.63, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 1190.63, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 1666.88, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 2143.13, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 2619.38, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 3095.63, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 3571.88, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 4048.13, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 4524.38, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 5000.63, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 5476.88, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 5953.13, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 6429.38, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 6905.63, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 7381.88, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 7858.13, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 8334.38, -8810.63, 476.25, 476.25);
new MazeWall(this.game, 8810.63, -8810.63, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -8334.38, 476.25, 476.25);
new MazeWall(this.game, -6905.63, -8334.38, 476.25, 476.25);
new MazeWall(this.game, 1190.63, -8334.38, 476.25, 476.25);
new MazeWall(this.game, 5476.88, -8334.38, 476.25, 476.25);
new MazeWall(this.game, 8810.63, -8334.38, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -7858.13, 476.25, 476.25);
new MazeWall(this.game, -6905.63, -7858.13, 476.25, 476.25);
new MazeWall(this.game, 1190.63, -7858.13, 476.25, 476.25);
new MazeWall(this.game, 4524.38, -7858.13, 476.25, 476.25);
new MazeWall(this.game, 5476.88, -7858.13, 476.25, 476.25);
new MazeWall(this.game, 6429.38, -7858.13, 476.25, 476.25);
new MazeWall(this.game, 6905.63, -7858.13, 476.25, 476.25);
new MazeWall(this.game, 7381.88, -7858.13, 476.25, 476.25);
new MazeWall(this.game, 8810.63, -7858.13, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -7381.88, 476.25, 476.25);
new MazeWall(this.game, 1190.63, -7381.88, 476.25, 476.25);
new MazeWall(this.game, 4524.38, -7381.88, 476.25, 476.25);
new MazeWall(this.game, 5476.88, -7381.88, 476.25, 476.25);
new MazeWall(this.game, 7381.88, -7381.88, 476.25, 476.25);
new MazeWall(this.game, 8810.63, -7381.88, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -6905.63, 476.25, 476.25);
new MazeWall(this.game, -8334.38, -6905.63, 476.25, 476.25);
new MazeWall(this.game, -7858.13, -6905.63, 476.25, 476.25);
new MazeWall(this.game, -7381.88, -6905.63, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -6905.63, 476.25, 476.25);
new MazeWall(this.game, -1666.88, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 1190.63, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 1666.88, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 2143.13, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 2619.38, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 3095.63, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 3571.88, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 4048.13, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 4524.38, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 5476.88, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 6905.63, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 7381.88, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 7858.13, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 8334.38, -6905.63, 476.25, 476.25);
new MazeWall(this.game, 8810.63, -6905.63, 476.25, 476.25);
new MazeWall(this.game, -3571.88, -6429.38, 476.25, 476.25);
new MazeWall(this.game, -3095.63, -6429.38, 476.25, 476.25);
new MazeWall(this.game, -1666.88, -6429.38, 476.25, 476.25);
new MazeWall(this.game, 5476.88, -6429.38, 476.25, 476.25);
new MazeWall(this.game, 6429.38, -6429.38, 476.25, 476.25);
new MazeWall(this.game, 6905.63, -6429.38, 476.25, 476.25);
new MazeWall(this.game, 8810.63, -6429.38, 476.25, 476.25);
new MazeWall(this.game, -5000.63, -5953.13, 476.25, 476.25);
new MazeWall(this.game, -4524.38, -5953.13, 476.25, 476.25);
new MazeWall(this.game, -4048.13, -5953.13, 476.25, 476.25);
new MazeWall(this.game, -1666.88, -5953.13, 476.25, 476.25);
new MazeWall(this.game, 5476.88, -5953.13, 476.25, 476.25);
new MazeWall(this.game, 8810.63, -5953.13, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -7858.13, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -7381.88, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -6905.63, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -6429.38, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -5953.13, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -5476.88, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -5000.63, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -4524.38, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -4048.13, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -3571.88, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -3095.63, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -1666.88, -5476.88, 476.25, 476.25);
new MazeWall(this.game, 8810.63, -5476.88, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -5000.63, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -5000.63, 476.25, 476.25);
new MazeWall(this.game, -2143.13, -5000.63, 476.25, 476.25);
new MazeWall(this.game, 1190.63, -5000.63, 476.25, 476.25);
new MazeWall(this.game, 1666.88, -5000.63, 476.25, 476.25);
new MazeWall(this.game, 2143.13, -5000.63, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -4524.38, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -4524.38, 476.25, 476.25);
new MazeWall(this.game, -2143.13, -4524.38, 476.25, 476.25);
new MazeWall(this.game, 238.13, -4524.38, 476.25, 476.25);
new MazeWall(this.game, 714.38, -4524.38, 476.25, 476.25);
new MazeWall(this.game, 2619.38, -4524.38, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -4048.13, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -4048.13, 476.25, 476.25);
new MazeWall(this.game, -238.13, -4048.13, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -3571.88, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -3571.88, 476.25, 476.25);
new MazeWall(this.game, -238.13, -3571.88, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -3095.63, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -3095.63, 476.25, 476.25);
new MazeWall(this.game, -714.38, -3095.63, 476.25, 476.25);
new MazeWall(this.game, -238.13, -3095.63, 476.25, 476.25);
new MazeWall(this.game, 3571.88, -3095.63, 476.25, 476.25);
new MazeWall(this.game, 4048.13, -3095.63, 476.25, 476.25);
new MazeWall(this.game, 4524.38, -3095.63, 476.25, 476.25);
new MazeWall(this.game, 5000.63, -3095.63, 476.25, 476.25);
new MazeWall(this.game, 5476.88, -3095.63, 476.25, 476.25);
new MazeWall(this.game, 6429.38, -3095.63, 476.25, 476.25);
new MazeWall(this.game, 6905.63, -3095.63, 476.25, 476.25);
new MazeWall(this.game, 7381.88, -3095.63, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -2619.38, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -2619.38, 476.25, 476.25);
new MazeWall(this.game, -1190.63, -2619.38, 476.25, 476.25);
new MazeWall(this.game, -714.38, -2619.38, 476.25, 476.25);
new MazeWall(this.game, 6905.63, -2619.38, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -2143.13, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -2143.13, 476.25, 476.25);
new MazeWall(this.game, 6905.63, -2143.13, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -1666.88, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -1666.88, 476.25, 476.25);
new MazeWall(this.game, 6429.38, -1666.88, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -1190.63, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -1190.63, 476.25, 476.25);
new MazeWall(this.game, 1190.63, -1190.63, 476.25, 476.25);
new MazeWall(this.game, 2143.13, -1190.63, 476.25, 476.25);
new MazeWall(this.game, 2619.38, -1190.63, 476.25, 476.25);
new MazeWall(this.game, 3095.63, -1190.63, 476.25, 476.25);
new MazeWall(this.game, 3571.88, -1190.63, 476.25, 476.25);
new MazeWall(this.game, 4048.13, -1190.63, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -714.38, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -714.38, 476.25, 476.25);
new MazeWall(this.game, 1190.63, -714.38, 476.25, 476.25);
new MazeWall(this.game, 1666.88, -714.38, 476.25, 476.25);
new MazeWall(this.game, 2143.13, -714.38, 476.25, 476.25);
new MazeWall(this.game, 4048.13, -714.38, 476.25, 476.25);
new MazeWall(this.game, -8810.63, -238.13, 476.25, 476.25);
new MazeWall(this.game, -2619.38, -238.13, 476.25, 476.25);
new MazeWall(this.game, 1190.63, -238.13, 476.25, 476.25);
new MazeWall(this.game, 1666.88, -238.13, 476.25, 476.25);
new MazeWall(this.game, 2143.13, -238.13, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 238.13, 476.25, 476.25);
new MazeWall(this.game, -2619.38, 238.13, 476.25, 476.25);
new MazeWall(this.game, 2143.13, 238.13, 476.25, 476.25);
new MazeWall(this.game, 4048.13, 238.13, 476.25, 476.25);
new MazeWall(this.game, 4524.38, 238.13, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 714.38, 476.25, 476.25);
new MazeWall(this.game, -2619.38, 714.38, 476.25, 476.25);
new MazeWall(this.game, 1666.88, 714.38, 476.25, 476.25);
new MazeWall(this.game, 2143.13, 714.38, 476.25, 476.25);
new MazeWall(this.game, 2619.38, 714.38, 476.25, 476.25);
new MazeWall(this.game, 3095.63, 714.38, 476.25, 476.25);
new MazeWall(this.game, 3571.88, 714.38, 476.25, 476.25);
new MazeWall(this.game, 4048.13, 714.38, 476.25, 476.25);
new MazeWall(this.game, 4524.38, 714.38, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -8334.38, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -7858.13, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -7381.88, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -6905.63, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -6429.38, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -5953.13, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -5476.88, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -5000.63, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -4524.38, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -4048.13, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -3571.88, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -3095.63, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -2619.38, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -2143.13, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -1666.88, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -1190.63, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -714.38, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -238.13, 1190.63, 476.25, 476.25);
new MazeWall(this.game, 1666.88, 1190.63, 476.25, 476.25);
new MazeWall(this.game, 2143.13, 1190.63, 476.25, 476.25);
new MazeWall(this.game, 4524.38, 1190.63, 476.25, 476.25);
new MazeWall(this.game, 5000.63, 1190.63, 476.25, 476.25);
new MazeWall(this.game, 5476.88, 1190.63, 476.25, 476.25);
new MazeWall(this.game, 5953.13, 1190.63, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 1666.88, 476.25, 476.25);
new MazeWall(this.game, -4524.38, 1666.88, 476.25, 476.25);
new MazeWall(this.game, -238.13, 1666.88, 476.25, 476.25);
new MazeWall(this.game, 6429.38, 1666.88, 476.25, 476.25);
new MazeWall(this.game, 6905.63, 1666.88, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 2143.13, 476.25, 476.25);
new MazeWall(this.game, -6905.63, 2143.13, 476.25, 476.25);
new MazeWall(this.game, -6429.38, 2143.13, 476.25, 476.25);
new MazeWall(this.game, -5953.13, 2143.13, 476.25, 476.25);
new MazeWall(this.game, -4524.38, 2143.13, 476.25, 476.25);
new MazeWall(this.game, -238.13, 2143.13, 476.25, 476.25);
new MazeWall(this.game, 8334.38, 2143.13, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 2619.38, 476.25, 476.25);
new MazeWall(this.game, -8334.38, 2619.38, 476.25, 476.25);
new MazeWall(this.game, -7858.13, 2619.38, 476.25, 476.25);
new MazeWall(this.game, -5953.13, 2619.38, 476.25, 476.25);
new MazeWall(this.game, -5000.63, 2619.38, 476.25, 476.25);
new MazeWall(this.game, -4524.38, 2619.38, 476.25, 476.25);
new MazeWall(this.game, -2143.13, 2619.38, 476.25, 476.25);
new MazeWall(this.game, -1666.88, 2619.38, 476.25, 476.25);
new MazeWall(this.game, -1190.63, 2619.38, 476.25, 476.25);
new MazeWall(this.game, -714.38, 2619.38, 476.25, 476.25);
new MazeWall(this.game, -238.13, 2619.38, 476.25, 476.25);
new MazeWall(this.game, 8334.38, 2619.38, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 3095.63, 476.25, 476.25);
new MazeWall(this.game, -5953.13, 3095.63, 476.25, 476.25);
new MazeWall(this.game, -238.13, 3095.63, 476.25, 476.25);
new MazeWall(this.game, 6905.63, 3095.63, 476.25, 476.25);
new MazeWall(this.game, 7858.13, 3095.63, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 3571.88, 476.25, 476.25);
new MazeWall(this.game, -5953.13, 3571.88, 476.25, 476.25);
new MazeWall(this.game, -238.13, 3571.88, 476.25, 476.25);
new MazeWall(this.game, 5000.63, 3571.88, 476.25, 476.25);
new MazeWall(this.game, 5476.88, 3571.88, 476.25, 476.25);
new MazeWall(this.game, 5953.13, 3571.88, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 4048.13, 476.25, 476.25);
new MazeWall(this.game, -6905.63, 4048.13, 476.25, 476.25);
new MazeWall(this.game, -6429.38, 4048.13, 476.25, 476.25);
new MazeWall(this.game, -5953.13, 4048.13, 476.25, 476.25);
new MazeWall(this.game, -4524.38, 4048.13, 476.25, 476.25);
new MazeWall(this.game, -3571.88, 4048.13, 476.25, 476.25);
new MazeWall(this.game, -238.13, 4048.13, 476.25, 476.25);
new MazeWall(this.game, 4048.13, 4048.13, 476.25, 476.25);
new MazeWall(this.game, 4524.38, 4048.13, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 4524.38, 476.25, 476.25);
new MazeWall(this.game, -5953.13, 4524.38, 476.25, 476.25);
new MazeWall(this.game, 3571.88, 4524.38, 476.25, 476.25);
new MazeWall(this.game, 4048.13, 4524.38, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 5000.63, 476.25, 476.25);
new MazeWall(this.game, -8334.38, 5000.63, 476.25, 476.25);
new MazeWall(this.game, -7858.13, 5000.63, 476.25, 476.25);
new MazeWall(this.game, -7381.88, 5000.63, 476.25, 476.25);
new MazeWall(this.game, -6905.63, 5000.63, 476.25, 476.25);
new MazeWall(this.game, -6429.38, 5000.63, 476.25, 476.25);
new MazeWall(this.game, -5953.13, 5000.63, 476.25, 476.25);
new MazeWall(this.game, -1666.88, 5000.63, 476.25, 476.25);
new MazeWall(this.game, -1190.63, 5000.63, 476.25, 476.25);
new MazeWall(this.game, -714.38, 5000.63, 476.25, 476.25);
new MazeWall(this.game, -238.13, 5000.63, 476.25, 476.25);
new MazeWall(this.game, 3571.88, 5000.63, 476.25, 476.25);
new MazeWall(this.game, -4524.38, 5476.88, 476.25, 476.25);
new MazeWall(this.game, -4048.13, 5476.88, 476.25, 476.25);
new MazeWall(this.game, -3571.88, 5476.88, 476.25, 476.25);
new MazeWall(this.game, -3095.63, 5476.88, 476.25, 476.25);
new MazeWall(this.game, 7381.88, 5953.13, 476.25, 476.25);
new MazeWall(this.game, 7858.13, 5953.13, 476.25, 476.25);
new MazeWall(this.game, 8334.38, 5953.13, 476.25, 476.25);
new MazeWall(this.game, 8810.63, 5953.13, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 6429.38, 476.25, 476.25);
new MazeWall(this.game, -8334.38, 6429.38, 476.25, 476.25);
new MazeWall(this.game, -7858.13, 6429.38, 476.25, 476.25);
new MazeWall(this.game, -7381.88, 6429.38, 476.25, 476.25);
new MazeWall(this.game, -6905.63, 6429.38, 476.25, 476.25);
new MazeWall(this.game, 238.13, 6429.38, 476.25, 476.25);
new MazeWall(this.game, 3095.63, 6429.38, 476.25, 476.25);
new MazeWall(this.game, 3571.88, 6429.38, 476.25, 476.25);
new MazeWall(this.game, 4048.13, 6429.38, 476.25, 476.25);
new MazeWall(this.game, 4524.38, 6429.38, 476.25, 476.25);
new MazeWall(this.game, 8810.63, 6429.38, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 6905.63, 476.25, 476.25);
new MazeWall(this.game, -3095.63, 6905.63, 476.25, 476.25);
new MazeWall(this.game, -1190.63, 6905.63, 476.25, 476.25);
new MazeWall(this.game, -714.38, 6905.63, 476.25, 476.25);
new MazeWall(this.game, -238.13, 6905.63, 476.25, 476.25);
new MazeWall(this.game, 714.38, 6905.63, 476.25, 476.25);
new MazeWall(this.game, 2619.38, 6905.63, 476.25, 476.25);
new MazeWall(this.game, 6905.63, 6905.63, 476.25, 476.25);
new MazeWall(this.game, 7381.88, 6905.63, 476.25, 476.25);
new MazeWall(this.game, 7858.13, 6905.63, 476.25, 476.25);
new MazeWall(this.game, 8334.38, 6905.63, 476.25, 476.25);
new MazeWall(this.game, 8810.63, 6905.63, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 7381.88, 476.25, 476.25);
new MazeWall(this.game, -6429.38, 7381.88, 476.25, 476.25);
new MazeWall(this.game, -3095.63, 7381.88, 476.25, 476.25);
new MazeWall(this.game, -2619.38, 7381.88, 476.25, 476.25);
new MazeWall(this.game, -2143.13, 7381.88, 476.25, 476.25);
new MazeWall(this.game, -1666.88, 7381.88, 476.25, 476.25);
new MazeWall(this.game, 714.38, 7381.88, 476.25, 476.25);
new MazeWall(this.game, 1190.63, 7381.88, 476.25, 476.25);
new MazeWall(this.game, 1666.88, 7381.88, 476.25, 476.25);
new MazeWall(this.game, 2143.13, 7381.88, 476.25, 476.25);
new MazeWall(this.game, 8810.63, 7381.88, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 7858.13, 476.25, 476.25);
new MazeWall(this.game, -6429.38, 7858.13, 476.25, 476.25);
new MazeWall(this.game, -3571.88, 7858.13, 476.25, 476.25);
new MazeWall(this.game, -3095.63, 7858.13, 476.25, 476.25);
new MazeWall(this.game, 6429.38, 7858.13, 476.25, 476.25);
new MazeWall(this.game, 6905.63, 7858.13, 476.25, 476.25);
new MazeWall(this.game, 7381.88, 7858.13, 476.25, 476.25);
new MazeWall(this.game, 7858.13, 7858.13, 476.25, 476.25);
new MazeWall(this.game, 8334.38, 7858.13, 476.25, 476.25);
new MazeWall(this.game, 8810.63, 7858.13, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 8334.38, 476.25, 476.25);
new MazeWall(this.game, -6429.38, 8334.38, 476.25, 476.25);
new MazeWall(this.game, 8810.63, 8334.38, 476.25, 476.25);
new MazeWall(this.game, -8810.63, 8810.63, 476.25, 476.25);
new MazeWall(this.game, -8334.38, 8810.63, 476.25, 476.25);
new MazeWall(this.game, -7858.13, 8810.63, 476.25, 476.25);
new MazeWall(this.game, -7381.88, 8810.63, 476.25, 476.25);
new MazeWall(this.game, -6905.63, 8810.63, 476.25, 476.25);
new MazeWall(this.game, -6429.38, 8810.63, 476.25, 476.25);
new MazeWall(this.game, 5953.13, 8810.63, 476.25, 476.25);
new MazeWall(this.game, 6429.38, 8810.63, 476.25, 476.25);
new MazeWall(this.game, 6905.63, 8810.63, 476.25, 476.25);
new MazeWall(this.game, 7381.88, 8810.63, 476.25, 476.25);
new MazeWall(this.game, 7858.13, 8810.63, 476.25, 476.25);
new MazeWall(this.game, 8334.38, 8810.63, 476.25, 476.25);
new MazeWall(this.game, 8810.63, 8810.63, 476.25, 476.25);
    }
}