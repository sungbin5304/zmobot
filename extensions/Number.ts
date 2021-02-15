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

interface Number {
    toTimeString: () => string;
    toMoneyString: () => string;
}

Number.prototype.toMoneyString = function (): string {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '벨';
}

Number.prototype.toTimeString = function (): string {
    const day = this / 86400 | 0;
    const hour = this % 86400 / 3600 | 0;
    const min = this % 86400 % 3600 / 60 | 0;
    const sec = this % 86400 % 3600 % 60 % 60 | 0;
    let times = '';
    if (this > 86400) {
        times += day + '일 ';
    }
    if (this > 3600) {
        times += hour + '시간 ';
    }
    if (this > 60) {
        times += min + '분 ';
    }
    return times + sec + '초 전';
}