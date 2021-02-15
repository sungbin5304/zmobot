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

import { ImageFragment, TextDescFragment, URLFragment } from 'node-kakao';

interface String {
    replaceAll: (originText: string, replacement: string) => string;
    trimAllLine: () => string;
    toUrlFragment: () => URLFragment;
    toTextDescFragment: (description?: string) => TextDescFragment
    toImageFragment: () => ImageFragment;
    isEmpty: () => boolean;
    isBlank: () => boolean;
    isNotEmpty: () => boolean;
    isNotBlank: () => boolean;
    contains: () => boolean;
}

String.prototype.toImageFragment = function (): ImageFragment {
    return new ImageFragment(this);
}

String.prototype.contains = function (string: string): boolean {
    return this.indexOf(string) !== -1;
}

String.prototype.replaceAll = function (originText: string, replacement: string): string {
    return this.split(originText).join(replacement);
}

String.prototype.isEmpty = function (): boolean {
    return this.length === 0; 
}

String.prototype.isBlank = function (): boolean {
    const cache = this.replaceAll(' ', '');
    return cache.isEmpty();
}

String.prototype.isNotEmpty = function (): boolean {
    return !this.isEmpty();
}

String.prototype.isNotBlank = function (): boolean { 
    return !this.isBlank();
}

String.prototype.trimAllLine = function (): string {
    return this.split('\n').map((string: string) => string.trim()).join('\n');
}

String.prototype.toUrlFragment = function (): URLFragment {
    return new URLFragment(this, this, this, this);
}

String.prototype.toTextDescFragment = function (description: string = ''): TextDescFragment {
    return new TextDescFragment(this, description);
}