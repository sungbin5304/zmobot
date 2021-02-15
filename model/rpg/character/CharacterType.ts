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

export class CharacterType {
    static WOMEN = '여성';
    static MEN = '남성';

    static DOG = '개'; // 0
    static FROG = '개구리'; // 1
    static ANT_EATER = '개미핥기'; // 2
    static GORILLA = '고릴라'; // 3
    static CAT = '고양이'; // 4
    static BEAR = '곰'; // 5
    static LITTLE_BEAR = '꼬마곰'; // 6
    static WOLF = '늑대'; // 7
    static SQUIRREL = '다람쥐'; // 8
    static CHICKEN = '닭'; // 9
    static EAGLE = '독수리'; // 10
    static PIG = '돼지'; // 11
    static HORSE = '말'; // 12
    static OCTOPUS = '문어'; // 13
    static DEER = '사슴'; // 14
    static LION = '사자'; // 15
    static BIRD = '새'; // 16
    static MOUSE = '생쥐'; // 17
    static COW = '소' // 18
    static CROCODILE = '악어'; // 19
    static SHEEP = '양'; // 20
    static GOAT = '염소'; // 21
    static DUCK = '오리'; // 22
    static MONKEY = '원숭이'; // 23
    static KANGAROO = '캥거루'; // 24
    static ELEPHANT = '코끼리'; // 25
    static RHINO = '코뿔소'; // 26
    static KOALA = '코알라'; // 27
    static OSTRICH = '타조'; // 28
    static RABBIT = '토끼'; // 29
    static PENGUIN = '펭귄'; // 30
    static HIPPO = '하마'; // 31
    static HAMSTER = '햄스터'; // 32
    static TIGER = '호랑이'; // 33
    static UNKNOWN = '알 수 없음'; // UNKNOWN

    static loadTypeFromIndex = (index: number): string => {
        switch (index) {
            case 0: return CharacterType.DOG;
            case 1: return CharacterType.FROG;
            case 2: return CharacterType.ANT_EATER;
            case 3: return CharacterType.GORILLA;
            case 4: return CharacterType.CAT;
            case 5: return CharacterType.BEAR;
            case 6: return CharacterType.LITTLE_BEAR;
            case 7: return CharacterType.WOLF;
            case 8: return CharacterType.SQUIRREL;
            case 9: return CharacterType.CHICKEN;
            case 10: return CharacterType.EAGLE;
            case 11: return CharacterType.PIG;
            case 12: return CharacterType.HORSE;
            case 13: return CharacterType.OCTOPUS;
            case 14: return CharacterType.DEER;
            case 15: return CharacterType.LION;
            case 16: return CharacterType.BIRD;
            case 17: return CharacterType.MOUSE;
            case 18: return CharacterType.COW;
            case 19: return CharacterType.CROCODILE;
            case 20: return CharacterType.SHEEP;
            case 21: return CharacterType.GOAT;
            case 22: return CharacterType.DUCK;
            case 23: return CharacterType.MONKEY;
            case 24: return CharacterType.KANGAROO;
            case 25: return CharacterType.ELEPHANT;
            case 26: return CharacterType.RHINO;
            case 27: return CharacterType.KOALA;
            case 28: return CharacterType.OSTRICH;
            case 29: return CharacterType.RABBIT;
            case 30: return CharacterType.PENGUIN;
            case 31: return CharacterType.HIPPO;
            case 32: return CharacterType.HAMSTER;
            case 33: return CharacterType.TIGER;
            default: return CharacterType.UNKNOWN;
        }
    }
}