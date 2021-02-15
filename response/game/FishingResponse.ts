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

import { Chat, ImageFragment } from "node-kakao";
import { BaseKClass } from "../../kclass/BaseKClass";
import { Collection } from "../../KClass/Collection";
import { Random } from "../../KClass/Random";
import { Fish } from "../../model/fishing/Fish";
import { FishData } from "../../model/fishing/FishData";
import { User } from "../../model/user/User";
import { RoomUtil } from "../../util/RoomUtil";
import { TemplateMessageUtil } from "../../util/TemplateMessageUtil";

export class FishingResponse {

    static information = (channelId: string, chat: Chat) => {
        const name = chat.Text.substring(5).trim();
        const fish = FishData.fromName(name);

        if (fish === undefined) {
            chat.reply(`${name}은 없는 물고기에요 :(`);
            return;
        }

        const description = `${name} 물고기 정보`;
        fish.sendInformation(channelId, description);
    }

    static showAllFishs = (channelId: string) => {
        const description = '랜덤으로 10가지의 물고기만 보여줍니다.\n모든 물고기를 보시려면 클릭'
        const allFishsUrl = 'https://namu.wiki/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2%20%EC%8B%9C%EB%A6%AC%EC%A6%88/%EB%AC%BC%EA%B3%A0%EA%B8%B0';

        const feedTexts = [];
        const feedImages = [];

        let index = 1;

        Collection.shuffle(new FishData().getFishs()).forEach((fish: Fish) => {
            if (index > 10) return;
            feedTexts.push(fish.toString().toTextDescFragment(description));
            feedImages.push([new ImageFragment(fish.imageUrl)]);
            index++;
        });

        TemplateMessageUtil.sendCarouselContent(
            channelId, description, allFishsUrl, 10, feedTexts, Collection.ofUndefineds(10), feedImages
        );
    }

    static fishing = (channelId: string, chat: Chat, user: User) => {
        const isFishing = BaseKClass.vm.fishingUser[user._id];
       /*  if (isFishing) {
            return chat.reply('이미 낚시중이에요!\n잠시 후에 다시 낚시를 시도해 주세요 :)');
        } */
        BaseKClass.vm.fishingUser[user._id] = true;
        const fish = Collection.shuffle(new FishData().getFishs()).random() as Fish;
        const description = `${user.nickname}님이 ${fish.name} 낚시 성공!`;
        const successFishing = () => {
            RoomUtil.plusMoney(user, Number(fish.money.replace(',', '')));
            fish.sendInformation(channelId, description);
        }
        const endFishing = () => { BaseKClass.vm.fishingUser[user._id] = false; }
        switch (fish.size) {
            case '작다':
            case '약간 작다': {
                setTimeout(() => {
                    successFishing();
                    endFishing();
                }, 500);
                return;
            }
            case '중간':
            case '약간 크다': {
                chat.reply('물고기를 올리고 있어요!!\n잠시만 기다려 주세요!!!!');
                setTimeout(() => {
                    successFishing();
                    endFishing();
                }, 1500);
                return;
            }
            case '크다': {
                chat.reply('큰 물고기를 잡을거 같아요!!!\n잠시만 기다려 주세요!!!!!!!!');
                setTimeout(() => {
                    if (Random.nextBoolean()) {
                        successFishing();
                        endFishing();
                    } else {
                        chat.replyLongText(`${user.nickname}님의 물고기가 너무 커서 낚시줄이 끊겼어요 :(\n아쉽네요 ㅠㅠ`, `[잡히려던 물고기의 정보]\n${fish}`);
                        endFishing();
                    }
                }, 2500);
                return;
            }
            case '특대': {
                chat.reply('엄청 큰 물고기를 잡을거 같아요!!!\n잠시만 기다려 주세요!!!!!!!!');
                setTimeout(() => {
                    if (Random.nextInt(1, 100) >= 85) {
                        successFishing();
                        endFishing();
                    } else {
                        chat.replyLongText(`${user.nickname}님의 물고기가 너무 커서 낚시줄이 끊겼어요 :(\n아쉽네요 ㅠㅠ`, `[잡히려던 물고기의 정보]\n${fish}`);
                        endFishing();
                    }
                }, 4000);
                return;
            }
        }
    }
}