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

import { CharacterType } from "./CharacterType";
import '../../../extensions/String'

export class Character {
    name: string;
    sex: CharacterType;
    kind: CharacterType;
    imageUrl: string;

    toString = () => `
        이름: ${this.name}
        성별: ${this.sex}
        종류: ${this.kind}
    `.trimAllLine();

    constructor(
        name: string,
        sex: CharacterType,
        kind: CharacterType,
        imageUrl: string
    ) {
        this.name = name
        this.sex = sex
        this.kind = kind
        this.imageUrl = imageUrl
    }
}