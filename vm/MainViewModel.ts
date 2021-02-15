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

import { Long, TalkClient } from 'node-kakao';
import _Firebase from 'firebase';

export class MainViewModel {
    firebase: _Firebase.app.App;
    userDb: Nedb;
    client: TalkClient;

    fishs = [];
    characters = [];

    fishingUser = {};
    messageCache = {};
    messageRead = {};

    clear = () => {
        this.fishingUser = {};
        this.messageCache = {};
        this.messageRead = {};
    }

    private static _instance = new MainViewModel();
    private constructor() { }

    static instance = (): MainViewModel => {
        return MainViewModel._instance;
    }
}