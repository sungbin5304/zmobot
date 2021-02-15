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

import '../../extensions/String';
import { Collection } from '../../KClass/Collection';
import { Bot } from '../../secret/Bot';
import { TemplateMessageUtil } from '../../util/TemplateMessageUtil';

export class Fish {
    name: string;
    imageUrl: string;
    date: string;
    time: string;
    locate: string;
    size: string;
    money: string;

    sendInformation = (channelId: string, description: string = `${this.name} 물고기 정보`) => {
        TemplateMessageUtil.sendFeedContent(
            channelId, description, Bot.SITE, Bot.NAME,
            this.toString().toTextDescFragment(description),
            undefined, [this.imageUrl.toImageFragment()]
        );
    }

    toString = () => `
        이름: ${this.name}
        출현기간: ${this.date}
        출현시간: ${this.time}
        출현위치: ${this.locate}
        크기: ${this.size}
        가격: ${this.money}벨
    `.trimAllLine();

    constructor(name: string, imageUrl: string, date: string, time: string, locate: string, size: string, money: string) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.date = date;
        this.time = time;
        this.locate = locate;
        this.size = size;
        this.money = money;
    }
}