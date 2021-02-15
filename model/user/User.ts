/**
 * Copyright (C) 2021 Sungbin Ji
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import '../../extensions/String'
import { BaseKClass } from '../../kclass/BaseKClass';
import { MainViewModel } from '../../vm/MainViewModel';
import { Character } from '../rpg/character/Character';
import { Rpg } from '../rpg/Rpg';

export class User {

    _id: string;
    money: number;
    nickname: string;
    level: number;
    game: Rpg;
    character: Character;

    constructor(
        _id: string,
        money: number,
        nickname: string,
        level: number,
        game: Rpg,
        character: Character,
    ) {
        this._id = _id
        this.money = money
        this.nickname = nickname
        this.level = level
        this.game = game
        this.character = character
    }

    static createNew = (_id: string, nickname: string) => new User(_id, 0, nickname, 0, Rpg.createNew(), undefined);

    static fromId = async (id: string): Promise<any> => {
        const result = new Promise((resolve, reject) => {
            BaseKClass.vm.userDb.findOne({ _id: id }, (error: Error | null, user: User) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(user);
                }
            });
        });
        return await result;
    }
}