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

interface Array<T> {
    size: () => number; // todo: getter
    random: (count?: number) => any;
    isEmpty: () => boolean;
    isNotEmpty: () => boolean;
    contains: (element: any) => boolean;
}

Array.prototype.contains = function (element: any): boolean {
    return this.indexOf(element) !== -1;
}

Array.prototype.size = function (): number {
    return this.length;
}

Array.prototype.isEmpty = function (): boolean {
    return this.size() === 0;
}

Array.prototype.isNotEmpty = function (): boolean {
    return this.size() !== 0;
}

Array.prototype.random = function (count: number = 1): any {
    const results = new Array(count).fill('').map(() => this[Math.random() * this.length | 0]);
    if (results.length === 1) return results[0];
    return results;
}