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

import { MainViewModel } from '../vm/MainViewModel';
import { Long } from 'bson';
import { ImageFragment, ProfileFragment, CustomFeedContent, CustomButtonStyle, CustomCarouselContent, CustomType, CustomAttachment, CustomInfo, AttachmentTemplate, ChatUserInfo, TextDescFragment, ButtonFragment, SocialFragment } from 'node-kakao';
import { Bot } from '../secret/Bot';
import { Collection } from '../KClass/Collection';
import { BaseKClass } from '../kclass/BaseKClass';

export class TemplateMessageUtil {

    static sendFeedContent =
        (channelId: string, description: string, clickUrl: string,
            botName: string = Bot.NAME,
            feedTexts: TextDescFragment | undefined = undefined,
            buttons: Array<ButtonFragment | undefined> = undefined,
            images: Array<ImageFragment | undefined> = undefined,
            profiles: ProfileFragment | undefined = undefined,
            socials: SocialFragment | undefined = undefined
        ) => {
            const feedItem = new CustomFeedContent(
                feedTexts, CustomButtonStyle.VERTICAL, buttons,
                images, 1, clickUrl.toUrlFragment(),
                true, clickUrl.toUrlFragment(), profiles, socials
            );

            const content = new CustomAttachment(
                new CustomInfo(
                    description, CustomType.FEED, 'plusfriend_bot', Bot.SITE,
                    '6.4.5', '6.4.5', '2.6.1', '2.3.5', undefined, botName, Bot.IMAGE,
                    undefined, clickUrl.toUrlFragment(), true, false, false, false, undefined, true
                ), feedItem
            );

            BaseKClass.vm.client.ChannelManager.get(Long.fromString(channelId))
                .sendTemplate(new AttachmentTemplate(content, description));
        }

    static sendCarouselContent =
        (channelId: string, description: string, clickUrl: string,
            itemsCount: number,
            feedTexts: Array<TextDescFragment | undefined> = Collection.ofUndefineds(itemsCount),
            buttons: Array<Array<ButtonFragment | undefined>> = Collection.ofUndefineds(itemsCount),
            images: Array<Array<ImageFragment | undefined>> = Collection.ofUndefineds(itemsCount),
            profiles: Array<ProfileFragment | undefined> = Collection.ofUndefineds(itemsCount),
            socials: Array<SocialFragment | undefined> = Collection.ofUndefineds(itemsCount)
        ) => {
            const feedItems = [];

            for (let i = 0; i < itemsCount; i++) {
                const item = new CustomFeedContent(
                    feedTexts[i], CustomButtonStyle.VERTICAL, buttons[i],
                    images[i], itemsCount, clickUrl.toUrlFragment(),
                    true, clickUrl.toUrlFragment(), profiles[i], socials[i]
                );
                feedItems.push(item);
            }

            const templete = new CustomCarouselContent(CustomType.FEED, feedItems);

            const content = new CustomAttachment(
                new CustomInfo(
                    description, CustomType.CAROUSEL, 'plusfriend_bot', Bot.SITE,
                    '6.4.5', '6.4.5', '2.6.1', '2.3.5', undefined, Bot.NAME, Bot.IMAGE,
                    undefined, clickUrl.toUrlFragment(), true, false, false, false, undefined, true
                ), templete
            );
            BaseKClass.vm.client.ChannelManager.get(Long.fromString(channelId))
                .sendTemplate(new AttachmentTemplate(content, description));
        }
}