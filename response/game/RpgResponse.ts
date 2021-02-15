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
import { Long } from "bson";
import { ImageFragment, ProfileFragment, CustomFeedContent, CustomButtonStyle, CustomCarouselContent, CustomType, CustomAttachment, CustomInfo, AttachmentTemplate, UserInfo, ButtonFragment, CustomButtonDisplayType, Chat } from "node-kakao";
import { BaseKClass } from "../../kclass/BaseKClass";
import { User } from "../../model/user/User";
import { Bot } from "../../secret/Bot";
import { TemplateMessageUtil } from "../../util/TemplateMessageUtil";
import { Random } from '../../KClass/Random';
import { Collection } from '../../KClass/Collection';
import { CharacterData } from '../../model/rpg/character/CharacterData';
import { Character } from '../../model/rpg/character/Character';
import { RoomUtil } from '../../util/RoomUtil';

export class RpgResponse {

    static getCharacter = (channelId: string, user: any, userInfo: UserInfo, chat: Chat) => {
        const _user = user as User;
        if (_user.character === undefined) {
            const character = (Collection.shuffle(CharacterData.parse())[0] as Character);
            const description = `${userInfo.Nickname}님의 캐릭터`;
            TemplateMessageUtil.sendFeedContent(
                channelId, description, Bot.SITE, Bot.NAME,
                character.toString().toTextDescFragment('캐릭터 발급 완료!'),
                undefined, [character.imageUrl.toImageFragment()],
                new ProfileFragment(
                    userInfo.Nickname.toTextDescFragment(),
                    Bot.SITE.toUrlFragment(),
                    userInfo.OriginalProfileImageURL.toImageFragment(),
                    userInfo.OriginalProfileImageURL.toImageFragment()
                )
            );
            _user.character = character;
            RoomUtil.updateUser(_user);
        } else {
            chat.reply(`이미 ${userInfo.Nickname}님은 캐릭터가 있어요.\n캐릭터를 확인하시려면 '..내정보'를 입력해 주세요.`);
        }
    }

    static resetCharacter = (channelId: string, user: any, userInfo: UserInfo, chat: Chat) => {
        const _user = user as User;
        if (_user.character !== undefined) {
            if (_user.money > 10000) {
                const character = (Collection.shuffle(CharacterData.parse())[0] as Character);
                const description = `${userInfo.Nickname}님의 캐릭터`;
                TemplateMessageUtil.sendFeedContent(
                    channelId, description, Bot.SITE, Bot.NAME,
                    character.toString().toTextDescFragment('캐릭터 재발급 완료!'),
                    undefined, [character.imageUrl.toImageFragment()],
                    new ProfileFragment(
                        userInfo.Nickname.toTextDescFragment(),
                        Bot.SITE.toUrlFragment(),
                        userInfo.OriginalProfileImageURL.toImageFragment(),
                        userInfo.OriginalProfileImageURL.toImageFragment()
                    )
                );
                _user.character = character;
                _user.money -= 10000;
                RoomUtil.updateUser(_user);
            } else {
                chat.reply(`캐릭터재설정에 필요한 돈이 부족해요 :(\n
                    필요한 돈: 10,000벨 / 보유 돈: ${_user.money.toMoneyString()}`);
            }
        } else {
            chat.reply(`${userInfo.Nickname}님은 캐릭터가 없어요!\n
            먼저 '..캐릭터뽑기'를 이용해서 캐릭터를 뽑아주세요 :)`);
        }
    }

    static information = (channelId: string, user: any, userInfo: UserInfo) => {
        const description = `${userInfo.Nickname}님의 정보`;
        const _user = (user as User);

        if (_user.character === undefined) {
            return BaseKClass.vm.client.ChannelManager.get(Long.fromString(channelId))
                .sendText(`${userInfo.Nickname}님의 캐릭터가 없어요.\n
                먼저 '..캐릭터뽑기'를 이용해서 캐릭터를 뽑아주세요 :)`.trimAllLine());
        }

        const userInfoString = `
            돈: ${_user.money.toMoneyString()}
            레벨: ${_user.level}
            아이디: ${_user._id}
        `.trimAllLine()

        const characterString = `
            이름: ${_user.character.name}
            성별: ${_user.character.sex}
            종류: ${_user.character.kind}

            캐릭터 재설정은 '..캐릭터재설정' 입력!
            캐릭터 재설정 비용은 10,000벨 이에요.
        `.trimAllLine();

        TemplateMessageUtil.sendCarouselContent(
            channelId, description, Bot.SITE, 2,
            [userInfoString.toTextDescFragment('기본 정보'),
            characterString.toTextDescFragment('캐릭터 정보')],
            Collection.ofUndefineds(2),
            [undefined, [_user.character.imageUrl.toImageFragment()]],
            [new ProfileFragment(
                userInfo.Nickname.toTextDescFragment(),
                Bot.SITE.toUrlFragment(),
                userInfo.OriginalProfileImageURL.toImageFragment(),
                userInfo.OriginalProfileImageURL.toImageFragment()
            ), new ProfileFragment(
                userInfo.Nickname.toTextDescFragment(),
                Bot.SITE.toUrlFragment(),
                userInfo.OriginalProfileImageURL.toImageFragment(),
                userInfo.OriginalProfileImageURL.toImageFragment()
            )]
        );
    }
}