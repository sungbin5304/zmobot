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

import { TalkClient, LoginError, Chat, ChatMention, AttachmentTemplate, ReplyAttachment, ChatChannel, ChatUserInfo, ChatUser, Long, FeedChat, DeleteAllFeed, OpenChatChannel, OpenChatUserInfo, OpenRewriteFeed} from 'node-kakao'
import { Message } from './model/message/Message';
import { MessageReadable } from './model/message/MessageReadable';
import { MessageReadableType } from './model/message/MessageReadableType';
import { Bot } from './secret/Bot';
import { KakaoAccount } from './secret/KakaoAccount';
import { MainViewModel } from './vm/MainViewModel';
import { Random } from './KClass/Random';
import * as Room from 'nedb';
import { User } from './model/user/User';
import { RpgResponse } from './response/game/RpgResponse';
import { ToolResponse } from './response/tool/ToolResponse';
import { FishingResponse } from './response/game/FishingResponse';
import { RoomUtil } from './util/RoomUtil';
import _Firebase from 'firebase';
import { Firebase } from './secret/Firebase';

import './extensions/Number';
import './extensions/Chat';
import './extensions/String';
import './extensions/Array';

const userDb = new Room({ filename: 'room/UserRoom.json', autoload: true });
userDb.persistence.setAutocompactionInterval(1000 * 60 * 10);
const adminId = ['335167103'];
const adminChannel = ['278423965470173'];
const client = new TalkClient(Bot.NAME, Bot.UUID);
const vm = MainViewModel.instance();
const firebase = _Firebase.initializeApp(Firebase.CONFIG);

vm.firebase = firebase;
vm.userDb = userDb;
vm.client = client;

let vmClearHour = new Date().getHours();

client.login(KakaoAccount.ID, KakaoAccount.PASSWORD)
    .then(() => console.log('Login succeed.'))
    .catch((error: LoginError) => {
        console.error(`Login failed. status: ${error.status}, message: ${error.message}`);
    });

client.on('message_read', (channel: ChatChannel<ChatUserInfo>, reader: ChatUser, readChatLogId: Long) => {
    const channelId = channel.Id.toString();
    const message = new Message(readChatLogId, channel.getUserInfo(reader), null, new Date().getTime() / 1000 | 0);
    if (!vm.messageRead[channelId]) vm.messageRead[channelId] = [];
    const messageReadable = new MessageReadable(MessageReadableType.READ, message);
    vm.messageRead[channelId].unshift(messageReadable);
});

client.on('message_deleted', (feed: FeedChat<DeleteAllFeed>) => {
    const channel = feed.Channel;
    const userInfo = channel.getUserInfo(feed.Sender);
    const message = Message.fromLogId(channel.Id, feed.Feed.logId);
    if (!message) return;
    feed.Channel.sendText(new ChatMention(userInfo), `님이 방금 삭제하신 메시지에요.\n\n${message.content}`);
});

client.on('message_hidden', (channel: OpenChatChannel<OpenChatUserInfo>, logId: Long, feed?: FeedChat<OpenRewriteFeed>) => {
    const message = Message.fromLogId(channel.Id, logId);
    if (!message) return;
    feed.Channel.sendText(`방금 가려진 메시지에요.\n\n${message.content}`);
});

client.on('message', async (chat: Chat) => {
    if (chat.Text === undefined) return;
    const userInfo = chat.Channel.getUserInfo(chat.Sender);
    const message = new Message(chat.LogId, userInfo, chat.Text, chat.SendTime);
    const messageReadable = new MessageReadable(MessageReadableType.CHAT, message);
    const userId = userInfo.Id.toString();
    const channelId = chat.Channel.Id.toString();
    const isAdmin = adminId.contains(userId) && adminChannel.contains(channelId);
    let user = await User.fromId(userId);

    if (chat.Channel.getUserInfoList().length === 2) {
        chat.reply('1대1 채팅은 지원하지 않아요 😢');
        return;
    }

    if (vmClearHour != new Date().getHours()) {
        vm.clear();
        vmClearHour = new Date().getHours();
    }

    if (!vm.messageRead[channelId]) vm.messageRead[channelId] = [];
    if (!vm.messageCache[channelId]) vm.messageCache[channelId] = []
    vm.messageCache[channelId].unshift(message);
    vm.messageRead[channelId].unshift(messageReadable);

    if (!vm.fishingUser[userId]) vm.fishingUser[userId] = false;

    if (user === null) {
        const newUser = User.createNew(userInfo.Id.toString(), userInfo.Nickname);
        RoomUtil.updateUser(newUser);
        user = newUser;
    }

    if (message.content === '..조회') {
        ToolResponse.getUsage(chat);
    }

    if (message.content === '..도움말') {
        ToolResponse.help(channelId);
    }

    if (message.content === '..캐릭터재설정') {
        RpgResponse.resetCharacter(channelId, user, userInfo, chat);
    }

    if (message.content === '..캐릭터뽑기') {
        RpgResponse.getCharacter(channelId, user, userInfo, chat);
    }

    if (message.content === '..내정보') {
        RpgResponse.information(channelId, user, userInfo)
    }

    if (message.content === '..db압축' && isAdmin) {
        userDb.persistence.compactDatafile();
        chat.reply('DB 압축 완료');
    }

    if (message.content.startsWith('..공지') && isAdmin) {
        ToolResponse.notice(message);
    }

    if (message.content === '..모든물고기') {
        FishingResponse.showAllFishs(channelId)
    }

    if (message.content === '..삭제' && isAdmin) {
        ToolResponse.deleteMessage(channelId, chat);
    }

    if (message.content === '..낚시') { // TODO: 시기별로 잡히는 거 다르게 하게
        FishingResponse.fishing(channelId, chat, user);
    }

    if (message.content.startsWith('..밑') && message.content.endsWith('메') && isAdmin) {
        ToolResponse.belowMessage(channelId, chat);
    }

    if (message.content.startsWith('..물고기')) {
        FishingResponse.information(channelId, chat);
    }

    if (message.content === '..안녕') {
        chat.Channel.sendTemplate(new AttachmentTemplate(
            ReplyAttachment.fromChat(chat), `안녕${'!'.repeat(Random.nextInt(1, 100))}`
        ));
    }

    if (message.content === '..박수') {
        chat.reply('👏'.repeat(Random.nextInt(1, 100)));
    }

    if (message.content.startsWith('..확성기')) {
        chat.shout(message.content.substring(5).trim());
    }

    if (message.content.startsWith('..프사')) {
        ToolResponse.profileImage(channelId, chat);
    }

    if (message.content.startsWith('..eval') && isAdmin) {
        ToolResponse.eval(chat);
    }

    if (message.content.startsWith('..읽은사람')) {
        ToolResponse.readUser(channelId, chat);
    }
});