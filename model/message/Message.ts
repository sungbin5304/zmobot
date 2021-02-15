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

import '../../extensions/Number';
import '../../extensions/String';
import { Long } from 'bson';
import { ChatUserInfo } from 'node-kakao';
import { MainViewModel } from '../../vm/MainViewModel';
import { BaseKClass } from '../../kclass/BaseKClass';

export class Message {

    logId: Long;
    chatUserInfo: ChatUserInfo;
    content: string;
    time: number;

    toString = () => `
        아이디: ${this.logId},
        발송자: ${this.chatUserInfo.Nickname}
        메시지: ${this.content}
        전송 시간: ${this.time.toTimeString()}
    `.trimAllLine();

    static fromLogId = (channelId: Long, logId: Long): Message => {
        const message = BaseKClass.vm.messageCache[channelId.toString()];
        if (message == undefined) return null;
        return (message as Array<Message>).filter((message: Message) => message.logId.toString() == logId.toString())[0];
    }

    constructor(logId: Long, chatUserInfo: ChatUserInfo, content: string, time: number) {
        this.logId = logId;
        this.chatUserInfo = chatUserInfo;
        this.content = content;
        this.time = time;
    }
}