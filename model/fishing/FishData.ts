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

import { MainViewModel } from '../../vm/MainViewModel';
import '../../extensions/String';
import '../../extensions/Array';
import { Fish } from './Fish';
import { BaseKClass } from '../../kclass/BaseKClass';

export class FishData {

    private static HTML: string =
        `<tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B0%81%EC%8B%9C%EB%B6%95%EC%96%B4#s-4.2'
                    title='각시붕어'>납줄개</a><br><span class='wiki-size size-down-1'>タナゴ</span><br><span
                    class='wiki-size size-down-1'>Bitterling</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-bitterli...'
                    href='/jump/6smwnbJPpdjURpqT2jsk44S7pGJx9vjoNyQLv5yVLa0DBldloqMPqMexyT1TYXfPmvjaNnGWg73lgerZOfKX6Q%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='9176'
                                data-src='//w.namu.la/s/9bd1477fe95f2db7141a916c247094e763827de8421af9e6a01abc68ac91be10f5847acbfee1bdcd8bedd883b88b119578b20cf781fdf3a9297a1848da3b1f98e8aa3063a572809366d0def3e0466e1bf9ae57665daf7809a0bada4b76139ef7'
                                alt='NH-Icon-bitterli...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/9bd1477fe95f2db7141a916c247094e763827de8421af9e6a01abc68ac91be10f5847acbfee1bdcd8bedd883b88b119578b20cf781fdf3a9297a1848da3b1f98e8aa3063a572809366d0def3e0466e1bf9ae57665daf7809a0bada4b76139ef7'
                                    alt='NH-Icon-bitterli...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~9월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>900</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%94%BC%EB%9D%BC%EB%AF%B8'
                    title='피라미'>피라미</a><br><span class='wiki-size size-down-1'>オイカワ</span><br><span
                    class='wiki-size size-down-1'>Pale chub</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-palechub'
                    href='/jump/6smwnbJPpdjURpqT2jsk44S7pGJx9vjoNyQLv5yVLa3o9x9830ZTWg7MmXGErDr1eIUxLqgDGezzPh3W9VDISA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='9576'
                                data-src='//w.namu.la/s/471ded776d3bf87c4df144b5d55b163081d8664408d03babb2b2b18e113a58065b985641a153d10b7373f55a944f54c9be7af12212ff42c5e8769d368cd213fa86a779830bb9721368aef4f7d3a1af21a40627adcde71999c63ab0e5d0e6ef24'
                                alt='NH-Icon-palechub'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/471ded776d3bf87c4df144b5d55b163081d8664408d03babb2b2b18e113a58065b985641a153d10b7373f55a944f54c9be7af12212ff42c5e8769d368cd213fa86a779830bb9721368aef4f7d3a1af21a40627adcde71999c63ab0e5d0e6ef24'
                                    alt='NH-Icon-palechub'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>200</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%B6%95%EC%96%B4'
                    title='붕어'>붕어</a><br><span class='wiki-size size-down-1'>フナ</span><br><span
                    class='wiki-size size-down-1'>Crucian carp</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-crucianc...'
                    href='/jump/6smwnbJPpdjURpqT2jsk44S7pGJx9vjoNyQLv5yVLa0h4eiOFPtMdgb4wLKg4LmYNPt4UkVdoZZbsDBPwsy0Bg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11396'
                                data-src='//w.namu.la/s/725e346bfd3504e170b7e57a22f0e660853a267971f817b801173ad011f0d14fdea239f9d51ab857f32bd197241ee9b8f1713d6db8d6ba147e4e29b3112c762e52da1da85d7987ab16d3525c26a76907f138980681710df3601483a896b86290'
                                alt='NH-Icon-crucianc...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/725e346bfd3504e170b7e57a22f0e660853a267971f817b801173ad011f0d14fdea239f9d51ab857f32bd197241ee9b8f1713d6db8d6ba147e4e29b3112c762e52da1da85d7987ab16d3525c26a76907f138980681710df3601483a896b86290'
                                    alt='NH-Icon-crucianc...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>160</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%99%A9%EC%96%B4'
                    title='황어'>황어</a><br><span class='wiki-size size-down-1'>ウグイ</span><br><span
                    class='wiki-size size-down-1'>Dace</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-dace'
                    href='/jump/6smwnbJPpdjURpqT2jsk44S7pGJx9vjoNyQLv5yVLa0g5QCycfUrJ7PTvZaTV9%2Br' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10364'
                                data-src='//w.namu.la/s/5ded10abedd111dcc07a5521d2ee3f6b18e9a5c644c838ba3e1ae6f6f5fec10d775182058b5016ace6a9b59e4bdb059b458f155c504e8b7f9e45dd89c1335b8b997b042c59df89882bff94a387d97dfcfd4b0433d6ed09114190fca734b5d400'
                                alt='NH-Icon-dace'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/5ded10abedd111dcc07a5521d2ee3f6b18e9a5c644c838ba3e1ae6f6f5fec10d775182058b5016ace6a9b59e4bdb059b458f155c504e8b7f9e45dd89c1335b8b997b042c59df89882bff94a387d97dfcfd4b0433d6ed09114190fca734b5d400'
                                    alt='NH-Icon-dace'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>240</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%9E%89%EC%96%B4'
                    title='잉어'>잉어</a><br><span class='wiki-size size-down-1'>コイ</span><br><span
                    class='wiki-size size-down-1'>Carp</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-carp'
                    href='/jump/6smwnbJPpdjURpqT2jsk44S7pGJx9vjoNyQLv5yVLa2VWTc%2FkA8iQTjCpBbJwadE' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='12845'
                                data-src='//w.namu.la/s/295010f72ff6e95479ed264d5fcb7e8ba29fe61d3bf113c6f10abcf50ea257f0d01cb81fd32a57af19395eef531230d1cf6fc392cc41b79d0921cff9ef761933c284e80acfd1d17f579ce5ef623d59c272f64b39e674fe1721d2914eef4ee1a7'
                                alt='NH-Icon-carp'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/295010f72ff6e95479ed264d5fcb7e8ba29fe61d3bf113c6f10abcf50ea257f0d01cb81fd32a57af19395eef531230d1cf6fc392cc41b79d0921cff9ef761933c284e80acfd1d17f579ce5ef623d59c272f64b39e674fe1721d2914eef4ee1a7'
                                    alt='NH-Icon-carp'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>300</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%B9%84%EB%8B%A8%EC%9E%89%EC%96%B4'
                        title='비단잉어'>비단잉어</a></strong><br><span class='wiki-size size-down-1'>ニシキゴイ</span><br><span
                    class='wiki-size size-down-1'>Koi</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-koi'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ48AdapdD%2FTkZX6dZY6P5H8' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='12823'
                                data-src='//w.namu.la/s/2e95acd8a038ce8435ddfd87e26ff3f327539e945aea8d77d237f9728d8666cbad44764e54ec93fe71557f2bc8135213b35cc33101a9ed8e109a5ce6e15ea7812fcee7d2e1f4b7684a50af1181756b5a0ceaf0d7ba812c53ae7db2b36bd4e1df'
                                alt='NH-Icon-koi'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/2e95acd8a038ce8435ddfd87e26ff3f327539e945aea8d77d237f9728d8666cbad44764e54ec93fe71557f2bc8135213b35cc33101a9ed8e109a5ce6e15ea7812fcee7d2e1f4b7684a50af1181756b5a0ceaf0d7ba812c53ae7db2b36bd4e1df'
                                    alt='NH-Icon-koi'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B8%88%EB%B6%95%EC%96%B4'
                    title='금붕어'>금붕어</a><br><span class='wiki-size size-down-1'>キンギョ</span><br><span
                    class='wiki-size size-down-1'>Goldfish</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-goldfish'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ6ujiOeXTHRN0gAvvEfAZcov%2F9Oa9rqf1BJ9JeuzPcrzQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='7182'
                                data-src='//w.namu.la/s/4bbd68853560dba70b912bc9ca66aa7a24d3443ae046cc455525a13a054ad274e732987173ea37678e2631888ea33c2a50667457e646f4e049a3657ca8fbebfcf85896eb599d124fa9df4c4100125c48e39862d8cd1489a10ef4286e4ee75c9b'
                                alt='NH-Icon-goldfish'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/4bbd68853560dba70b912bc9ca66aa7a24d3443ae046cc455525a13a054ad274e732987173ea37678e2631888ea33c2a50667457e646f4e049a3657ca8fbebfcf85896eb599d124fa9df4c4100125c48e39862d8cd1489a10ef4286e4ee75c9b'
                                    alt='NH-Icon-goldfish'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,300</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>툭눈금붕어<br><span class='wiki-size size-down-1'>デメキン</span><br><span
                    class='wiki-size size-down-1'>Pop-eyed
                    goldfish</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-popeyedg...'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ5HIG4CiaJoM3kTNZc0qu%2FCBXm5jfTP%2B4jM2EmEptrrkw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='7145'
                                data-src='//w.namu.la/s/3c281c49275a35ae699c839326f8bbff5e04fd78abf62ae516437c6db267fd3b8b671575732eaca3ccad7359f68ea0b888cb479775f61a611cbc8da3e80424c7c9b545d0610073ddba75adeed34bffcf204fc17bdffa0cea53a029ec11ec1a2e'
                                alt='NH-Icon-popeyedg...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/3c281c49275a35ae699c839326f8bbff5e04fd78abf62ae516437c6db267fd3b8b671575732eaca3ccad7359f68ea0b888cb479775f61a611cbc8da3e80424c7c9b545d0610073ddba75adeed34bffcf204fc17bdffa0cea53a029ec11ec1a2e'
                                    alt='NH-Icon-popeyedg...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,300</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong>난주</strong><br><span class='wiki-size size-down-1'>ランチュウ</span><br><span
                    class='wiki-size size-down-1'>Ranchu goldfish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-ranchugo...'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ6keEwC7DQ7h5nyFqrJDsnbbxXeuQmz%2Fy5r9n3wr7F59w%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10879'
                                data-src='//w.namu.la/s/759768559de8da9efa07e1cf75dc253b80e033de4dafee69c85d52eee7f8aa190564a94cdbf6aba0e41af4a4d01f8abd74c66809b23f878cc4d2dc1f0530a4ba123d22b49ce3c84049f50ae15f70cb75586ed5879bbca4567c6daa5b057c74c8'
                                alt='NH-Icon-ranchugo...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/759768559de8da9efa07e1cf75dc253b80e033de4dafee69c85d52eee7f8aa190564a94cdbf6aba0e41af4a4d01f8abd74c66809b23f878cc4d2dc1f0530a4ba123d22b49ce3c84049f50ae15f70cb75586ed5879bbca4567c6daa5b057c74c8'
                                    alt='NH-Icon-ranchugo...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%86%A1%EC%82%AC%EB%A6%AC'
                    title='송사리'>송사리</a><br><span class='wiki-size size-down-1'>メダカ</span><br><span
                    class='wiki-size size-down-1'>Killifish</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-killifis...'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ4iKLV5vUIOMkAxddhlVaFueOcKxjC%2F4mROlVeOjD%2FUtw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='5393'
                                data-src='//w.namu.la/s/127848c054522045c7722c334efe5107936b85c2bde0313d18b87c1005fffcff41cdec00d322cbc5be7930d0383c6ea966def7a5b8498753e4205a0405b4f1f330c1e3bef1db74d175b9be594cd9ebc5f60db86d5a0b925b93f9a4d392e09d2c'
                                alt='NH-Icon-killifis...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/127848c054522045c7722c334efe5107936b85c2bde0313d18b87c1005fffcff41cdec00d322cbc5be7930d0383c6ea966def7a5b8498753e4205a0405b4f1f330c1e3bef1db74d175b9be594cd9ebc5f60db86d5a0b925b93f9a4d392e09d2c'
                                    alt='NH-Icon-killifis...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~2월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>300</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 +</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B0%80%EC%9E%AC'
                    title='가재'>가재</a><br><span class='wiki-size size-down-1'>ザリガニ</span><br><span
                    class='wiki-size size-down-1'>Crawfish</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-crawfish'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ4KRTNhxByVJzHAyA95%2FWDkda3EhMF6V7CMTQrYSkZ4Nw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='9177'
                                data-src='//w.namu.la/s/b6539e51b7094b06fd9626572f98522c15161e93aaefd6277cd190f634e0874cfa1a5685f7ff16d6bcef331ec00d3ca7fff79dca71d18103f86e758e777a43efa97362b0532dd796b3ab9657d90460d73c501ddd3695a4c04504259f52bc7bf3'
                                alt='NH-Icon-crawfish'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/b6539e51b7094b06fd9626572f98522c15161e93aaefd6277cd190f634e0874cfa1a5685f7ff16d6bcef331ec00d3ca7fff79dca71d18103f86e758e777a43efa97362b0532dd796b3ab9657d90460d73c501ddd3695a4c04504259f52bc7bf3'
                                    alt='NH-Icon-crawfish'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~3월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>200</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 +</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%9E%90%EB%9D%BC(%EB%8F%99%EB%AC%BC)'
                    title='자라(동물)'>자라</a><br><span class='wiki-size size-down-1'>スッポン</span><br><span
                    class='wiki-size size-down-1'>Soft-shelled
                    turtle</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-softshel...'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ5%2BEifJjEwyZiVKh8e%2FVezAU8DLY334EQd8Jh%2BTkFnwmg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10497'
                                data-src='//w.namu.la/s/b9d7f4ddf49776a082c1f060c2b16678e30dff9d3708fca61f43be71bdf7d4c0a935056ed29a85527dfc45ed0de1dbd365507e815fe0aad92045c0f1d0b5903d6eb80bed4add050c45ad1b254fc66c9ff5ca6e27cb3214ad00d1db2a19b3551d'
                                alt='NH-Icon-softshel...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/b9d7f4ddf49776a082c1f060c2b16678e30dff9d3708fca61f43be71bdf7d4c0a935056ed29a85527dfc45ed0de1dbd365507e815fe0aad92045c0f1d0b5903d6eb80bed4add050c45ad1b254fc66c9ff5ca6e27cb3214ad00d1db2a19b3551d'
                                    alt='NH-Icon-softshel...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>8월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3,750</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%8A%91%EB%8C%80%EA%B1%B0%EB%B6%81'
                        title='늑대거북'>늑대거북</a></strong><br><span class='wiki-size size-down-1'>カミツキガメ</span><br><span
                    class='wiki-size size-down-1'>Snapping Turtle</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-snapping...'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ53qzOs6GuneJuPwbo%2BPK7p2pcM51IyCQI3%2FSF3xZD8LA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='13815'
                                data-src='//w.namu.la/s/0f0c1b6b3952e2df2c1ad19c6faa5b0f0b9eaa8ad09c86a002d48d19d6ed1937a5e1a97e983dfab30aa87ac2bcf61e6055ac6fa9f17203a7b96875abb6fbd0b2ad2d0115db371e9151288018f59df5373dfc3fbd0c0a57ae79e609e1f271a199'
                                alt='NH-Icon-snapping...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/0f0c1b6b3952e2df2c1ad19c6faa5b0f0b9eaa8ad09c86a002d48d19d6ed1937a5e1a97e983dfab30aa87ac2bcf61e6055ac6fa9f17203a7b96875abb6fbd0b2ad2d0115db371e9151288018f59df5373dfc3fbd0c0a57ae79e609e1f271a199'
                                    alt='NH-Icon-snapping...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>21시~4시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%98%AC%EC%B1%99%EC%9D%B4'
                    title='올챙이'>올챙이</a><br><span class='wiki-size size-down-1'>オタマジャクシ</span><br><span
                    class='wiki-size size-down-1'>Tadpole</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-tadpole'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ4eXms5n6wCi2sExeAkRF8l6U88FDUZdjPqmYeVpL2Ywg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='4539'
                                data-src='//w.namu.la/s/a358f33d6bbfa10cc57e17bd3a51a1ddaf0ad513027f9a7ef5080fc36ac98555e5f3f6e1a1124917a345caf1b6b7f517044dcd77d44934bce8a630e47662c0e0a635ce739b0c7ae05039f1bbdb716934b4dd8868fd7c26245f4730f9751187ca'
                                alt='NH-Icon-tadpole'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/a358f33d6bbfa10cc57e17bd3a51a1ddaf0ad513027f9a7ef5080fc36ac98555e5f3f6e1a1124917a345caf1b6b7f517044dcd77d44934bce8a630e47662c0e0a635ce739b0c7ae05039f1bbdb716934b4dd8868fd7c26245f4730f9751187ca'
                                    alt='NH-Icon-tadpole'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~7월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~1월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>100</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B0%9C%EA%B5%AC%EB%A6%AC'
                    title='개구리'>개구리</a><br><span class='wiki-size size-down-1'>カエル</span><br><span
                    class='wiki-size size-down-1'>Frog</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-frog'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ7HVZtTDS1jMkk2tvoFsT4C' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='7684'
                                data-src='//w.namu.la/s/1f7667c58b7f099777b88ac3fa26b8765a5710a9a897ecce0aafb1e982bd2169d201781e9de5d1726b5af99562c29b35aaf1617b449baa2751c44c137fa20d5585af065a6f404be16244364c5cf1cf6c6d2e77f20f38a7589aa288a300d99125'
                                alt='NH-Icon-frog'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/1f7667c58b7f099777b88ac3fa26b8765a5710a9a897ecce0aafb1e982bd2169d201781e9de5d1726b5af99562c29b35aaf1617b449baa2751c44c137fa20d5585af065a6f404be16244364c5cf1cf6c6d2e77f20f38a7589aa288a300d99125'
                                    alt='NH-Icon-frog'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~2월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>120</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 +</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>동사리<br><span class='wiki-size size-down-1'>ドンコ</span><br><span
                    class='wiki-size size-down-1'>Freshwater goby</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-freshwat...'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ51FPFowsLMq4D1uWBZ7f9GK7YA71rUX%2FpfdIgeN89r4Q%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='9998'
                                data-src='//w.namu.la/s/f38ce7bd1340f3f6e729d3d83ed75645ff43696baa181bbec83b03ef3b90ab9ce0247e7c6f882476ab3be5a1afe87126d3e8794410a58dfbd66ed5abfcae63db8a181a5bf32fcace0ea8c72bf7a67db24a34058ce96845dbde278686f4a53396'
                                alt='NH-Icon-freshwat...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/f38ce7bd1340f3f6e729d3d83ed75645ff43696baa181bbec83b03ef3b90ab9ce0247e7c6f882476ab3be5a1afe87126d3e8794410a58dfbd66ed5abfcae63db8a181a5bf32fcace0ea8c72bf7a67db24a34058ce96845dbde278686f4a53396'
                                    alt='NH-Icon-freshwat...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>400</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%AF%B8%EA%BE%B8%EB%9D%BC%EC%A7%80'
                    title='미꾸라지'>미꾸라지</a><br><span class='wiki-size size-down-1'>ドジョウ</span><br><span
                    class='wiki-size size-down-1'>Loach</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-loach'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ6Giaa%2FNj3t5lD8rZdTS55E' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='9303'
                                data-src='//w.namu.la/s/984372096982000c2af3d336f533e65c8e87d02964b96974e19c49647368e5d85595f96e2f701454da7ad243fe3888a3f30299d744a12df9d7016d6e3c0407ccb605b598a9512f967554e8116dcb8a04ac7eb3854a5a2d49828f07e5e2d69ac7'
                                alt='NH-Icon-loach'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/984372096982000c2af3d336f533e65c8e87d02964b96974e19c49647368e5d85595f96e2f701454da7ad243fe3888a3f30299d744a12df9d7016d6e3c0407ccb605b598a9512f967554e8116dcb8a04ac7eb3854a5a2d49828f07e5e2d69ac7'
                                    alt='NH-Icon-loach'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~11월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>400</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%A9%94%EA%B8%B0'
                    title='메기'>메기</a><br><span class='wiki-size size-down-1'>ナマズ</span><br><span
                    class='wiki-size size-down-1'>Catfish</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-catfish'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ5aguDAX7qroN3sTZiyDYPu%2FBTNPdzl6tUtrC8tkOeIrw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11053'
                                data-src='//w.namu.la/s/3138fea90f717b3a9ec1ccf24048186a2dd8f903181d74372a791af1a53b52a0079d2ffe2a1b9a1958aeb441e1a23bd4ef2998af1ed57394c0223bd891a6bd9171fdefe2e5947abc43a886293456f15865accbbc81e4b454d89b3715ba934e32'
                                alt='NH-Icon-catfish'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/3138fea90f717b3a9ec1ccf24048186a2dd8f903181d74372a791af1a53b52a0079d2ffe2a1b9a1958aeb441e1a23bd4ef2998af1ed57394c0223bd891a6bd9171fdefe2e5947abc43a886293456f15865accbbc81e4b454d89b3715ba934e32'
                                    alt='NH-Icon-catfish'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>800</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EA%B0%80%EB%AC%BC%EC%B9%98'
                        title='가물치'>가물치</a></strong><br><span class='wiki-size size-down-1'>ライギョ</span><br><span
                    class='wiki-size size-down-1'>Giant snakehead</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-giantsna...'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ7makdsSikkFkqCzTejuYX4YCFj81bxGeRw0VTEqdr2QA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10924'
                                data-src='//w.namu.la/s/177c01582da8f84429330ff62e4338cd1626a9317068307071e84563e375c7b84800c775ab3acbeec7775bb45711050b4a0aa5deb7d24da3a60b878994b900dea48295f7316bf91e7f85b2357e56eda2f5d2337e34041a3359546528b3133c81'
                                alt='NH-Icon-giantsna...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/177c01582da8f84429330ff62e4338cd1626a9317068307071e84563e375c7b84800c775ab3acbeec7775bb45711050b4a0aa5deb7d24da3a60b878994b900dea48295f7316bf91e7f85b2357e56eda2f5d2337e34041a3359546528b3133c81'
                                    alt='NH-Icon-giantsna...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~2월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8C%8C%EB%9E%91%EB%B3%BC%EC%9A%B0%EB%9F%AD' title='파랑볼우럭'>블루길</a><br><span
                    class='wiki-size size-down-1'>ブルーギル</span><br><span class='wiki-size size-down-1'>Bluegill</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-bluegill'
                    href='/jump/xmgs8m2Y%2FzLFHJmtoEx3doPANUBWrHA1ZX26qBvUtJ50tHlpQ1cBkdVaYGxoF5t2xL5xvNVdXEJU7uOXZ4uK%2Fg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10503'
                                data-src='//w.namu.la/s/d483c5e566075fe7c3197c2b4eaa66888fa57f19868b34b8e24727d29e0ad35a743eacc56c1945e5a9097f02ee3c7f2c05f6bc03d8d834a6fb9d55c1b6183cd2d4daa7271b97333b9416539f84ab3ed0938e0274f6737fc5c3009b5ab245b18b'
                                alt='NH-Icon-bluegill'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/d483c5e566075fe7c3197c2b4eaa66888fa57f19868b34b8e24727d29e0ad35a743eacc56c1945e5a9097f02ee3c7f2c05f6bc03d8d834a6fb9d55c1b6183cd2d4daa7271b97333b9416539f84ab3ed0938e0274f6737fc5c3009b5ab245b18b'
                                    alt='NH-Icon-bluegill'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>180</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>옐로우퍼치<br><span class='wiki-size size-down-1'>イエローパーチ</span><br><span
                    class='wiki-size size-down-1'>Yellow perch</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-yellowpe...'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH9T9d71lm4u0CdVAwZdchhCeIdE6NJTJeGnSfwR2p2Usw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='9309'
                                data-src='//w.namu.la/s/8dcc519cb0a6797e4f00aedcf6970dbeb61871e2090f68dfa9f3f04d3ec1b362bb44ed159d19887774d1647a1b058852e51bd2ad63f3a49fdd8f68fd793982c4b0e8fa6d768a3c34fd04ef71d7cc236645642d592c0123dadecfcd5413f38d27'
                                alt='NH-Icon-yellowpe...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/8dcc519cb0a6797e4f00aedcf6970dbeb61871e2090f68dfa9f3f04d3ec1b362bb44ed159d19887774d1647a1b058852e51bd2ad63f3a49fdd8f68fd793982c4b0e8fa6d768a3c34fd04ef71d7cc236645642d592c0123dadecfcd5413f38d27'
                                    alt='NH-Icon-yellowpe...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~9월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>300</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%81%B0%EC%9E%85%EB%B0%B0%EC%8A%A4'
                    title='큰입배스'>큰입배스</a><br><span class='wiki-size size-down-1'>ブラックバス</span><br><span
                    class='wiki-size size-down-1'>Black bass</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-blackbas...'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH%2F%2FUJ2Q2FlgqPKLf%2FLTXDXvkQZ8IQJAAkvGGLtbZkMUOQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11924'
                                data-src='//w.namu.la/s/1eeccc580f54752f6e98ba9eef6b22aa9d39ecd362647389c762f2efe4c177c9d96f450b5d800dd965c492fd7923456c09545434ee0f099c97248262e3eacd1e0f05280a2ba6e2e27d843a7ecd567e38d508383d4ef4c0fbde40ea58b6e0aef5'
                                alt='NH-Icon-blackbas...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/1eeccc580f54752f6e98ba9eef6b22aa9d39ecd362647389c762f2efe4c177c9d96f450b5d800dd965c492fd7923456c09545434ee0f099c97248262e3eacd1e0f05280a2ba6e2e27d843a7ecd567e38d508383d4ef4c0fbde40ea58b6e0aef5'
                                    alt='NH-Icon-blackbas...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강,연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>400</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%8B%B8%EB%9D%BC%ED%94%BC%EC%95%84'
                    title='틸라피아'>틸라피아</a><br><span class='wiki-size size-down-1'>ティラピア</span><br><span
                    class='wiki-size size-down-1'>Tilapia</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-tilapia'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH%2FDA66WYhtwQNSxZen1ptP4BRj9H0nnQW3t7%2Ftp0dp0KA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='13686'
                                data-src='//w.namu.la/s/f114b15423351c33a9b0dffb6ff6ae9d2cb7594563dec29bec09ffa298ea0511583f1fc6e77173d5527ee6de433ecf07dbead56d4ec57c3aef8a3aab221f9ecf4bf0dce6e1b986b347ba7edc9621d89c5efba5e0b507db04f2777cb7e7b4f316'
                                alt='NH-Icon-tilapia'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/f114b15423351c33a9b0dffb6ff6ae9d2cb7594563dec29bec09ffa298ea0511583f1fc6e77173d5527ee6de433ecf07dbead56d4ec57c3aef8a3aab221f9ecf4bf0dce6e1b986b347ba7edc9621d89c5efba5e0b507db04f2777cb7e7b4f316'
                                    alt='NH-Icon-tilapia'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>800</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AF%BC%EB%AC%BC%EA%BC%AC%EC%B9%98%EA%B3%A0%EA%B8%B0' title='민물꼬치고기'>강꼬치고기</a><br><span
                    class='wiki-size size-down-1'>パイク</span><br><span class='wiki-size size-down-1'>Pike</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-pike'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH99Habu7QN1%2B4FJ1YX%2B0v60' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='13732'
                                data-src='//w.namu.la/s/ee208a05e3c6ca862069be57d48fe9052bfded499b28657ae6bdf3f035df5b5ee22f847df32d679209aebcf832e41b5b7a7829d1e896962117539abd529f70c47d10a4131e826a51a7cbcce3acc02b3053c1f6c1c623ea8a05bb2a645f928868'
                                alt='NH-Icon-pike'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/ee208a05e3c6ca862069be57d48fe9052bfded499b28657ae6bdf3f035df5b5ee22f847df32d679209aebcf832e41b5b7a7829d1e896962117539abd529f70c47d10a4131e826a51a7cbcce3acc02b3053c1f6c1c623ea8a05bb2a645f928868'
                                    alt='NH-Icon-pike'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~12월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~6월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,800</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%83%80%EC%9A%B4%EC%9C%BC%EB%A1%9C%20%EB%86%80%EB%9F%AC%EA%B0%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='타운으로 놀러가요 동물의 숲'>타운으로 놀러가요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%B9%99%EC%96%B4'
                    title='빙어'>빙어</a><br><span class='wiki-size size-down-1'>ワカサギ</span><br><span
                    class='wiki-size size-down-1'>Pond smelt</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-pondsmel...'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH%2BRe5qfWpl1pdl3IlYziMmL3LQDUmpvp6mHHgCiFmh7aA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='8271'
                                data-src='//w.namu.la/s/7ebd97f473f10ff2c3fcceebc42de90398ec3171e876ca975ec673b73bf4593bb857290757209dd299f2fd0d0e9b975c6598bc0ae34833bfae228884629eec3c591f37a45aeaaf0b44ec53ca4fffddc5c7147f7447c0b65acdcfc1c5c32799ae'
                                alt='NH-Icon-pondsmel...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/7ebd97f473f10ff2c3fcceebc42de90398ec3171e876ca975ec673b73bf4593bb857290757209dd299f2fd0d0e9b975c6598bc0ae34833bfae228884629eec3c591f37a45aeaaf0b44ec53ca4fffddc5c7147f7447c0b65acdcfc1c5c32799ae'
                                    alt='NH-Icon-pondsmel...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~2월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~8월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%9D%80%EC%96%B4(%EC%96%B4%EB%A5%98)'
                    title='은어(어류)'>은어</a><br><span class='wiki-size size-down-1'>アユ</span><br><span
                    class='wiki-size size-down-1'>Sweetfish</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-sweetfis...'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH%2FYw86WE7yWHy3xbMwkXvKKj%2FzwUzLdMGh1AXEY4UY22g%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10676'
                                data-src='//w.namu.la/s/b7ee05e90584ce4b396105dc711ea5b06609ba2944218347c3496930e619ec9a9918f0b5c51f1015ec2d983ce6840f670111d738370cda763f513db7953c4e3582069f77a8238e0fbb351ae1be3ce9807ca5a89956e2df52de9cbff861e7e290'
                                alt='NH-Icon-sweetfis...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/b7ee05e90584ce4b396105dc711ea5b06609ba2944218347c3496930e619ec9a9918f0b5c51f1015ec2d983ce6840f670111d738370cda763f513db7953c4e3582069f77a8238e0fbb351ae1be3ce9807ca5a89956e2df52de9cbff861e7e290'
                                    alt='NH-Icon-sweetfis...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>7월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1월~3월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>900</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%82%B0%EC%B2%9C%EC%96%B4'
                    title='산천어'>산천어</a><br><span class='wiki-size size-down-1'>ヤマメ</span><br><span
                    class='wiki-size size-down-1'>Cherry salmon</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-cherrysa...'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH%2F9sdrVuxa7CakYCF%2FJiOE5vqrbJXsnCBwVXoKXpn9Jwg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10264'
                                data-src='//w.namu.la/s/ac204bd27f031ae54e7e2127b5fcf2f38390ffdec751e204f20f2cfda93ad78f54ee2df689f2c13f03d475399f0dbbb074efa90b784f49b67ee2db881af4bfca21227abab34a6427719b868c2ce0f5cb81545d2fdb02a35001180d1d2283fdef'
                                alt='NH-Icon-cherrysa...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/ac204bd27f031ae54e7e2127b5fcf2f38390ffdec751e204f20f2cfda93ad78f54ee2df689f2c13f03d475399f0dbbb074efa90b784f49b67ee2db881af4bfca21227abab34a6427719b868c2ce0f5cb81545d2fdb02a35001180d1d2283fdef'
                                    alt='NH-Icon-cherrysa...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~6월<br>9월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~12월<br>3월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시(봄)<br>24시간 출현(가을)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>절벽 위</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B3%A4%EB%93%A4%EB%A7%A4%EA%B8%B0'
                    title='곤들매기'>열목어</a><a class='wiki-fn-content'
                    title='오역이다. 작중 부엉이 &#39;열목어는 큰 곤들매기다&#39; 라고 하는데 열목어와 곤들매기는 분류부터가 다르다. 일본판 명칭도 북미판 명칭도 모두 곤들매기를 가리키는 표현인데 왜 바꿨는지는 의문. 본작에서 등장한 건 곤들매기속에 속하는 &#39;홍송어&#39;라는 물고기로, 애초에 제작국가인 일본에는 열목어가 서식하지 않는다.'
                    href='#fn-2'><span class='target' id='rfn-2'></span>&#91;2&#93;</a><br><span
                    class='wiki-size size-down-1'>オオイワナ</span><br><span class='wiki-size size-down-1'>Char</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-char'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH%2FxKBs8gReYZLK1YHcC%2Bja6' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='9964'
                                data-src='//w.namu.la/s/c6d66c3ffe2fe38768db873db775bbdcfebc7b040169133a3415af56473aa7346cc4ae05ffe82f5b93671bcc95e8580a0ec182e1e747cb2615db7fbfdbd6f32098043f5d4abce6515e4a3cdee51b846543c20bcb25e534035512a7b433d116b9'
                                alt='NH-Icon-char'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/c6d66c3ffe2fe38768db873db775bbdcfebc7b040169133a3415af56473aa7346cc4ae05ffe82f5b93671bcc95e8580a0ec182e1e747cb2615db7fbfdbd6f32098043f5d4abce6515e4a3cdee51b846543c20bcb25e534035512a7b433d116b9'
                                    alt='NH-Icon-char'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~6월<br>9월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~12월<br>3월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시(봄)<br>24시간 출현(가을)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>절벽 위</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3,800</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong>금송어</strong><br><span
                    class='wiki-size size-down-1'>ゴールデントラウト</span><br><span class='wiki-size size-down-1'>Golden
                    trout</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-goldentr...'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH%2F%2FGV9Wmqn9EoENl9s7j9KKwUOTgAf8Yhncvvcrjgggvg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10442'
                                data-src='//w.namu.la/s/6345a4cd47721a04322df63a2d53a235de86ffaaf921c5676c2e8a7125fa3926245df021de453074029b436523f8586f0246aed4a39605e6bbc2e4aa047f5ee56f8963c70b010401dadc157b8a32834b67a989b4995dd41565106f09fc046e70'
                                alt='NH-Icon-goldentr...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/6345a4cd47721a04322df63a2d53a235de86ffaaf921c5676c2e8a7125fa3926245df021de453074029b436523f8586f0246aed4a39605e6bbc2e4aa047f5ee56f8963c70b010401dadc157b8a32834b67a989b4995dd41565106f09fc046e70'
                                    alt='NH-Icon-goldentr...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~5월<br>9월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~11월<br>3월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>절벽 위</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>15,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EC%9D%B4%ED%86%A0#s-4'
                        title='이토'>일본연어</a></strong><br><span class='wiki-size size-down-1'>イトウ</span><br><span
                    class='wiki-size size-down-1'>Stringfish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-stringfi...'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH%2F5d5UQ7%2BbapULdALAaqXy7tZ4LkwhxW%2B2%2BkNmMzkroKg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='12651'
                                data-src='//w.namu.la/s/2f9eec2f43621b4dfc5913bbd4a693bdc06e1e4a2430fc7f9f91a42e89a1f34b0c01b58124cb64c2e890faad34e91696b207c51b49b277f3167925eb44cf70d16dee71e29abaaaf975b8d66c28402c482e08aa16b023f03f8c43d888b9e91264'
                                alt='NH-Icon-stringfi...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/2f9eec2f43621b4dfc5913bbd4a693bdc06e1e4a2430fc7f9f91a42e89a1f34b0c01b58124cb64c2e890faad34e91696b207c51b49b277f3167925eb44cf70d16dee71e29abaaaf975b8d66c28402c482e08aa16b023f03f8c43d888b9e91264'
                                    alt='NH-Icon-stringfi...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>절벽 위</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>15,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%97%B0%EC%96%B4'
                    title='연어'>연어</a><br><span class='wiki-size size-down-1'>サケ</span><br><span
                    class='wiki-size size-down-1'>Salmon</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-salmon'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH%2B31EXa7IILKUS6vu5TENXFAYsgC8O7AXZshIVNfIqysw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11615'
                                data-src='//w.namu.la/s/579151faaadf76814cb560688f364fb03aadcb98b0e8dd6a02bfaa923689bf90fa6a30c383084d0782c3ff94f3b2f51268de60f080ecb943510b87c1c9fc138e6249ed38759be342c5a59e716fb2762d248df78577712341b388faa941706d8c'
                                alt='NH-Icon-salmon'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/579151faaadf76814cb560688f364fb03aadcb98b0e8dd6a02bfaa923689bf90fa6a30c383084d0782c3ff94f3b2f51268de60f080ecb943510b87c1c9fc138e6249ed38759be342c5a59e716fb2762d248df78577712341b388faa941706d8c'
                                    alt='NH-Icon-salmon'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>하구</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>700</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%97%B0%EC%96%B4'
                    title='연어'>왕연어</a><br><span class='wiki-size size-down-1'>キングサーモン</span><br><span
                    class='wiki-size size-down-1'>King salmon</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-kingsalm...'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH9VBTC9KGrMMhYlKh%2BZ9hA%2BIUM02AzFQ%2Fz7gwtIZVFj%2BA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='15011'
                                data-src='//w.namu.la/s/df40efe18f2e2c71fcc9a090fe4e5f5474de61b0f542d9d02bf06788a390a0b5e28227aba7a6bc696476d4d9db92134d6460ccef2941e2d1ea70c107e43edd77a756452d1495df131c6d98d230ba1a0e04ded74e5e9166adcb0e08045c222082'
                                alt='NH-Icon-kingsalm...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/df40efe18f2e2c71fcc9a090fe4e5f5474de61b0f542d9d02bf06788a390a0b5e28227aba7a6bc696476d4d9db92134d6460ccef2941e2d1ea70c107e43edd77a756452d1495df131c6d98d230ba1a0e04ded74e5e9166adcb0e08045c222082'
                                    alt='NH-Icon-kingsalm...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>하구</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,800</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%B0%B8%EA%B2%8C'
                    title='참게'>참게</a><br><span class='wiki-size size-down-1'>シャンハイガニ</span><br><span
                    class='wiki-size size-down-1'>Mitten crab</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-mittencr...'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH%2Bv%2FP3o3wbQreFnl0lm88T3p637Mfkl3K0SHLss56xLwA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10744'
                                data-src='//w.namu.la/s/101a6fd07820346285605fbab40c0c3290ad78e55d1c6b8f9b580300c6d8396db263571a846a8b016f6f81d722922d8aaec8f13eabbe2bf37108a31c27c18972fba722d3bb1539a13315c95d6216310e710c8e60e6817d40a23d9e801c3b1635'
                                alt='NH-Icon-mittencr...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/101a6fd07820346285605fbab40c0c3290ad78e55d1c6b8f9b580300c6d8396db263571a846a8b016f6f81d722922d8aaec8f13eabbe2bf37108a31c27c18972fba722d3bb1539a13315c95d6216310e710c8e60e6817d40a23d9e801c3b1635'
                                    alt='NH-Icon-mittencr...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B5%AC%ED%94%BC'
                    title='구피'>구피</a><br><span class='wiki-size size-down-1'>グッピー</span><br><span
                    class='wiki-size size-down-1'>Guppy</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-guppy'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH%2B9OkF4Qw9iq7A8fvfoREkl' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='7904'
                                data-src='//w.namu.la/s/99dfd51fe8ddc10e861154bf1acfdd319fc201266f81c6f2c9936fae048395c467f4d33d928c09cd2ae3cff67bcae9a25941a66c6e7a5dff5e0864b61537b3c36e4aacc0554c288cc6ff70ec1f9c70ea1fbae331c2067b87a02a3d77214684f3'
                                alt='NH-Icon-guppy'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/99dfd51fe8ddc10e861154bf1acfdd319fc201266f81c6f2c9936fae048395c467f4d33d928c09cd2ae3cff67bcae9a25941a66c6e7a5dff5e0864b61537b3c36e4aacc0554c288cc6ff70ec1f9c70ea1fbae331c2067b87a02a3d77214684f3'
                                    alt='NH-Icon-guppy'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,300</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8B%A5%ED%84%B0%ED%94%BC%EC%8B%9C'
                    title='닥터피시'>닥터피시</a><br><span class='wiki-size size-down-1'>ドクターフィッシュ</span><br><span
                    class='wiki-size size-down-1'>Nibble fish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-nibblefi...'
                    href='/jump/fqPj5W3VSK51oWGXHziDpMnlpefdI0QgvqRnX1OUPH8xBItrFUSFI%2F%2FUkHeR0bfY6cAIDcw0qve2ml3To5aSZg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='7910'
                                data-src='//w.namu.la/s/cdaabb25c060ff418277f7452081f094c6f1dcf93fceb7fa7f6bc01e398ef04298f4dfe83f69b00273cf8265c3d7e892ffedfcb8deb2e06d6d4bcaafc75d1303827ef71a8af51f184e94f8e5405ddf96e67f89fa5cf3c10ef6d9a247f20c6a52'
                                alt='NH-Icon-nibblefi...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/cdaabb25c060ff418277f7452081f094c6f1dcf93fceb7fa7f6bc01e398ef04298f4dfe83f69b00273cf8265c3d7e892ffedfcb8deb2e06d6d4bcaafc75d1303827ef71a8af51f184e94f8e5405ddf96e67f89fa5cf3c10ef6d9a247f20c6a52'
                                    alt='NH-Icon-nibblefi...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AF%BC%EB%AC%BC%EC%B2%9C%EC%82%AC%EA%B3%A0%EA%B8%B0' title='민물천사고기'>천사어</a><br><span
                    class='wiki-size size-down-1'>エンゼルフィッシュ</span><br><span class='wiki-size size-down-1'>Angelfish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-angelfis...'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnoEOwcMGF4xXr%2FtKcNNQzz9EtCA2EN1b1RHWnn%2BG5p9QQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='6817'
                                data-src='//w.namu.la/s/3a3ef658958b90ceef93bcca70e9e9e6dab17e2cc0d0b56d0d863e99820800996a2383f9a636703d09dbe245352b26e48dfe75e21ec41b07c5166b0c126fd4a15dd5f831d21e699ecfe0cf4c8a67fc3843f802300d2608cb1b3b801badb696a8'
                                alt='NH-Icon-angelfis...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/3a3ef658958b90ceef93bcca70e9e9e6dab17e2cc0d0b56d0d863e99820800996a2383f9a636703d09dbe245352b26e48dfe75e21ec41b07c5166b0c126fd4a15dd5f831d21e699ecfe0cf4c8a67fc3843f802300d2608cb1b3b801badb696a8'
                                    alt='NH-Icon-angelfis...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EC%83%B4%EC%8B%B8%EC%9B%80%EA%B3%A0%EA%B8%B0' title='샴싸움고기'>베타</a><br><span
                    class='wiki-size size-down-1'>ベタ</span><br><span class='wiki-size size-down-1'>Betta</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-betta'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnr2KFjuYJZX9%2Fnm24Nb0s5E' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='15020'
                                data-src='//w.namu.la/s/48164ca1fee4ead38eaf50fc428d09eb637c5311b7c8cb5c5057cc30f67b3c1001e3707bff52af921c644e6318260950b04ede556fa3c481ddaf06c3ee25f0835d14376f1242c73cdddc5930e0363297520431152507a634e5510a51e28f7c3f'
                                alt='NH-Icon-betta'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/48164ca1fee4ead38eaf50fc428d09eb637c5311b7c8cb5c5057cc30f67b3c1001e3707bff52af921c644e6318260950b04ede556fa3c481ddaf06c3ee25f0835d14376f1242c73cdddc5930e0363297520431152507a634e5510a51e28f7c3f'
                                    alt='NH-Icon-betta'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%84%A4%EC%98%A8%ED%85%8C%ED%8A%B8%EB%9D%BC' title='네온테트라'>네온테트라</a><br><span
                    class='wiki-size size-down-1'>ネオンテトラ</span><br><span class='wiki-size size-down-1'>Neon tetra</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-neontetr...'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnpJez%2FhS8osauCL4sNmKhWdLJHrlxcp0nh%2F1CFS51xq3g%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='5690'
                                data-src='//w.namu.la/s/caf6704654836f5585da34614f3d31d4624d55cbbda7f181b78a9372ff676eb5eb746479818c712f6457205bda7b8040809d027b30d6dec7accd0a1c765d6a128e662777c6149e896552b01e013c6909fd0e8b250c7f1d1b645c802cd1990965'
                                alt='NH-Icon-neontetr...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/caf6704654836f5585da34614f3d31d4624d55cbbda7f181b78a9372ff676eb5eb746479818c712f6457205bda7b8040809d027b30d6dec7accd0a1c765d6a128e662777c6149e896552b01e013c6909fd0e8b250c7f1d1b645c802cd1990965'
                                    alt='NH-Icon-neontetr...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%83%80%EC%9A%B4%EC%9C%BC%EB%A1%9C%20%EB%86%80%EB%9F%AC%EA%B0%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='타운으로 놀러가요 동물의 숲'>타운으로 놀러가요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>레인보우피시<br><span class='wiki-size size-down-1'>レインボーフィッシュ</span><br><span
                    class='wiki-size size-down-1'>Rainbowfish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-rainbowf...'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnq%2BGd1pqLi6En292OdtIDusoq5bH%2FcV2xxpW7C4V6Fa6Q%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='6912'
                                data-src='//w.namu.la/s/415875031bc30b02af3966da43862e99f9cfc73554b8c0a4c39479b69e6b0fc11a66e63dbd9eb04db12d7bc316e066926acfac55e5f63727e3a9669944342cd05187d0221c0c364756f620424d6d69903c17904471c1f695ae1cb4e910ace613'
                                alt='NH-Icon-rainbowf...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/415875031bc30b02af3966da43862e99f9cfc73554b8c0a4c39479b69e6b0fc11a66e63dbd9eb04db12d7bc316e066926acfac55e5f63727e3a9669944342cd05187d0221c0c364756f620424d6d69903c17904471c1f695ae1cb4e910ace613'
                                    alt='NH-Icon-rainbowf...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>800</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%94%BC%EB%9D%BC%EB%83%90'
                    title='피라냐'>피라니아</a><a class='wiki-fn-content'
                    title='박물관 어항에 가까이 가면 피라냐도 어항 벽쪽에 붙어서 플레이어에게 접근한다. 이 포악한 성격은 고증오류로 부엉도 피라니아는 겁이 많은 물고기라고 설명까지 해준다.'
                    href='#fn-3'><span class='target' id='rfn-3'></span>&#91;3&#93;</a> <br><span
                    class='wiki-size size-down-1'>ピラニア</span><br><span class='wiki-size size-down-1'>Piranha</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-piranha'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnogfQrJpk31vKbktM9aI%2FBTF1R0AdNvrujsrvEIbQO7lQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='9018'
                                data-src='//w.namu.la/s/307595add24aeb3f85ce5742f63be6415a289138986b504c28fbaf90514df6ec6d70077fe34a809042ef53eb9972294804c113a29832b9399941cd568bf3e0da92c5432e7d0f345c684c956d1b26c3f49bf3b6d7ebbde3a56c3f762ab8de3fd5'
                                alt='NH-Icon-piranha'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/307595add24aeb3f85ce5742f63be6415a289138986b504c28fbaf90514df6ec6d70077fe34a809042ef53eb9972294804c113a29832b9399941cd568bf3e0da92c5432e7d0f345c684c956d1b26c3f49bf3b6d7ebbde3a56c3f762ab8de3fd5'
                                    alt='NH-Icon-piranha'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시<br>21시~4시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EC%95%84%EB%A1%9C%EC%99%80%EB%82%98'
                        title='아로와나'>아로와나</a></strong><br><span class='wiki-size size-down-1'>アロワナ</span><br><span
                    class='wiki-size size-down-1'>Arowana</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-arowana'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnoXzlFroLMdvG9rE1Rq9Tz3PcTs%2BWsdflgaA9MiVqBrEw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11804'
                                data-src='//w.namu.la/s/b390e02b1f52105ff3cde585fda6e3d72173b02b4717835df67f807ed364e822a095a4aa498ff562778fa5100ea9e365f5dfd2c6524fa52c5965bb724a0d285a20ea42853b2ed8eefafa3fec824a38ada79f52e287f8b9b4267fa60a64157593'
                                alt='NH-Icon-arowana'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/b390e02b1f52105ff3cde585fda6e3d72173b02b4717835df67f807ed364e822a095a4aa498ff562778fa5100ea9e365f5dfd2c6524fa52c5965bb724a0d285a20ea42853b2ed8eefafa3fec824a38ada79f52e287f8b9b4267fa60a64157593'
                                    alt='NH-Icon-arowana'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%8F%84%EB%9D%BC%EB%8F%84'
                        title='도라도'>도라도</a></strong><a class='wiki-fn-content'
                    title='놀동숲 시절부터 모동숲 1.2.1 버전까지는 일부 관상어 매니아들 사이에서 불리는 황금연어라는 명칭으로 등장.' href='#fn-4'><span class='target'
                        id='rfn-4'></span>&#91;4&#93;</a><br><span class='wiki-size size-down-1'>ドラド</span><br><span
                    class='wiki-size size-down-1'>Dorado</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-dorado'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnrDa3en%2BMtzlrgiJES%2F%2FnU8%2Fcghj4P1%2FCfhdhk%2BM3gfgA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='13304'
                                data-src='//w.namu.la/s/ae055c93fd9f4081ca78e8013e4ff0095843abd861c3d640c9c8fcf05d9492e918f83ba66a2037d16ba108fef19a5b4d685269d462769538c0b250e14acf09208d4d18d82afa841a1f876132f00fa0514ccc55cfd40ca268f2e9b8b43236bfbe'
                                alt='NH-Icon-dorado'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/ae055c93fd9f4081ca78e8013e4ff0095843abd861c3d640c9c8fcf05d9492e918f83ba66a2037d16ba108fef19a5b4d685269d462769538c0b250e14acf09208d4d18d82afa841a1f876132f00fa0514ccc55cfd40ca268f2e9b8b43236bfbe'
                                    alt='NH-Icon-dorado'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>4시~21시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>15,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EA%B0%80%EC%95%84'
                        title='가아'>가아</a></strong><br><span class='wiki-size size-down-1'>ガー</span><br><span
                    class='wiki-size size-down-1'>Gar</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-gar'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnr4oQgcKrd5%2Bp5EF76hSaFt' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11198'
                                data-src='//w.namu.la/s/86a94ab8312c324f85bf15997bb5a251d8b37cc140230907fa510d2601c7493937ceec2a616fd2a461616595b0af1b079ccc92f681236c1ed3a13a968d9be1996d681e7bb31ba63dd6afa2216dd6e6eac50d317eee6e293c0e1a289d34188e27'
                                alt='NH-Icon-gar'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/86a94ab8312c324f85bf15997bb5a251d8b37cc140230907fa510d2601c7493937ceec2a616fd2a461616595b0af1b079ccc92f681236c1ed3a13a968d9be1996d681e7bb31ba63dd6afa2216dd6e6eac50d317eee6e293c0e1a289d34188e27'
                                    alt='NH-Icon-gar'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>연못</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>6,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%ED%94%BC%EB%9D%BC%EB%A3%A8%EC%BF%A0'
                        title='피라루쿠'>피라루쿠</a></strong><br><span class='wiki-size size-down-1'>ピラルク</span><br><span
                    class='wiki-size size-down-1'>Arapaima</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-arapaima'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnoeA9SN5eGoV%2FVbzVjoNQHnlCwlDuVatr490Z0gN2XL3w%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='15266'
                                data-src='//w.namu.la/s/e97f5775d90d38c3bf56dfb886e2ca943d22ca16b8d7b23d017ae0742af01d25ec41990c5aef9bdf66fb7ad8f83c6c674a3bc85a30259f5b65ddba689c3b96200435a7c6ba3665451b9b8fe0ad2ce7bb9d856db31ad5b02b293bed0c592422c8'
                                alt='NH-Icon-arapaima'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/e97f5775d90d38c3bf56dfb886e2ca943d22ca16b8d7b23d017ae0742af01d25ec41990c5aef9bdf66fb7ad8f83c6c674a3bc85a30259f5b65ddba689c3b96200435a7c6ba3665451b9b8fe0ad2ce7bb9d856db31ad5b02b293bed0c592422c8'
                                    alt='NH-Icon-arapaima'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 +</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal'
                        href='/w/%ED%8F%B4%EB%A6%BD%ED%85%8C%EB%A3%A8%EC%8A%A4#s-2.2.2'
                        title='폴립테루스'>엔드리케리</a></strong><br><span class='wiki-size size-down-1'>エンドリケリー</span><br><span
                    class='wiki-size size-down-1'>Saddled bichir</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-saddledb...'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnpkLGmdrd6QvL415197cmUbFqXiA0fwy0HjtYvT%2Ft%2FgLA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10686'
                                data-src='//w.namu.la/s/7348801bbf36bcef3bada67abf044c6f6d17ae9762416748bf7b27429e756219a67dbbb20fb9a88035bb785e9bb8a24557a7bcf0e92252598a2d68d9e0ba0dcf8555bf97d204cd27706724d7df247263eec4f8cd3401bb803e84be67565b78d2'
                                alt='NH-Icon-saddledb...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/7348801bbf36bcef3bada67abf044c6f6d17ae9762416748bf7b27429e756219a67dbbb20fb9a88035bb785e9bb8a24557a7bcf0e92252598a2d68d9e0ba0dcf8555bf97d204cd27706724d7df247263eec4f8cd3401bb803e84be67565b78d2'
                                    alt='NH-Icon-saddledb...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>21시~4시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EC%B2%A0%EA%B0%91%EC%83%81%EC%96%B4'
                        title='철갑상어'>철갑상어</a></strong><br><span class='wiki-size size-down-1'>チョウザメ</span><br><span
                    class='wiki-size size-down-1'>Sturgeon</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-sturgeon'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mno6E5bR8KZpMGlbwUEfrpPboN98vvykfAleqwwxTImoWw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10472'
                                data-src='//w.namu.la/s/fa47a078c25e61ea1e592a752db3cbd8816257a0fe6c4341965b6115df4673fb28e45e2315fb4d7ca2922fb381eed4f72c19438ef0ec83ae9205ae1ac591a33f372e0ae2c00bc5a77584d3a3d5480ff79f08cb13b578e448ec7e8b8bb9ff2c16'
                                alt='NH-Icon-sturgeon'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/fa47a078c25e61ea1e592a752db3cbd8816257a0fe6c4341965b6115df4673fb28e45e2315fb4d7ca2922fb381eed4f72c19438ef0ec83ae9205ae1ac591a33f372e0ae2c00bc5a77584d3a3d5480ff79f08cb13b578e448ec7e8b8bb9ff2c16'
                                    alt='NH-Icon-sturgeon'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>하구</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%81%B4%EB%A6%AC%EC%98%A4%EB%84%A4'
                    title='클리오네'>클리오네</a><a class='wiki-fn-content'
                    title='이 녀석을 박물관에 기증하면 여러 마리가 빙글빙글 돌아가는 모습을 볼 수 있다.  귀엽다 배치할 경우 해마, 통안어와 같은 원통형 수조에 장식되는데 불을 켜거나 끄면 입을 벌렸다가 닫는다.'
                    href='#fn-5'><span class='target' id='rfn-5'></span>&#91;5&#93;</a><br><span
                    class='wiki-size size-down-1'>クリオネ</span><br><span class='wiki-size size-down-1'>Sea
                    butterfly</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-seabutte...'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnqlpI3O1sUdvShU00cautHLAqAPySNQPpxnFtdZ88OYqw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='5041'
                                data-src='//w.namu.la/s/0af82f02ba52ae8e0c88ec1f6782c7546b02741b4453c4c6bda605a31e6bb382dfb0c1021f1253cb80a5f2a7748f6f68cc6bad3dd56f0b390b20c468b9f5083c6a18b0dd063a8932f8b3dfcd356802077926d08265fef31298eb7fe6edd4dc6f'
                                alt='NH-Icon-seabutte...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/0af82f02ba52ae8e0c88ec1f6782c7546b02741b4453c4c6bda605a31e6bb382dfb0c1021f1253cb80a5f2a7748f6f68cc6bad3dd56f0b390b20c468b9f5083c6a18b0dd063a8932f8b3dfcd356802077926d08265fef31298eb7fe6edd4dc6f'
                                    alt='NH-Icon-seabutte...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%95%B4%EB%A7%88'
                    title='해마'>해마</a><br><span class='wiki-size size-down-1'>タツノオトシゴ</span><br><span
                    class='wiki-size size-down-1'>Sea horse</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 해마 아이콘'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueH5we%2B6jhQukEJ8EemoJRWg9i27NsQFvo6RKY12rS%2FRbK3kpaNhnzy8OOv4WzRyMXA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='4880'
                                data-src='//ww.namu.la/s/d3b56ad70a89881d2899c641ca7c979b3e8dc3785e7b1a1a7b52f177432ea18a2a6fb9db068fafd973d2a044e3af585e6303aaefdc125603c14b16f20f4121f1805d4bd721b94a5891cf1fda6cf3c70b5a2756d62b84557a511e51806b80a942'
                                alt='모동숲 해마 아이콘'><noscript><img class='wiki-image' width='100%'
                                    src='//ww.namu.la/s/d3b56ad70a89881d2899c641ca7c979b3e8dc3785e7b1a1a7b52f177432ea18a2a6fb9db068fafd973d2a044e3af585e6303aaefdc125603c14b16f20f4121f1805d4bd721b94a5891cf1fda6cf3c70b5a2756d62b84557a511e51806b80a942'
                                    alt='모동숲 해마 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,100</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%9D%B0%EB%8F%99%EA%B0%80%EB%A6%AC'
                    title='흰동가리'>흰동가리</a><br><span class='wiki-size size-down-1'>クマノミ</span><br><span
                    class='wiki-size size-down-1'>Clown
                    fish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-clownfis...'
                    href='/jump/G7%2BD754vYY4vIwEs9vIueHFDUrKT87vsRpbZIfG5mnptX7T2zyA%2F9zpVeQIWWtByrN8Z1CIpiodS1LjZPHv32g%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='6236'
                                data-src='//w.namu.la/s/6ab25ee5c836a80ccc8239cc324333010549922ff366184f57e4a84026691c941d1c7fb3487633d24bc1e1dbf3a44074762f95f64bcd4d57c4d91aca1d228ede7fee1299772fa609310123a7b674fee7f5a9b8ccb4d4decdb756718f3776a0ea'
                                alt='NH-Icon-clownfis...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/6ab25ee5c836a80ccc8239cc324333010549922ff366184f57e4a84026691c941d1c7fb3487633d24bc1e1dbf3a44074762f95f64bcd4d57c4d91aca1d228ede7fee1299772fa609310123a7b674fee7f5a9b8ccb4d4decdb756718f3776a0ea'
                                    alt='NH-Icon-clownfis...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>650</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%82%A8%EC%96%91%EC%A5%90%EB%8F%94'
                    title='남양쥐돔'>블루탱</a><br><span class='wiki-size size-down-1'>ナンヨウハギ</span><br><span
                    class='wiki-size size-down-1'>Surgeonfish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-surgeonf...'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgFkwY2BJx3BiToBo5Uo6pQPXq3TWV%2BIOKdtOsohM21DFQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='8585'
                                data-src='//w.namu.la/s/875cce95db75fece9b085692addef3b3950e38569ccba743310398fa583f312ea22b74d53c249c47a6bc4ad4f820201610b5dc0a6eb00a8adcb260a47a6439fecdb6e2d08c68cfe749550ba637959df5863d02eed7f63bfac076802186727565'
                                alt='NH-Icon-surgeonf...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/875cce95db75fece9b085692addef3b3950e38569ccba743310398fa583f312ea22b74d53c249c47a6bc4ad4f820201610b5dc0a6eb00a8adcb260a47a6439fecdb6e2d08c68cfe749550ba637959df5863d02eed7f63bfac076802186727565'
                                    alt='NH-Icon-surgeonf...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%83%80%EC%9A%B4%EC%9C%BC%EB%A1%9C%20%EB%86%80%EB%9F%AC%EA%B0%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='타운으로 놀러가요 동물의 숲'>타운으로 놀러가요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%82%98%EB%B9%84%EA%B3%A0%EA%B8%B0'
                    title='나비고기'>나비고기</a><br><span class='wiki-size size-down-1'>チョウチョウウオ</span><br><span
                    class='wiki-size size-down-1'>Butterfly fish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-butterfl...'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgGprVl1AGWjmPkdWswscDcvRZMW7druVbiJmN6GP8zfgA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='7595'
                                data-src='//w.namu.la/s/27e69e203d6bbab8d16a62f085181f7ccec0269f8ec51b919c25d8c7d4e40bc29802860b50b2b68b9b43efe4a3d0a3c55a99ac31b2602f34154fa37be6149f05945f5659b8afa310549cee1fb5dc4fa98d0543ccbaf522aa27ba4408861edf76'
                                alt='NH-Icon-butterfl...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/27e69e203d6bbab8d16a62f085181f7ccec0269f8ec51b919c25d8c7d4e40bc29802860b50b2b68b9b43efe4a3d0a3c55a99ac31b2602f34154fa37be6149f05945f5659b8afa310549cee1fb5dc4fa98d0543ccbaf522aa27ba4408861edf76'
                                    alt='NH-Icon-butterfl...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%83%80%EC%9A%B4%EC%9C%BC%EB%A1%9C%20%EB%86%80%EB%9F%AC%EA%B0%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='타운으로 놀러가요 동물의 숲'>타운으로 놀러가요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal'
                        href='/w/%ED%81%B0%EC%96%91%EB%86%80%EB%9E%98%EA%B8%B0' title='큰양놀래기'>나폴레옹피시</a></strong><br><span
                    class='wiki-size size-down-1'>ナポレオンフィッシュ</span><br><span
                    class='wiki-size size-down-1'>Napoleonfish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-napoleon...'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgEEFbQbkh6Ge76uS4%2FACWqMmcRPIng2%2FZbiavaqut6TPw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='15337'
                                data-src='//w.namu.la/s/b582652f5c70937e121a81bbbe5359414cb45f98d8ccfd6fe7bc6deb7dc813142d98fb7a2be8e33afb3daa85c9dc82f227f40547ab1cdfa3c292abdba16831ed01f073c9005e4170188315a934bd8d11a792efa43f37ca0e1912f7a6b613f47c'
                                alt='NH-Icon-napoleon...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/b582652f5c70937e121a81bbbe5359414cb45f98d8ccfd6fe7bc6deb7dc813142d98fb7a2be8e33afb3daa85c9dc82f227f40547ab1cdfa3c292abdba16831ed01f073c9005e4170188315a934bd8d11a792efa43f37ca0e1912f7a6b613f47c'
                                    alt='NH-Icon-napoleon...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>7월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1월~2월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4시~21시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%83%80%EC%9A%B4%EC%9C%BC%EB%A1%9C%20%EB%86%80%EB%9F%AC%EA%B0%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='타운으로 놀러가요 동물의 숲'>타운으로 놀러가요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%8F%A0%EB%B0%B0%EA%B0%90%ED%8E%AD'
                    title='쏠배감펭'>쏠배감펭</a><a class='wiki-fn-content'
                    title='놀동숲 때부터 모동숲 1.2.1 버전까지는 쏨뱅이로 오역. 원문인 ミノカサゴ도 쏠배감펭을 뜻하는 단어다.' href='#fn-6'><span class='target'
                        id='rfn-6'></span>&#91;6&#93;</a><br><span class='wiki-size size-down-1'>ミノカサゴ</span><br><span
                    class='wiki-size size-down-1'>Zebra
                    turkeyfish</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-zebratur...'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgFuc1qI9tdoT%2FVfn5kBuRohIAWnLQ6nV4w4Z7E%2BBa2uCg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='12878'
                                data-src='//w.namu.la/s/ccc2ad7dcf72972cdc3b8192feb4a67cc224a5af6233652ec1f14a7bb9639f82244e8e41e605099f17cc7a38505348e6c349de22fe50bba2d7ffd8cbc5e8a40afa639dcd43b26c4690fce3805a0a78b2cbcbc881ab4e9bd4d4464ddb25aee731'
                                alt='NH-Icon-zebratur...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/ccc2ad7dcf72972cdc3b8192feb4a67cc224a5af6233652ec1f14a7bb9639f82244e8e41e605099f17cc7a38505348e6c349de22fe50bba2d7ffd8cbc5e8a40afa639dcd43b26c4690fce3805a0a78b2cbcbc881ab4e9bd4d4464ddb25aee731'
                                    alt='NH-Icon-zebratur...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%B3%B5%EC%96%B4'
                        title='복어'>복어</a></strong><br><span class='wiki-size size-down-1'>フグ</span><br><span
                    class='wiki-size size-down-1'>Blowfish</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-blowfish'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgG0K%2BfH8Wn79thiTsWg2cfWmi1PmVtC1F6d2NzV335lWg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='9715'
                                data-src='//w.namu.la/s/4a453127ccd131de2a51c06b55d4e4acebd0d657d16de47f72144eaa659e3fc11874b720b73dd0ecefa2fcf83ad505da6864c7328e2691428f4b5ce703f3a0cfc96f79f27c8e497a876e22e5e37fa120fc44ef4587c8e63ee2e1dc06cc45be37'
                                alt='NH-Icon-blowfish'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/4a453127ccd131de2a51c06b55d4e4acebd0d657d16de47f72144eaa659e3fc11874b720b73dd0ecefa2fcf83ad505da6864c7328e2691428f4b5ce703f3a0cfc96f79f27c8e497a876e22e5e37fa120fc44ef4587c8e63ee2e1dc06cc45be37'
                                    alt='NH-Icon-blowfish'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~2월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>21시~4시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B0%80%EC%8B%9C%EB%B3%B5'
                    title='가시복'>가시복</a><br><span class='wiki-size size-down-1'>ハリセンボン</span><br><span
                    class='wiki-size size-down-1'>Puffer fish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-pufferfi...'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgHjA98DTRJ7bqgGScH0T8V5SWJLbyXxY0BZpHQGBNXgRQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='12907'
                                data-src='//w.namu.la/s/cb4a84004b53a3c2aa3a2a9e4aa22650580d2a0b3357a635242b7f0f85a09981e104c27b3f8a48e5d66f34bf533d44d39c2a4eee3427dc6cf6fd3a04b8139010b1e7f36d30af0616862a7bf825bc9268c0db7d58c44957f0f66de92e9e3dc07a'
                                alt='NH-Icon-pufferfi...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/cb4a84004b53a3c2aa3a2a9e4aa22650580d2a0b3357a635242b7f0f85a09981e104c27b3f8a48e5d66f34bf533d44d39c2a4eee3427dc6cf6fd3a04b8139010b1e7f36d30af0616862a7bf825bc9268c0db7d58c44957f0f66de92e9e3dc07a'
                                    alt='NH-Icon-pufferfi...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>7월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>240</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%A9%B8%EC%B9%98'
                    title='멸치'>멸치</a><br><span class='wiki-size size-down-1'>アンチョビ</span><br><span
                    class='wiki-size size-down-1'>Anchovy</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-anchovy'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgFtgQSi43yWGzUACjlJMv9p1wlhJlAJ%2FS0J8%2F4wjFsoeQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='8079'
                                data-src='//w.namu.la/s/25f4e9ff0071e40852790806298ec91c66c9dd84918ce7bae655421dbabc77a6d2e0905a6b06483bd762b4fa4ef9e9ae20b88dffa609254e3b9bd59088521b81d75c9121ee68a92038374b32161770b94f83f4566b16104071472af5d9bf2cda'
                                alt='NH-Icon-anchovy'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/25f4e9ff0071e40852790806298ec91c66c9dd84918ce7bae655421dbabc77a6d2e0905a6b06483bd762b4fa4ef9e9ae20b88dffa609254e3b9bd59088521b81d75c9121ee68a92038374b32161770b94f83f4566b16104071472af5d9bf2cda'
                                    alt='NH-Icon-anchovy'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4시~21시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>200</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%A0%84%EA%B0%B1%EC%9D%B4'
                    title='전갱이'>전갱이</a><br><span class='wiki-size size-down-1'>アジ</span><br><span
                    class='wiki-size size-down-1'>Horse mackerel</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-horsemac...'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgGu0uP0KkEYXwtDzagx4gdnZu2fhHr5DsdKFphMH2HL4A%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='8418'
                                data-src='//w.namu.la/s/5083152e74a21bf0ff0124bd1c07b007a4ad15b2def76855d1608282da8a9b041963d73d5cd78e42c5d4d841e59da7a677419572f2771abfd3587b755e7ef6cb01c4b2b2094b0718dd0ff0da21c07618063bb28b9a26fd15d5385c451f145208'
                                alt='NH-Icon-horsemac...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/5083152e74a21bf0ff0124bd1c07b007a4ad15b2def76855d1608282da8a9b041963d73d5cd78e42c5d4d841e59da7a677419572f2771abfd3587b755e7ef6cb01c4b2b2094b0718dd0ff0da21c07618063bb28b9a26fd15d5385c451f145208'
                                    alt='NH-Icon-horsemac...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>150</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%8F%8C%EB%8F%94'
                        title='돌돔'>돌돔</a></strong><br><span class='wiki-size size-down-1'>イシダイ</span><br><span
                    class='wiki-size size-down-1'>Barred
                    knifejaw</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-barredkn...'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgHGxyfCxE7nOa5L8rKfrChtPVYWfYwlZXja9P%2FfclaWyw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='13491'
                                data-src='//w.namu.la/s/ac576ced32d7d006924fbcc96ce151c3052b3d167378e1f305bbfb6c380096fd68cd8fac649490d9aa2d33f8d4e916381398d301e8eed3f96b10c17b11de2e72ebefb52d8bf85cc822f5b0ebc04acb7b02db976330095a4ab2fc9c38ecb97c7f'
                                alt='NH-Icon-barredkn...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/ac576ced32d7d006924fbcc96ce151c3052b3d167378e1f305bbfb6c380096fd68cd8fac649490d9aa2d33f8d4e916381398d301e8eed3f96b10c17b11de2e72ebefb52d8bf85cc822f5b0ebc04acb7b02db976330095a4ab2fc9c38ecb97c7f'
                                    alt='NH-Icon-barredkn...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 +</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%86%8D%EC%96%B4'
                    title='농어'>농어</a><br><span class='wiki-size size-down-1'>スズキ</span><br><span
                    class='wiki-size size-down-1'>Sea bass</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-seabass'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgEmtO5hXbCJfXIvEEQ69Qe0ylM8eFbBSfk9groDdD7Mjg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='17021'
                                data-src='//w.namu.la/s/c32abc383d7f3a6569974c282874eb6fabbfa7a73e7079e735bfdf6b40708944b5d80c82e72708abd9319e551a48c1f09f025288b39693d742d0885659b2a056551c545e4df46be8cfe4e68308f947bca1a2936050503f3f3f63c89efac03d1e'
                                alt='NH-Icon-seabass'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/c32abc383d7f3a6569974c282874eb6fabbfa7a73e7079e735bfdf6b40708944b5d80c82e72708abd9319e551a48c1f09f025288b39693d742d0885659b2a056551c545e4df46be8cfe4e68308f947bca1a2936050503f3f3f63c89efac03d1e'
                                    alt='NH-Icon-seabass'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>400</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 +</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%B0%B8%EB%8F%94'
                    title='참돔'>도미</a><br><span class='wiki-size size-down-1'>タイ</span><br><span
                    class='wiki-size size-down-1'>Red snapper</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-redsnapp...'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgGOTfssHaTrlAzhfYAJu3uN1Z954sAZ5lwN1EcE%2FTBjXA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='13483'
                                data-src='//w.namu.la/s/bb79eb60a0c28cd3576310b9b3a06cb1e8a1f5e73cdc460ac4decd8eda3834ab3b0c1538f1b7746abc925ed4bf68da700fb00975a0031b987ae2070232bbf5e918e362f7eb736cb093630402a2ede90e1f4568c591076abb31138908fa829c9a'
                                alt='NH-Icon-redsnapp...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/bb79eb60a0c28cd3576310b9b3a06cb1e8a1f5e73cdc460ac4decd8eda3834ab3b0c1538f1b7746abc925ed4bf68da700fb00975a0031b987ae2070232bbf5e918e362f7eb736cb093630402a2ede90e1f4568c591076abb31138908fa829c9a'
                                    alt='NH-Icon-redsnapp...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 +</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B0%80%EC%9E%90%EB%AF%B8'
                    title='가자미'>가자미</a><br><span class='wiki-size size-down-1'>カレイ</span><br><span
                    class='wiki-size size-down-1'>Dab</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-dab'
                    href='/jump/S%2Bg9xwbNePUBZ5aQ9lpoaGy2SlTD4Io7hPCa%2BNLMEgFpGJSr1xAWaDWW0hxFAcSf' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10254'
                                data-src='//w.namu.la/s/475e0083a5c7ba1713edd11efd6aadf8f7863763a57eb73840149fb189e88d325f9f02b46e56adc294994ac89505f3dbf508b36287175cdc8d37856c2322495d68aa575b88ea6377bb84c6ab8dfca6f55bd0de75d9a5aa308f71937c5ecf6b39'
                                alt='NH-Icon-dab'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/475e0083a5c7ba1713edd11efd6aadf8f7863763a57eb73840149fb189e88d325f9f02b46e56adc294994ac89505f3dbf508b36287175cdc8d37856c2322495d68aa575b88ea6377bb84c6ab8dfca6f55bd0de75d9a5aa308f71937c5ecf6b39'
                                    alt='NH-Icon-dab'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>300</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%84%99%EC%B9%98'
                    title='넙치'>넙치</a><br><span class='wiki-size size-down-1'>ヒラメ</span><br><span
                    class='wiki-size size-down-1'>Olive flounder</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-oliveflo...'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZaKpHfi%2FshoidYCjdX2e3m0OtokSEuyTxIpYe1zfK3PLw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='12595'
                                data-src='//w.namu.la/s/84514d7310541df0428f664c1b7b3080b996f0c0fc730ca5eee1e8fdec7e02db8999eb74637c32d3bc166f60cffb04fc09eff7180e08968a07e23c47108d6d8c08e8819b19f4a7f097ac1a96802d6967b456cb0f232edbfc755c193c93157da6'
                                alt='NH-Icon-oliveflo...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/84514d7310541df0428f664c1b7b3080b996f0c0fc730ca5eee1e8fdec7e02db8999eb74637c32d3bc166f60cffb04fc09eff7180e08968a07e23c47108d6d8c08e8819b19f4a7f097ac1a96802d6967b456cb0f232edbfc755c193c93157da6'
                                    alt='NH-Icon-oliveflo...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>800</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%98%A4%EC%A7%95%EC%96%B4'
                    title='오징어'>오징어</a><br><span class='wiki-size size-down-1'>イカ</span><br><span
                    class='wiki-size size-down-1'>Squid</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-squid'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZYbx1IFG0Gl1FA8UXntnA1s' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='9322'
                                data-src='//w.namu.la/s/f57b71a9a31e708714f2ca58c297aaf265e86f2723ffac8573b241227437c47396f690258e00331e38068159151a051433b4811119717650fd1bccbbbfc499fdedf88d94fe69d482131df601650c2b0d1273df3f08b56a3cfacfc17b232748be'
                                alt='NH-Icon-squid'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/f57b71a9a31e708714f2ca58c297aaf265e86f2723ffac8573b241227437c47396f690258e00331e38068159151a051433b4811119717650fd1bccbbbfc499fdedf88d94fe69d482131df601650c2b0d1273df3f08b56a3cfacfc17b232748be'
                                    alt='NH-Icon-squid'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~2월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B3%B0%EC%B9%98'
                    title='곰치'>곰치</a><br><span class='wiki-size size-down-1'>ウツボ</span><br><span
                    class='wiki-size size-down-1'>Moray eel</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-morayeel'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZZI83HxZ3Aiv%2FkC83B81RXazwYAF9CTkWgcp3xpn4nJTQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10322'
                                data-src='//w.namu.la/s/4aada3f31f43be2e597a8641238cad5d413d2570ebf6b9e077d5f918b372de36e696892f46793e3bd22a7bd4d6b6cdcffb0ba86aebe89a45c1366b17c4ee7cc0ff8e1c1b132cb9e9a06080df06fdb0811fc7507937a19481d92849c8163a0042'
                                alt='NH-Icon-morayeel'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/4aada3f31f43be2e597a8641238cad5d413d2570ebf6b9e077d5f918b372de36e696892f46793e3bd22a7bd4d6b6cdcffb0ba86aebe89a45c1366b17c4ee7cc0ff8e1c1b132cb9e9a06080df06fdb0811fc7507937a19481d92849c8163a0042'
                                    alt='NH-Icon-morayeel'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>8월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>길다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%83%80%EC%9A%B4%EC%9C%BC%EB%A1%9C%20%EB%86%80%EB%9F%AC%EA%B0%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='타운으로 놀러가요 동물의 숲'>타운으로 놀러가요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%A6%AC%EB%B3%B8%EC%9E%A5%EC%96%B4'
                    title='리본장어'>리본장어</a><br><span class='wiki-size size-down-1'>ハナヒゲウツボ</span><br><span
                    class='wiki-size size-down-1'>Ribbon eel</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-ribbonee...'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZY6RnQtZpBXwCU0B6tMix6onj%2FCG59drNGeokemoyq8nw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='14262'
                                data-src='//w.namu.la/s/56a69cb2724ab4643908aa6a0ee5ed61f4cdeafcbfbdb43ad04d6c75446556c04f660d938e5b5880eb034c89d0091704c88e2e204690e5f486b26d948d59919824966ccfb154dcff64718f8eab24387a254fc7c17cba4e1b73fcbd3295e56ba3'
                                alt='NH-Icon-ribbonee...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/56a69cb2724ab4643908aa6a0ee5ed61f4cdeafcbfbdb43ad04d6c75446556c04f660d938e5b5880eb034c89d0091704c88e2e204690e5f486b26d948d59919824966ccfb154dcff64718f8eab24387a254fc7c17cba4e1b73fcbd3295e56ba3'
                                    alt='NH-Icon-ribbonee...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>길다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>600</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%8B%A4%EB%9E%91%EC%96%B4'
                        title='다랑어'>다랑어</a></strong><br><span class='wiki-size size-down-1'>マグロ</span><br><span
                    class='wiki-size size-down-1'>Tuna</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-tuna'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZaEHcvSCnUEDTZreOfq3%2BlS' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11567'
                                data-src='//w.namu.la/s/374018817fe741c28ce2d2b422716cfe937cae661c813008a9fa9bb28f5a4433d3d9e16b8e65224de593b34972d3ee031d3c5f01e51d04f61e1aba2d6748b7e0d28ff93909a435410d9920cc118234729517241404a7e5f0a1d781820d3e5f0a'
                                alt='NH-Icon-tuna'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/374018817fe741c28ce2d2b422716cfe937cae661c813008a9fa9bb28f5a4433d3d9e16b8e65224de593b34972d3ee031d3c5f01e51d04f61e1aba2d6748b7e0d28ff93909a435410d9920cc118234729517241404a7e5f0a1d781820d3e5f0a'
                                    alt='NH-Icon-tuna'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>부둣가</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대</div>
        </td>
        <td>
            <div class='wiki-paragraph'>7,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EC%B2%AD%EC%83%88%EC%B9%98'
                        title='청새치'>청새치</a></strong><br><span class='wiki-size size-down-1'>カジキ</span><br><span
                    class='wiki-size size-down-1'>Blue
                    marlin</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-bluemarl...'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZYdE5xmDI5G10PYh5QlOHNA0UxQuelgvXnz%2FgdlLCTRjg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11417'
                                data-src='//w.namu.la/s/5fd289dd6547326c802b32ebcfda4632e46717742e7720ecdfdd459704c122be1e943ea64e32d46b903574b7f829e0fc9309c046f80b647923a16fd34c13a4513e5c1320d156be2bf2a04badbe4790ba8de6a96a84ef3e24759257dbb5eca4ca'
                                alt='NH-Icon-bluemarl...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/5fd289dd6547326c802b32ebcfda4632e46717742e7720ecdfdd459704c122be1e943ea64e32d46b903574b7f829e0fc9309c046f80b647923a16fd34c13a4513e5c1320d156be2bf2a04badbe4790ba8de6a96a84ef3e24759257dbb5eca4ca'
                                    alt='NH-Icon-bluemarl...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>7월~9월<br>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1월~3월,5월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>부둣가</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong>무명갈전갱이</strong><a class='wiki-fn-content'
                    title='흔히 자이언트 트레벌리(Giant trevally)로 알려진 물고기로, 무명갈전갱이란 이름은 정식국명이다.' href='#fn-7'><span class='target'
                        id='rfn-7'></span>&#91;7&#93;</a><br><span class='wiki-size size-down-1'>ロウニンアジ</span><br><span
                    class='wiki-size size-down-1'>Giant
                    trevally</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-gianttre...'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZaFLPjQ2X7nknkOkhFRClyzNFaVsYB%2FpGmJidF748AY5g%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='13543'
                                data-src='//w.namu.la/s/d4d488f046f6fbfdcac8f98627f479fd86f5df3e60c75e63bae35d874e07b5790ccfa1ee00c386cfc519bd006a7b2dba41efa251a02e561895c4bb0b28c901605cc40ed79de91fa657a8a149a2c9f66d42f29e3ae060fc736bd4812f82126ef6'
                                alt='NH-Icon-gianttre...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/d4d488f046f6fbfdcac8f98627f479fd86f5df3e60c75e63bae35d874e07b5790ccfa1ee00c386cfc519bd006a7b2dba41efa251a02e561895c4bb0b28c901605cc40ed79de91fa657a8a149a2c9f66d42f29e3ae060fc736bd4812f82126ef6'
                                    alt='NH-Icon-gianttre...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>부둣가</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%A7%8C%EC%83%88%EA%B8%B0'
                        title='만새기'>만새기</a></strong><br><span class='wiki-size size-down-1'>シイラ</span><br><span
                    class='wiki-size size-down-1'>Mahi-mahi</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-mahimahi'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZbpcM9x0alDEHgdxWN0zifwvTNB7c%2BVnzu0gFFvrdDtIA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='15200'
                                data-src='//w.namu.la/s/b3c90741e89183920bd717450a1ff1774831e5e7747ba7c8eb3b3f3873c56d312f5e0e2bfcf3eed4d19bd7e1fbaf2fd2396f67e2846d1725b74dfa839ef9c0d219b7dff164140d088ce0aeca116749a19f2851d26d0b9ba7b8a52bcfbc260901'
                                alt='NH-Icon-mahimahi'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/b3c90741e89183920bd717450a1ff1774831e5e7747ba7c8eb3b3f3873c56d312f5e0e2bfcf3eed4d19bd7e1fbaf2fd2396f67e2846d1725b74dfa839ef9c0d219b7dff164140d088ce0aeca116749a19f2851d26d0b9ba7b8a52bcfbc260901'
                                    alt='NH-Icon-mahimahi'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>부둣가</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>6,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EA%B0%9C%EB%B3%B5%EC%B9%98'
                        title='개복치'>개복치</a></strong><br><span class='wiki-size size-down-1'>マンボウ</span><br><span
                    class='wiki-size size-down-1'>Ocean
                    sunfish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-oceansun...'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZa9JkOqOU2ZUc8UBHos8DUCaRDeqNk%2BJB19cj4aR5yuWA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='15012'
                                data-src='//w.namu.la/s/7064354ecddc8b807047364fcc24353b9638e684beb1f3eef25f6bc440ef0cee89a8ba12de2d705ce9604b069aa5f6001632cb1195049703a9aff483f56c64befac62f05849e98bc0b5d1daa83c2fc558ac20698e11670fd8c4600c50cf53329'
                                alt='NH-Icon-oceansun...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/7064354ecddc8b807047364fcc24353b9638e684beb1f3eef25f6bc440ef0cee89a8ba12de2d705ce9604b069aa5f6001632cb1195049703a9aff483f56c64befac62f05849e98bc0b5d1daa83c2fc558ac20698e11670fd8c4600c50cf53329'
                                    alt='NH-Icon-oceansun...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>7월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4시~21시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대(등지느러미)<a class='wiki-fn-content'
                    title='상어류를 비롯한 지느러미 물고기들의 그림자 크기는 모두 같지만, 진동의 세기가 다르다.' href='#fn-지느러미'><span class='target'
                        id='rfn-8'></span>&#91;지느러미&#93;</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'>4,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B0%80%EC%98%A4%EB%A6%AC'
                    title='가오리'>가오리</a><br><span class='wiki-size size-down-1'>エイ</span><br><span
                    class='wiki-size size-down-1'>Ray</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-ray'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZbLPnsI2xsTJbaKNDBSCxlu' rel='nofollow'><span
                        class='wiki-image-align-normal' style='width:64px;'><span class='wiki-image-wrapper'
                            style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='12070'
                                data-src='//w.namu.la/s/b51d075e4f27d0aac7905e908903a249856aad2803db03b8baad17f626e353a85ccabefccc9a688cd8b8a1244ca291ef766f739a11b9ecc4deedb77493d38431672a0584dbffc0bd57b2c2baa7b40605ee2c2c93c9401f7fed8e49190c4bd940'
                                alt='NH-Icon-ray'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/b51d075e4f27d0aac7905e908903a249856aad2803db03b8baad17f626e353a85ccabefccc9a688cd8b8a1244ca291ef766f739a11b9ecc4deedb77493d38431672a0584dbffc0bd57b2c2baa7b40605ee2c2c93c9401f7fed8e49190c4bd940'
                                    alt='NH-Icon-ray'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>8월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4시~21시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%83%80%EC%9A%B4%EC%9C%BC%EB%A1%9C%20%EB%86%80%EB%9F%AC%EA%B0%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='타운으로 놀러가요 동물의 숲'>타운으로 놀러가요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%ED%86%B1%EC%83%81%EC%96%B4'
                        title='톱상어'>톱상어</a></strong><a class='wiki-fn-content' title='흔히 톱상어로 잘못 알려진 톱가오리가 아닌 항목의 톱상어다.'
                    href='#fn-9'><span class='target' id='rfn-9'></span>&#91;9&#93;</a><br><span
                    class='wiki-size size-down-1'>ノコギリザメ</span><br><span class='wiki-size size-down-1'>Saw
                    shark</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-sawshark'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZbxDbx3X6NOiwy1S9XOuLoqG2H7HLhdAUpFElmaD869sA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='13351'
                                data-src='//w.namu.la/s/e4bfe676702f10de381508f06d9abdd2fd3c72475109cefab77d52f133156490cc689e4231740557499bb5fbef17f5806befbd3ec7442691d0191b21d9f365f7e9e2727dd335506847be07258eadbafd98d15bbdd118836a3fbc5b5ce6d5efe3'
                                alt='NH-Icon-sawshark'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/e4bfe676702f10de381508f06d9abdd2fd3c72475109cefab77d52f133156490cc689e4231740557499bb5fbef17f5806befbd3ec7442691d0191b21d9f365f7e9e2727dd335506847be07258eadbafd98d15bbdd118836a3fbc5b5ce6d5efe3'
                                    alt='NH-Icon-sawshark'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대(등지느러미)<a class='wiki-fn-content'
                    title='상어류를 비롯한 지느러미 물고기들의 그림자 크기는 모두 같지만, 진동의 세기가 다르다.' href='#fn-지느러미'><span class='target'
                        id='rfn-10'></span>&#91;지느러미&#93;</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'>12,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EA%B7%80%EC%83%81%EC%96%B4'
                        title='귀상어'>귀상어</a></strong><br><span class='wiki-size size-down-1'>シュモクザメ</span><br><span
                    class='wiki-size size-down-1'>Hammerhead
                    shark</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-hammerhe...'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZZT2EKzjmTVmFqPvhGucLnUEXGeL6hnxslFp4OUeDFTtQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='10010'
                                data-src='//w.namu.la/s/a08e8f42dfda396586fbb445aa2330c9b459c3590976f537f43f48a8727a3e45d8a93322103708dee73c6ec63d3916d8556f79023cc8be7c7b465c3e8d3a3ca5082138099f8a9766481f8f3f12a4beb0dee265c3b97df95cd9499a461d6f8898'
                                alt='NH-Icon-hammerhe...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/a08e8f42dfda396586fbb445aa2330c9b459c3590976f537f43f48a8727a3e45d8a93322103708dee73c6ec63d3916d8556f79023cc8be7c7b465c3e8d3a3ca5082138099f8a9766481f8f3f12a4beb0dee265c3b97df95cd9499a461d6f8898'
                                    alt='NH-Icon-hammerhe...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대(등지느러미)<a class='wiki-fn-content'
                    title='상어류를 비롯한 지느러미 물고기들의 그림자 크기는 모두 같지만, 진동의 세기가 다르다.' href='#fn-지느러미'><span class='target'
                        id='rfn-11'></span>&#91;지느러미&#93;</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'>8,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%B0%B1%EC%83%81%EC%95%84%EB%A6%AC'
                        title='백상아리'>상어</a></strong><a class='wiki-fn-content'
                    title='일문판에서는 단순히 상어(サメ)로 표기하고 영문판도 튀어나와요 동물의 숲까진 Shark로 표기했으나, 모여봐요 동물의 숲부터는 번역이 변경되어 백상아리가 되었다.'
                    href='#fn-12'><span class='target' id='rfn-12'></span>&#91;12&#93;</a><br><span
                    class='wiki-size size-down-1'>サメ</span><br><span class='wiki-size size-down-1'>Great
                    white
                    shark</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-greatwhi...'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZb0ibh3BcVZoB49qi7JFRnk9NRi7wwSvEXBj7FhFGp9lQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11033'
                                data-src='//w.namu.la/s/6f892c6bd01017cb17dea8e820b51ba9a472bf454437991b41516798d805246b6ce4faef21665376996cef5c1fffa02467b5188bcf45ad9d2bc702f3a9c32bf2d406d2733df97034e297af19b461d3774a56148632d86858219ae498e4a7fd53'
                                alt='NH-Icon-greatwhi...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/6f892c6bd01017cb17dea8e820b51ba9a472bf454437991b41516798d805246b6ce4faef21665376996cef5c1fffa02467b5188bcf45ad9d2bc702f3a9c32bf2d406d2733df97034e297af19b461d3774a56148632d86858219ae498e4a7fd53'
                                    alt='NH-Icon-greatwhi...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대(등지느러미)<a class='wiki-fn-content'
                    title='상어류를 비롯한 지느러미 물고기들의 그림자 크기는 모두 같지만, 진동의 세기가 다르다.' href='#fn-지느러미'><span class='target'
                        id='rfn-13'></span>&#91;지느러미&#93;</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'>15,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EA%B3%A0%EB%9E%98%EC%83%81%EC%96%B4'
                        title='고래상어'>고래상어</a></strong><br><span class='wiki-size size-down-1'>ジンベエザメ</span><br><span
                    class='wiki-size size-down-1'>Whale
                    shark</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-whalesha...'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZbJxY0aLILEC1CamfXLQWC76aAfiJOdbDSE35i49L%2BUDw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11274'
                                data-src='//w.namu.la/s/430c0dd2f9843bc23ebb523241596d6a5249fa876b8e5155d99766e2fe0ab95d59b9b1f687a4b391979acdd23932d8ef2c8207a1449f9dc298283b783b28133036bde5c1d6cedd66f799f0050a16fda2de3bfd27e65a7b138db918d867e5132d'
                                alt='NH-Icon-whalesha...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/430c0dd2f9843bc23ebb523241596d6a5249fa876b8e5155d99766e2fe0ab95d59b9b1f687a4b391979acdd23932d8ef2c8207a1449f9dc298283b783b28133036bde5c1d6cedd66f799f0050a16fda2de3bfd27e65a7b138db918d867e5132d'
                                    alt='NH-Icon-whalesha...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대(등지느러미)<a class='wiki-fn-content'
                    title='상어류를 비롯한 지느러미 물고기들의 그림자 크기는 모두 같지만, 진동의 세기가 다르다.' href='#fn-지느러미'><span class='target'
                        id='rfn-14'></span>&#91;지느러미&#93;</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'>13,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%B9%A8%ED%8C%90%EC%83%81%EC%96%B4'
                    title='빨판상어'>빨판상어</a><br><span class='wiki-size size-down-1'>コバンザメ</span><br><span
                    class='wiki-size size-down-1'>Suckerfish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-suckerfi...'
                    href='/jump/2WobQJZ%2FFx7IBjV%2F2vY4TCEHitZjIinSS4AkYhx7EZbSoo0ZZa9KvjDFcZ9DEUphlIr2VZ14HHHMxtH6%2BZ0I6w%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='7385'
                                data-src='//w.namu.la/s/565fcb3242d8e046316306a13610bcd942f9bf31d9be077755b9c9cb7b37905121f1ccbf9a1cd4a83385a24a511956e81c6f67569d3091e0ad782d9998482eac5a193e12909a9a2f0b51888b1141832ac0fe169518c7f1e42abb318d79dfd4b1'
                                alt='NH-Icon-suckerfi...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/565fcb3242d8e046316306a13610bcd942f9bf31d9be077755b9c9cb7b37905121f1ccbf9a1cd4a83385a24a511956e81c6f67569d3091e0ad782d9998482eac5a193e12909a9a2f0b51888b1141832ac0fe169518c7f1e42abb318d79dfd4b1'
                                    alt='NH-Icon-suckerfi...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다(등지느러미)<a class='wiki-fn-content'
                    title='상어류를 비롯한 지느러미 물고기들의 그림자 크기는 모두 같지만, 진동의 세기가 다르다.' href='#fn-지느러미'><span class='target'
                        id='rfn-15'></span>&#91;지느러미&#93;</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%B4%88%EB%A1%B1%EC%95%84%EA%B7%80'
                    title='초롱아귀'>초롱아귀</a><br><span class='wiki-size size-down-1'>チョウチンアンコウ</span><br><span
                    class='wiki-size size-down-1'>Football fish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-football...'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6G8OoJ0aA6I0YNb0NRqRI6qYW%2BUJzLbUePkDpLtjEAK3pSw7bXzPeuQii%2BS2IWIKA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11250'
                                data-src='//w.namu.la/s/7110e4fbb931174a1e45a0a0d5d6ebc83309b2c353869c4f5d62730e2cdec8f4577ef3a1ec16c09d1297e6147ef757cbf5ae4dece713a10acabb188200c4ab7295831f9d731671d0bd81dec21fe12800a9f441b4543ec36e0eaba9a856f6b0d3'
                                alt='NH-Icon-football...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/7110e4fbb931174a1e45a0a0d5d6ebc83309b2c353869c4f5d62730e2cdec8f4577ef3a1ec16c09d1297e6147ef757cbf5ae4dece713a10acabb188200c4ab7295831f9d731671d0bd81dec21fe12800a9f441b4543ec36e0eaba9a856f6b0d3'
                                    alt='NH-Icon-football...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%86%80%EB%9F%AC%EC%98%A4%EC%84%B8%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='놀러오세요 동물의 숲'>놀러오세요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EC%82%B0%EA%B0%88%EC%B9%98'
                        title='산갈치'>산갈치</a></strong><br><span class='wiki-size size-down-1'>リュウグウノツカイ</span><br><span
                    class='wiki-size size-down-1'>Oarfish</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-oarfish'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6G8OoJ0aA6I0YNb0NRqRI5sBeVHQqodiJuSflt%2FCgXOKpYs%2FfOKaq2PNi%2FgUOh9Dg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='15790'
                                data-src='//w.namu.la/s/52ac6c689197f8f36c1fa21a7df8c4a43eefde7825cbc4c22cdc24f668f56fb73b5d06503a3e901036de9c514b06a454c31b9618baadecd4329eda3076356daaf61218326aad21c2a15f3e87f8eebae4492b25d5293a1f24c97ebc01b2600b87'
                                alt='NH-Icon-oarfish'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/52ac6c689197f8f36c1fa21a7df8c4a43eefde7825cbc4c22cdc24f668f56fb73b5d06503a3e901036de9c514b06a454c31b9618baadecd4329eda3076356daaf61218326aad21c2a15f3e87f8eebae4492b25d5293a1f24c97ebc01b2600b87'
                                    alt='NH-Icon-oarfish'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%ED%86%B5%EC%95%88%EC%96%B4'
                        title='통안어'>데메니기스</a></strong><br><span class='wiki-size size-down-1'>デメニギス</span><br><span
                    class='wiki-size size-down-1'>Barreleye</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-barreley...'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6G8OoJ0aA6I0YNb0NRqRI79lQI3EQWz%2F%2FTC5oQTuvebPDYoDU0vzk1MQkPPaWyk9w%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='11706'
                                data-src='//w.namu.la/s/e5652399f9675d1efc509f5d54be95ce9340122c8a84e078a6bb82f96d3c2d9e2d2d08942ce3cc1dbfad326cf7c63f2ccc1035532222c9dc1bd3d9484ff315495eab1b987061dcc9d80e06c28e4d12fbc1d0a9dfbe542c11f6be2839a9f78f8a'
                                alt='NH-Icon-barreley...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/e5652399f9675d1efc509f5d54be95ce9340122c8a84e078a6bb82f96d3c2d9e2d2d08942ce3cc1dbfad326cf7c63f2ccc1035532222c9dc1bd3d9484ff315495eab1b987061dcc9d80e06c28e4d12fbc1d0a9dfbe542c11f6be2839a9f78f8a'
                                    alt='NH-Icon-barreley...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>21시~4시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>15,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EC%8B%A4%EB%9F%AC%EC%BA%94%EC%8A%A4'
                        title='실러캔스'>실러캔스</a></strong><br><span class='wiki-size size-down-1'>シーラカンス</span><br><span
                    class='wiki-size size-down-1'>Coelacanth</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='NH-Icon-coelacan...'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6G8OoJ0aA6I0YNb0NRqRI4p0yqYUX5Z%2BmlnKLiI2pR3hmYUzt9sFg2aF3y3xzOYtA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='15664'
                                data-src='//w.namu.la/s/35488465762584ac0f414fe84834b1f235766eeee00a303eebcb2896c9784480a9212da48d665d5b7b2c642cf0e0f31f9c09abc6417dab830f426d2583d9d2ab483bf5cf40d1bf49caae23352d0289f9d0b4af88d2795d27ec58a90661d15c77'
                                alt='NH-Icon-coelacan...'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/35488465762584ac0f414fe84834b1f235766eeee00a303eebcb2896c9784480a9212da48d665d5b7b2c642cf0e0f31f9c09abc6417dab830f426d2583d9d2ab483bf5cf40d1bf49caae23352d0289f9d0b4af88d2795d27ec58a90661d15c77'
                                    alt='NH-Icon-coelacan...'></noscript></span></span></a>
            </div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>1년 내내<br> (비 오는 날) <a class='wiki-fn-content'
                    title='이전작에서는 눈오는 날에도 출현했으나 모동숲에서는 비오는 날에만 나온다. 때문에 1년 내내라는 말과 달리 비가 내리지 않는 겨울에는 볼 수 없다. 북반구는 11월 26일부터 2월 24일까지, 남반구는 5월 26일부터 8월 24일까지.'
                    href='#fn-16'><span class='target' id='rfn-16'></span>&#91;16&#93;</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내<br> (비오는 날)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대</div>
        </td>
        <td>
            <div class='wiki-paragraph'>15,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%AF%B8%EC%97%AD'
                    title='미역'>미역</a><br><span class='wiki-size size-down-1'>ワカメ</span><br><span
                    class='wiki-size size-down-1'>Seaweed</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 미역 아이콘'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6aANcll%2F52NH8NcxRHtYueALh29VfF3oV1DcjFPe%2B8paGPVTjlZwVldVyzkvufXFg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='8865'
                                data-src='//w.namu.la/s/8ea5e751139d48772b8855a986d82524997e6daa3774fb34d45e22d8112a673f239f58d03288c1bef4a3c9693ea3a1535a4b69fdba362201496e8237175428fa4e2cb53806ede07d57131e56105fe4a005cffba794bdd22d049ddd004b1845d8'
                                alt='모동숲 미역 아이콘'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/8ea5e751139d48772b8855a986d82524997e6daa3774fb34d45e22d8112a673f239f58d03288c1bef4a3c9693ea3a1535a4b69fdba362201496e8237175428fa4e2cb53806ede07d57131e56105fe4a005cffba794bdd22d049ddd004b1845d8'
                                    alt='모동숲 미역 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~7월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~1월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>600</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%B0%94%EB%8B%A4%ED%8F%AC%EB%8F%84'
                    title='바다포도'>바다포도</a><br><span class='wiki-size size-down-1'>ウミブドウ</span><br><span
                    class='wiki-size size-down-1'>Sea
                    grapes</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 바다포도 아이콘'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6aANcll%2F52NH8NcxRHtYucQi4AWxWqK9gUPNc7Yj3ehMnr8ud39edp1cibzX%2FOPMaQrFjClz5ifX3Ufz6vOmvw%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='5996'
                                data-src='//w.namu.la/s/24845a8ea405f5e8389d78f291593bfc89992ac639096522375a8c3b1cef257238f847b097fe1b8d9e65f50c8d3b6cfd99f42e5f91606fbd575b47120b3a1774172cd49d688bc2af06a836857a9e21aaecf1775371f3b31adcff42638121af37'
                                alt='모동숲 바다포도 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/24845a8ea405f5e8389d78f291593bfc89992ac639096522375a8c3b1cef257238f847b097fe1b8d9e65f50c8d3b6cfd99f42e5f91606fbd575b47120b3a1774172cd49d688bc2af06a836857a9e21aaecf1775371f3b31adcff42638121af37'
                                    alt='모동숲 바다포도 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>900</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%95%B4%EC%82%BC'
                    title='해삼'>해삼</a><br><span class='wiki-size size-down-1'>ナマコ</span><br><span
                    class='wiki-size size-down-1'>Sea cucumber</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 해삼 아이콘'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6aANcll%2F52NH8NcxRHtYuffcbrEXKNeFz5TJxOs6tdrivbtBnF99AoIPf7uSP1r7w%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4378'
                                data-src='//w.namu.la/s/0c8c4e655727978fcbe2e719e5edd224e2c3c46474f29d6df38465f42ef95c0c6e8aa8e22906250f01380d890cec20bc7b3d7fa6f81af150003523c2abf6af18b091f2f68d485d6f3685c9881a9340cd1407376ead37250d8e63c7a4148e7f5c'
                                alt='모동숲 해삼 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/0c8c4e655727978fcbe2e719e5edd224e2c3c46474f29d6df38465f42ef95c0c6e8aa8e22906250f01380d890cec20bc7b3d7fa6f81af150003523c2abf6af18b091f2f68d485d6f3685c9881a9340cd1407376ead37250d8e63c7a4148e7f5c'
                                    alt='모동숲 해삼 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%B0%94%EB%8B%A4%EB%8F%BC%EC%A7%80'
                        title='바다돼지'>바다돼지</a></strong><br><span class='wiki-size size-down-1'>センジュナマコ</span><br><span
                    class='wiki-size size-down-1'>Sea
                    Pig</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 바다돼지 아이콘'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6aANcll%2F52NH8NcxRHtYucNOXgIVNu5cT7vH89tEB%2FzluAoomsMDFGumQSSzeYPVpGWxoSX5W3%2FDHmTAYcGAgg%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4921'
                                data-src='//ww.namu.la/s/b7b980520799cbc182f73b396f398e07ee3fc7a7d5c70e3f22b69362a5dc85a7a427060545b2f9b613e4b139ad17cc24321a8120494a4b65698f22b672b965985c7701b291d5856751b586d52a796e7af0331d1950ea963ff998346f0584b82e'
                                alt='모동숲 바다돼지 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/b7b980520799cbc182f73b396f398e07ee3fc7a7d5c70e3f22b69362a5dc85a7a427060545b2f9b613e4b139ad17cc24321a8120494a4b65698f22b672b965985c7701b291d5856751b586d52a796e7af0331d1950ea963ff998346f0584b82e'
                                    alt='모동숲 바다돼지 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~2월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%B6%88%EA%B0%80%EC%82%AC%EB%A6%AC'
                    title='불가사리'>불가사리</a><br><span class='wiki-size size-down-1'>ヒトデ</span><br><span
                    class='wiki-size size-down-1'>Sea
                    star</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 불가사리 아이콘'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6aANcll%2F52NH8NcxRHtYudtall39pRzpQRGrrR2v3%2Bu9dcoinRcEOUX%2BY9%2FVd0IlNrRCASuXVwaELlXWY5ThkM%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4218'
                                data-src='//ww.namu.la/s/34be7c574efe23029483ddf420a204967e1c1470aa27b0d1a9639e580c625839e166e919f1a5ea44e73f882bdb48415072d4fff63a914934ab321e3ce5982cc929f871a11748846955605603ac92430fef2583fbb6a5c6e1fcf5356ef8bf5f39'
                                alt='모동숲 불가사리 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/34be7c574efe23029483ddf420a204967e1c1470aa27b0d1a9639e580c625839e166e919f1a5ea44e73f882bdb48415072d4fff63a914934ab321e3ce5982cc929f871a11748846955605603ac92430fef2583fbb6a5c6e1fcf5356ef8bf5f39'
                                    alt='모동숲 불가사리 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%84%B1%EA%B2%8C'
                    title='성게'>성게</a><br><span class='wiki-size size-down-1'>ウニ</span><br><span
                    class='wiki-size size-down-1'>Sea urchin</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 성게 아이콘'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6aANcll%2F52NH8NcxRHtYuci%2BpAFhLm8eH65SzXiRAOD4tLzU%2FA7%2F2eJBFlaMOsjSQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4915'
                                data-src='//w.namu.la/s/fb99d6f32deffd7bf963359ac3e6305ff6b593f9bd0fd6ff37bac4a14ae86e51a57c81f3fba8b276503f3a622f7ea63c4ca7dd3b62cead9d7cc3247755399193be8e7f5def8b729063b7b2d3e98d2055065c99a60a91f8e2a75ce9e6322a540c'
                                alt='모동숲 성게 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/fb99d6f32deffd7bf963359ac3e6305ff6b593f9bd0fd6ff37bac4a14ae86e51a57c81f3fba8b276503f3a622f7ea63c4ca7dd3b62cead9d7cc3247755399193be8e7f5def8b729063b7b2d3e98d2055065c99a60a91f8e2a75ce9e6322a540c'
                                    alt='모동숲 성게 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,700</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>연필성게<br><span class='wiki-size size-down-1'>パイプウニ</span><br><span
                    class='wiki-size size-down-1'>Slate Pencil
                    Urchin</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 연필성게 아이콘'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6aANcll%2F52NH8NcxRHtYuf081NlrNaKK%2FbNIiHLpWh8sRNOIfZUueiswGQpQltuIvAfOl1nkZmijgJk8RMZogQ%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='6293'
                                data-src='//w.namu.la/s/6fd35e69fe6895a6f9576165459ed5cd0b7a5be2ae6d87bbdf90dbd10ad81a590344f0f6dca7983a7f77e199f52eeb6bed536e133384e337d61a322fbcf79e7c038141b9908e2d4514170db318a6caee91d5168e50741e7703728f6c44b4507d'
                                alt='모동숲 연필성게 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/6fd35e69fe6895a6f9576165459ed5cd0b7a5be2ae6d87bbdf90dbd10ad81a590344f0f6dca7983a7f77e199f52eeb6bed536e133384e337d61a322fbcf79e7c038141b9908e2d4514170db318a6caee91d5168e50741e7703728f6c44b4507d'
                                    alt='모동숲 연필성게 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%A7%90%EB%AF%B8%EC%9E%98'
                    title='말미잘'>말미잘</a><br><span class='wiki-size size-down-1'>イソギンチャク</span><br><span
                    class='wiki-size size-down-1'>Sea anemone</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 말미잘 아이콘'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6aANcll%2F52NH8NcxRHtYucfLLYBJkoyO%2B%2FcmoEbAoMjAcxDCFF6TiX2oYuwM%2FbOqA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='5948'
                                data-src='//w.namu.la/s/032f19abd32dc8deb4168edee9276f812ae01ac9f9d3bfe2dbb30cfe112fe2de3e5f57a7c0f80620236992bf321df5d145666ae3b76c3c9fe7d114ff1e9ddeede3720da2201884a6d60cabc67f6f2b9fe897bef4fc7164ca89d22c3ba4d5ac14'
                                alt='모동숲 말미잘 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/032f19abd32dc8deb4168edee9276f812ae01ac9f9d3bfe2dbb30cfe112fe2de3e5f57a7c0f80620236992bf321df5d145666ae3b76c3c9fe7d114ff1e9ddeede3720da2201884a6d60cabc67f6f2b9fe897bef4fc7164ca89d22c3ba4d5ac14'
                                    alt='모동숲 말미잘 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%B3%B4%EB%A6%84%EB%8B%AC%EB%AC%BC%ED%95%B4%ED%8C%8C%EB%A6%AC'
                    title='보름달물해파리'>보름달물해파리</a><br><span class='wiki-size size-down-1'>ミズクラゲ</span><br><span
                    class='wiki-size size-down-1'>Moon jellyfish</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 보름달물해파리 아이콘'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6aANcll%2F52NH8NcxRHtYucFYw8uIMS2D%2F5tqFV8h%2Fgs%2FmgroGB%2BeHzLLjwC1yf9KegQHlEFZOKxR4RaGrLG%2Bb0%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='3836'
                                data-src='//w.namu.la/s/655b6d5eeed304a970f2bec6f2de53e1ccfc3f31cb7a377f5074e52c2f5c6f55ee84dd31244d537a2fa91126a291f5da3b71b4b24372b88cc9e410f10bd9062e9d839115e7d7a20f2985adb1b48b9367c465d7a22a97b5170eab57ebe8eef35c'
                                alt='모동숲 보름달물해파리 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/655b6d5eeed304a970f2bec6f2de53e1ccfc3f31cb7a377f5074e52c2f5c6f55ee84dd31244d537a2fa91126a291f5da3b71b4b24372b88cc9e410f10bd9062e9d839115e7d7a20f2985adb1b48b9367c465d7a22a97b5170eab57ebe8eef35c'
                                    alt='모동숲 보름달물해파리 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>7월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>600</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B5%B0%EC%86%8C'
                    title='군소'>갯민숭달팽이</a><br><span class='wiki-size size-down-1'>ウミウシ</span><br><span
                    class='wiki-size size-down-1'>Sea slug</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 갯민숭달팽이 아이콘'
                    href='/jump/L9obyFQttx44JT7wZVQ%2BI6aANcll%2F52NH8NcxRHtYudERwdtJCkVh36ZJBHM2n6ftiSXs%2BHz9GUrGm1U24FQ70WrXHm117kwdKqrjsVsavA%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4903'
                                data-src='//ww.namu.la/s/2e7492ff55e051a7a31e5d7de50c5fc6c990e6fe7184ba197547cd5d2f39ffe31e191a3965a4b9aa234f8703523903d92b6d2091f42ece0427fad566a35ef421c92300956245da473e5afab7d8e782c102d8133f2c1688f5173f1845c2ae3576'
                                alt='모동숲 갯민숭달팽이 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/2e7492ff55e051a7a31e5d7de50c5fc6c990e6fe7184ba197547cd5d2f39ffe31e191a3965a4b9aa234f8703523903d92b6d2091f42ece0427fad566a35ef421c92300956245da473e5afab7d8e782c102d8133f2c1688f5173f1845c2ae3576'
                                    alt='모동숲 갯민숭달팽이 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>매우 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>600</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>진주조개<br><span class='wiki-size size-down-1'>アコヤガイ</span><br><span
                    class='wiki-size size-down-1'>Pearl oyster</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 진주조개 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX9qtpB1xZR86MoBknu7p21cn9MaQRD7WPgND4o%2BCfuiLMEL6W%2B6oEBZ0n8%2BmyMxP7A%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4172'
                                data-src='//w.namu.la/s/c2daf81157bd806870aed7cc51ed7ca7d454c58bb06759ed626f12646ff0dcf2096c3fea3bd2d0270c7381a257326185c01cf8592033acd3b249e02205eb48fdef50b01d88e6dd25c92a8f5f69e8de142043506f1a5bf45d34cc4efe0c0057db'
                                alt='모동숲 진주조개 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/c2daf81157bd806870aed7cc51ed7ca7d454c58bb06759ed626f12646ff0dcf2096c3fea3bd2d0270c7381a257326185c01cf8592033acd3b249e02205eb48fdef50b01d88e6dd25c92a8f5f69e8de142043506f1a5bf45d34cc4efe0c0057db'
                                    alt='모동숲 진주조개 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2,800</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%99%8D%ED%95%A9'
                    title='홍합'>지중해담치</a><br><span class='wiki-size size-down-1'>ムールガイ</span><br><span
                    class='wiki-size size-down-1'>Mussel</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 지중해담치 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX%2FU0IW%2FdFeoE38QoK%2F8h3SkFWKx0TAv83l3Pt27LtyMi3r89D5hPyEcTlBhKqUBEZk%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='3471'
                                data-src='//ww.namu.la/s/75763e06aecf8f6bf1bad28cf4048e581098360ea2a68a8565206ebda4c3d46e40363f30e169843471c3beb1585699f8dea7e8623a1840ad038ec7b57e539c556f799b1c8c0d4235c2db7fa179b05138ae776eee519fa637162a9a6b2990d470'
                                alt='모동숲 지중해담치 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/75763e06aecf8f6bf1bad28cf4048e581098360ea2a68a8565206ebda4c3d46e40363f30e169843471c3beb1585699f8dea7e8623a1840ad038ec7b57e539c556f799b1c8c0d4235c2db7fa179b05138ae776eee519fa637162a9a6b2990d470'
                                    alt='모동숲 지중해담치 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~12월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~6월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B5%B4(%EC%96%B4%ED%8C%A8%EB%A5%98)'
                    title='굴(어패류)'>굴</a><br><span class='wiki-size size-down-1'>オイスター</span><br><span
                    class='wiki-size size-down-1'>Oyster</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 굴 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX8qv5V8aYbfLBRYYb%2B6LdlnxVOQRXgNDsEu1GbIZHDxdw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4302'
                                data-src='//ww.namu.la/s/e5877b0ca471252e127bd6a99e002ab8d8af66029b583014029eb594c6a38a07d672206ed81b374ad11a71271d498c80c5ed1562cbbee84a9ac3d592c2877f5817a1a4d97445fbef1bad903fb195e39791d0e59d4cf18b0caeec0ad452a177f4'
                                alt='모동숲 굴 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/e5877b0ca471252e127bd6a99e002ab8d8af66029b583014029eb594c6a38a07d672206ed81b374ad11a71271d498c80c5ed1562cbbee84a9ac3d592c2877f5817a1a4d97445fbef1bad903fb195e39791d0e59d4cf18b0caeec0ad452a177f4'
                                    alt='모동숲 굴 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~2월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,100</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B0%80%EB%A6%AC%EB%B9%84'
                    title='가리비'>가리비</a><br><span class='wiki-size size-down-1'>ホタテ</span><br><span
                    class='wiki-size size-down-1'>Scallop</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 가리비 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX8SqWiV9HxbC48CSXIrckBC10dZUYfW4D1wfMZiiJkPjg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4438'
                                data-src='//ww.namu.la/s/79a3de1de435979092639bcce96193dabe1f078cc5f3bd55856606f86dfefb02b43275189b22688bbacba24674fdacbf8cb72033a03086e7804d442eea945dab380c190a0de3f2a193d2c25f15ccdafd24c4d28ca36b3e489fd5c5747dac84b7'
                                alt='모동숲 가리비 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/79a3de1de435979092639bcce96193dabe1f078cc5f3bd55856606f86dfefb02b43275189b22688bbacba24674fdacbf8cb72033a03086e7804d442eea945dab380c190a0de3f2a193d2c25f15ccdafd24c4d28ca36b3e489fd5c5747dac84b7'
                                    alt='모동숲 가리비 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,200</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B3%A8%EB%B1%85%EC%9D%B4'
                    title='골뱅이'>수랑</a><br><span class='wiki-size size-down-1'>バイガイ</span><br><span
                    class='wiki-size size-down-1'>Whelk</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 수랑 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX%2FBFDTAO%2BFdOvJLY6kMnCn1XIj7K%2F2%2F%2Fil2FJoNIpHF4g%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4894'
                                data-src='//w.namu.la/s/838529aef8c1e8490a5a05ed3cd78e12a86849cdc4ec87ef725c0992efd50b22e8c5ecdb1ff9bf6bfe0652aca6ea0114574d1f9720e96e1de1964a734c7b524cbca2211909153e56949a3eadcd1690ed752c47afb1e2c27890ae6bd5d6727cab'
                                alt='모동숲 수랑 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/838529aef8c1e8490a5a05ed3cd78e12a86849cdc4ec87ef725c0992efd50b22e8c5ecdb1ff9bf6bfe0652aca6ea0114574d1f9720e96e1de1964a734c7b524cbca2211909153e56949a3eadcd1690ed752c47afb1e2c27890ae6bd5d6727cab'
                                    alt='모동숲 수랑 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%86%8C%EB%9D%BC(%EB%8F%99%EB%AC%BC)'
                    title='소라(동물)'>소라</a><br><span class='wiki-size size-down-1'>サザエ</span><br><span
                    class='wiki-size size-down-1'>Turban
                    shell</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 소라 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX8iNTMDq7rOl1LajkvvxL22yIMZvBPqjnRyRQVdJ2laUQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4763'
                                data-src='//w.namu.la/s/9185578ade3beee9986eb075311ede89d0748aff0c85c4a444941fd42357b6d178a742a1831d515a4d275af0527c69c94fa1403a68dc87192eb9beeae04e7761f9a56b2c06fc1bf94efb00fe4586d67bf464e58ec4b9f43d785769a70b590879'
                                alt='모동숲 소라 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/9185578ade3beee9986eb075311ede89d0748aff0c85c4a444941fd42357b6d178a742a1831d515a4d275af0527c69c94fa1403a68dc87192eb9beeae04e7761f9a56b2c06fc1bf94efb00fe4586d67bf464e58ec4b9f43d785769a70b590879'
                                    alt='모동숲 소라 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~5월<br>9월~12월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~6월<br>9월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%A0%84%EB%B3%B5'
                    title='전복'>전복</a><br><span class='wiki-size size-down-1'>アワビ</span><br><span
                    class='wiki-size size-down-1'>Abalone</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 전복 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX%2BP%2FfiGz%2FStT1rKiEvQQiNhy8xnO052PLRPi0AgXzykFA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4246'
                                data-src='//w.namu.la/s/77df1cf31ee839f4fe8109d9d3977a6e8a2ecb81d6e4ed90cf9b0b82b17af2539add53e461ea658afeb603e1552797ad19014dcb2318a7dd821a7a5288327d225737e90a427462db9d8b6de6095441aa455f74a64ecb03c2a93077140b839c4a'
                                alt='모동숲 전복 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/77df1cf31ee839f4fe8109d9d3977a6e8a2ecb81d6e4ed90cf9b0b82b17af2539add53e461ea658afeb603e1552797ad19014dcb2318a7dd821a7a5288327d225737e90a427462db9d8b6de6095441aa455f74a64ecb03c2a93077140b839c4a'
                                    alt='모동숲 전복 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~1월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~7월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EA%B1%B0%EA%B1%B0'
                        title='거거'>대왕거거</a></strong><br><span class='wiki-size size-down-1'>オオシャコガイ</span><br><span
                    class='wiki-size size-down-1'>Gigas Giant
                    Clam</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 대왕거거 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX%2Bp%2F3sFRB9PbH3tXdnJxvroL07Z96Ob0%2FDWNDTjfSoHn1RAx%2Bv2qAw1RJtOoPHBW7c%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='6703'
                                data-src='//w.namu.la/s/e9496166883a8198247eb713c6037c458240764615c7b150880730b6417d5407deb66d874ccf60b19db988379b35719092307a11b6dc40f9e7693236b04463454ad177d25c0bcd017071fa06c106c8e72c8bcfa561d7429c054618cbfa0358a5'
                                alt='모동숲 대왕거거 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/e9496166883a8198247eb713c6037c458240764615c7b150880730b6417d5407deb66d874ccf60b19db988379b35719092307a11b6dc40f9e7693236b04463454ad177d25c0bcd017071fa06c106c8e72c8bcfa561d7429c054618cbfa0358a5'
                                    alt='모동숲 대왕거거 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대</div>
        </td>
        <td>
            <div class='wiki-paragraph'>15,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%95%B5%EB%AC%B4%EC%A1%B0%EA%B0%9C'
                    title='앵무조개'>앵무조개</a><br><span class='wiki-size size-down-1'>オウムガイ</span><br><span
                    class='wiki-size size-down-1'>Chambered
                    nautilus</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 앵무조개 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX%2BLnx7TT9JeKWVyq4lqAgug7sQt5rfKZ1yQYsD3UKWuYXmM77vmwvoPScmUNoj%2BaI8%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='5414'
                                data-src='//w.namu.la/s/11d461cd5703dfd66e54eea2e3f8156bc28bdc4a75c38f931475de389ac2792ea8e8f4bab919785384e56021d4b9e556f2bb1770491a59d95af8a2ea3fe72f690c4c8fe1a9b53e523b47a1b0ebfd60b153c7f3baa1011856e554078d848875db'
                                alt='모동숲 앵무조개 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/11d461cd5703dfd66e54eea2e3f8156bc28bdc4a75c38f931475de389ac2792ea8e8f4bab919785384e56021d4b9e556f2bb1770491a59d95af8a2ea3fe72f690c4c8fe1a9b53e523b47a1b0ebfd60b153c7f3baa1011856e554078d848875db'
                                    alt='모동숲 앵무조개 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~6월<br>9월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~5월<br>9월~12월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,800</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%AC%B8%EC%96%B4'
                    title='문어'>문어</a><br><span class='wiki-size size-down-1'>タコ</span><br><span
                    class='wiki-size size-down-1'>Octopus</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 문어 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX9SwD1oRYDeXTVR%2BsM9XbftLEJFA8VsUKYBJFxuCGGIcw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4882'
                                data-src='//w.namu.la/s/14ebca92362fd7f1161f5396d12717928c8042b8870eea6783856fff524cc752cfdb5bd95d9c1a320607773cc93637fa65d179d39cddbfe9a8a35d73e369f1580decb880f3fd3805978de86c88b8ff6c83f1efbb5f1c157382db84ac6a27d616'
                                alt='모동숲 문어 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/14ebca92362fd7f1161f5396d12717928c8042b8870eea6783856fff524cc752cfdb5bd95d9c1a320607773cc93637fa65d179d39cddbfe9a8a35d73e369f1580decb880f3fd3805978de86c88b8ff6c83f1efbb5f1c157382db84ac6a27d616'
                                    alt='모동숲 문어 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,200</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a><a class='wiki-fn-content'
                    title='동물의 숲 e+부터 타운으로 놀러가요 동물의 숲 까지는 낚싯대로 잡을수 있는 물고기로 등장.' href='#fn-17'><span class='target'
                        id='rfn-17'></span>&#91;17&#93;</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EC%9A%B0%EB%AC%B4%EB%AC%B8%EC%96%B4'
                        title='우무문어'>우무문어</a></strong><br><span class='wiki-size size-down-1'>メンダコ</span><br><span
                    class='wiki-size size-down-1'>Umbrella
                    Octopus</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 우무문어 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX8ziq8fuoy4La06cZ4RXj2qoc2yyMmgC8z67hww8urj5XhaiGQcQOnvT7tLPs64eag%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4422'
                                data-src='//w.namu.la/s/349650b2753ed52cd2e4016e438ea46ee243563d829a842178df62eed4866a26702aa6fb323f70fa23d1a36b04a806068b2893915d09eeca2e729dd210abba8e53d62bf27356225223dd9d114a4f8929b792820d3ff9fb21d47b42356a290aae'
                                alt='모동숲 우무문어 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/349650b2753ed52cd2e4016e438ea46ee243563d829a842178df62eed4866a26702aa6fb323f70fa23d1a36b04a806068b2893915d09eeca2e729dd210abba8e53d62bf27356225223dd9d114a4f8929b792820d3ff9fb21d47b42356a290aae'
                                    alt='모동숲 우무문어 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~5월<br>9월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~5월<br>9월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>6,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal'
                        href='/w/%ED%9D%A1%ED%98%88%EC%98%A4%EC%A7%95%EC%96%B4' title='흡혈오징어'>흡혈오징어</a></strong><br><span
                    class='wiki-size size-down-1'>コウモリダコ</span><br><span class='wiki-size size-down-1'>Vampire Squid</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 흡혈오징어 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX8gduJamGDYZmoaRHMuOFXsgcSkb5x5g2XWguIKHaqOeQGDBunD9USbX9EtsTyFVbc%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='5965'
                                data-src='//ww.namu.la/s/330fb0ec97df693b6f9b9ed5de3a8ee042f3e2c6e60125a8e0b9aca7419dc0b00d97ca3f40fc7bede8c85762f55ea59de2ab1783b003d83b9fd92b3ed396af9ee7f5d8eb414b3911fdedfa79cd10bfb7952b548bdb5fcd3b20f7b2aef59bdcb0'
                                alt='모동숲 흡혈오징어 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/330fb0ec97df693b6f9b9ed5de3a8ee042f3e2c6e60125a8e0b9aca7419dc0b00d97ca3f40fc7bede8c85762f55ea59de2ab1783b003d83b9fd92b3ed396af9ee7f5d8eb414b3911fdedfa79cd10bfb7952b548bdb5fcd3b20f7b2aef59bdcb0'
                                    alt='모동숲 흡혈오징어 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~2월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><u>반딧불오징어</u><br><span class='wiki-size size-down-1'>ホタルイカ</span><br><span
                    class='wiki-size size-down-1'>Firefly Squid</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 반딧불오징어 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX9a0F8aSz6L1Qr8l01EX4NxPOwOAGCb53QJ4BbVsm47E4iqd2%2FUssiGROsE2SdYhCQ%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4103'
                                data-src='//ww.namu.la/s/0528e8708b7c78384324f7ca811cccefd35d749b430b40ac5a8c9df9754e4610d8dbfcede9415f21fe5529d282c455ba93f3b27219ab5d0ce269a7da5de5e41e2475888245e8c84bd6eae3094339ee3706b8bae45fc95a0ecf6097dff7eebb4b'
                                alt='모동숲 반딧불오징어 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/0528e8708b7c78384324f7ca811cccefd35d749b430b40ac5a8c9df9754e4610d8dbfcede9415f21fe5529d282c455ba93f3b27219ab5d0ce269a7da5de5e41e2475888245e8c84bd6eae3094339ee3706b8bae45fc95a0ecf6097dff7eebb4b'
                                    alt='모동숲 반딧불오징어 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~6월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~12월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>21시~4시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>매우 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,400</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%BD%83%EA%B2%8C'
                    title='꽃게'>꽃게</a><br><span class='wiki-size size-down-1'>ガザミ</span><br><span
                    class='wiki-size size-down-1'>Gazami Crab</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 꽃게 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX%2BzjoPOqtFOo3HQE6KFKiewHdFVMXjQaGiarMFHcFiiLg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='6034'
                                data-src='//ww.namu.la/s/ce189c70b920cc94e0ad2747ab199d15a650a4850eadc6ebbea2141662badfd9460f50c3edc95f56a0a0a61fe3a419beda7bf0b97332d8645762afb2d23ace5ea9e98b366e285099167962dc3b1619a86ad508a394766aec87173799c38a07e3'
                                alt='모동숲 꽃게 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/ce189c70b920cc94e0ad2747ab199d15a650a4850eadc6ebbea2141662badfd9460f50c3edc95f56a0a0a61fe3a419beda7bf0b97332d8645762afb2d23ace5ea9e98b366e285099167962dc3b1619a86ad508a394766aec87173799c38a07e3'
                                    alt='모동숲 꽃게 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2,200</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%8D%98%EC%A7%80%EB%8B%88%EC%8A%A4%ED%81%AC%EB%9E%A9' title='던지니스크랩'>던지니스크랩</a><br><span
                    class='wiki-size size-down-1'>ダンジネスクラブ</span><br><span class='wiki-size size-down-1'>Dungeoness
                    Crab</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 던지니스크랩 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX%2B6diVGRzb4nsrNAsbJcBtIJEZrKbCaPwmuyzhJpo%2B6JtuP7qvrsPDCVaSy3VZ59f0%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='5159'
                                data-src='//w.namu.la/s/41c309fc92655efcc105016c6d8f589a64426131de5d8e1397105a1006d495e766c6b3af858b7527ba96213cdac311d7739d796042b2db5105d7ac31463984ab5af59eb88e28671a5eade8f420e345f0bd371c9d1cea15a5f8d05624c9a88c09'
                                alt='모동숲 던지니스크랩 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/41c309fc92655efcc105016c6d8f589a64426131de5d8e1397105a1006d495e766c6b3af858b7527ba96213cdac311d7739d796042b2db5105d7ac31463984ab5af59eb88e28671a5eade8f420e345f0bd371c9d1cea15a5f8d05624c9a88c09'
                                    alt='모동숲 던지니스크랩 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~5월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,900</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%8C%80%EA%B2%8C'
                        title='대게'>대게</a></strong><br><span class='wiki-size size-down-1'>ズワイガニ</span><br><span
                    class='wiki-size size-down-1'>Snow
                    crab</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 대게 아이콘'
                    href='/jump/X88kAkz0NdZ%2BlcND%2F%2FAMgcZQxyL8KX4Ur3R6n1HntX%2FrUYQ%2FPk2plsSU4jCL8yfGQLc6M5m5glaO4%2BByra6o5g%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='5394'
                                data-src='//w.namu.la/s/25111dc7347ef42b4c294c723a91facb196b7b28ce5a04645a2745abb166ea3e01123546c64e1a2f33f1c5100ac2c7e08e76c24c7884a484c97d2d68f0fbb99e93024eb604dd92e6cda988c5584dcf53e26ae82b78b1a566fa890c86506faad7'
                                alt='모동숲 대게 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/25111dc7347ef42b4c294c723a91facb196b7b28ce5a04645a2745abb166ea3e01123546c64e1a2f33f1c5100ac2c7e08e76c24c7884a484c97d2d68f0fbb99e93024eb604dd92e6cda988c5584dcf53e26ae82b78b1a566fa890c86506faad7'
                                    alt='모동숲 대게 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>6,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EC%99%95%EA%B2%8C'
                        title='왕게'>왕게</a></strong><br><span class='wiki-size size-down-1'>タラバガニ</span><br><span
                    class='wiki-size size-down-1'>Red
                    king crab</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 왕게 아이콘'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2FlfdinNJrMM%2BSSKSNFCfVjGpzm6W2lC0AnklZa8DY%2FJIKARA%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='6095'
                                data-src='//w.namu.la/s/fdb6fb723bd598f84250ed4f8c13b6514b4a78e9f4c3da263a2fad1fe3c13f15922c3b3077dc8cfd9591e60b61de5092b898d0f107d30c2eba3d138a51d2f901f510ac253c6359ede8f0c3e584a97b90ed181db6c91757f35bc479c5a4108e94'
                                alt='모동숲 왕게 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/fdb6fb723bd598f84250ed4f8c13b6514b4a78e9f4c3da263a2fad1fe3c13f15922c3b3077dc8cfd9591e60b61de5092b898d0f107d30c2eba3d138a51d2f901f510ac253c6359ede8f0c3e584a97b90ed181db6c91757f35bc479c5a4108e94'
                                    alt='모동숲 왕게 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>8,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%94%B0%EA%B0%9C%EB%B9%84'
                    title='따개비'>따개비</a><br><span class='wiki-size size-down-1'>フジツボ</span><br><span
                    class='wiki-size size-down-1'>Acorn barnacle</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 따개비 아이콘'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2FlfdiWUF8%2FCqLV0AG3b48GCyzf7cJ7qoALpiG%2FVWthD7%2FzXw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4909'
                                data-src='//w.namu.la/s/cc27d48681f7511488cc7a4e948ebf6445cfe87027519407e802dcaade67d8b613f2df173f828270b56c36679808e5baeed3722c580524b08241d359b5e1ab44ccbb9a0ceecf743a13466c51765ce68ae23818a6a4350c2852ff4949ed896ca5'
                                alt='모동숲 따개비 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/cc27d48681f7511488cc7a4e948ebf6445cfe87027519407e802dcaade67d8b613f2df173f828270b56c36679808e5baeed3722c580524b08241d359b5e1ab44ccbb9a0ceecf743a13466c51765ce68ae23818a6a4350c2852ff4949ed896ca5'
                                    alt='모동숲 따개비 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>매우 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>600</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><u><strong><a class='wiki-link-internal'
                            href='/w/%ED%82%A4%EB%8B%A4%EB%A6%AC%EA%B2%8C' title='키다리게'>키다리게</a></strong></u><br><span
                    class='wiki-size size-down-1'>タカアシガニ</span><br><span class='wiki-size size-down-1'>Spider crab</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 키다리게 아이콘'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2FlfdgLmDvm%2FIqaXELduf%2FdzKkiw7ddFjvHwax1MP61Ry8P1XWsbpBdrBtMUtocNxv2%2F9U%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='7344'
                                data-src='//w.namu.la/s/84a75408b172995646d270df9a68813afec9b09751e584ffab58547e658a543545b0f6558c8dfd03ebb244feba8fbac0206718c7f7012103cc554d2df14ff34f1c0b17494977433a7f6dcac1ce83de2b1d348a28308c1b08209bfc88b537fbb7'
                                alt='모동숲 키다리게 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/84a75408b172995646d270df9a68813afec9b09751e584ffab58547e658a543545b0f6558c8dfd03ebb244feba8fbac0206718c7f7012103cc554d2df14ff34f1c0b17494977433a7f6dcac1ce83de2b1d348a28308c1b08209bfc88b537fbb7'
                                    alt='모동숲 키다리게 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>특대</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%B3%B4%EB%A6%AC%EC%83%88%EC%9A%B0'
                    title='보리새우'>보리새우</a><br><span class='wiki-size size-down-1'>クルマエビ</span><br><span
                    class='wiki-size size-down-1'>Tiger
                    prawn</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 보리새우 아이콘'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2FlfdiTIsto%2FQ2MV79LH8YDSIjHM7CsTYqFEiFZpSE23qEzYyK4hW%2FG2tMrlW1Pt9swFwY%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4591'
                                data-src='//ww.namu.la/s/959f81f8ccda39ba6dc22002d0e23524b6dc000b05c641dfc5fbe0509db9aa9d37a9810709ebc280eb7a5d4189661e10a1df9c2d1d4c66d9656d5ea018da396c95ea26afce74cd192c719327e547bfd97069c96bbf4911ddabdae76ee59f2dfd'
                                alt='모동숲 보리새우 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/959f81f8ccda39ba6dc22002d0e23524b6dc000b05c641dfc5fbe0509db9aa9d37a9810709ebc280eb7a5d4189661e10a1df9c2d1d4c66d9656d5ea018da396c95ea26afce74cd192c719327e547bfd97069c96bbf4911ddabdae76ee59f2dfd'
                                    alt='모동숲 보리새우 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>북쪽분홍새우<br><span class='wiki-size size-down-1'>アマエビ</span><br><span
                    class='wiki-size size-down-1'>Sweet shrimp</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 북쪽분홍새우 아이콘'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2Flfdh40uRqmMV7g5m%2FD7SRpJfY5v68l3mtrhtJBDmsJ7jifdK4NwTm5wdPQ6GeFFr6yGA%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='3671'
                                data-src='//w.namu.la/s/78d941d26408660008e3cd46bbff064b736dd68ba223557c753bf0e1a2f7a25bde89873ece9a7a29d20cce91b6d86baf96ca652ea210048378d5bed2bb5b5501416f6d0791a68d7e25c1f754f3ba3a48ec3c2e1ffcfe8a1eaa16cbaa32ffaf6a'
                                alt='모동숲 북쪽분홍새우 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/78d941d26408660008e3cd46bbff064b736dd68ba223557c753bf0e1a2f7a25bde89873ece9a7a29d20cce91b6d86baf96ca652ea210048378d5bed2bb5b5501416f6d0791a68d7e25c1f754f3ba3a48ec3c2e1ffcfe8a1eaa16cbaa32ffaf6a'
                                    alt='모동숲 북쪽분홍새우 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~2월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,400</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EA%B0%AF%EA%B0%80%EC%9E%AC'
                    title='갯가재'>갯가재</a><br><span class='wiki-size size-down-1'>シャコ</span><br><span
                    class='wiki-size size-down-1'>Mantis shrimp</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 갯가재 아이콘'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2FlfdjzoB3j6K3GG55xdpNJ58IvhybkD4%2Fa82opLohizUwASg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='5133'
                                data-src='//w.namu.la/s/eebaf01e5a82984099213d918ab742f9ce5f2ec6bd57242c44578e814ec6940ff2103677b3f1060b289a28c8634d5165caab9ff42dbdaea07248b3b615065f4b00d65de2f36da3b679365adb1ce501e2ca03e0b6fcda700534b15f5f68aa3079'
                                alt='모동숲 갯가재 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/eebaf01e5a82984099213d918ab742f9ce5f2ec6bd57242c44578e814ec6940ff2103677b3f1060b289a28c8634d5165caab9ff42dbdaea07248b3b615065f4b00d65de2f36da3b679365adb1ce501e2ca03e0b6fcda700534b15f5f68aa3079'
                                    alt='모동숲 갯가재 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%8B%AD%EC%83%88%EC%9A%B0'
                        title='닭새우'>닭새우</a></strong><br><span class='wiki-size size-down-1'>イセエビ</span><br><span
                    class='wiki-size size-down-1'>Spiny
                    lobster</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 닭새우 아이콘'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2Flfdi3q3YB4GOw%2FaPzcZnRftFx1wtxxy2SI3KJ%2BYNe7AMFxQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='6520'
                                data-src='//ww.namu.la/s/252cd001129792c5fc570d1f96409b9bc39631cad07bc9bb0d0ee88cac07415125e4ec999e3776803ba5499caf3327269b407c7d69464ef26754ab5ee585570c8f8361302f96a769e500b454704a30a54ac3e805d7c4554b7e291e5c39536823'
                                alt='모동숲 닭새우 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/252cd001129792c5fc570d1f96409b9bc39631cad07bc9bb0d0ee88cac07415125e4ec999e3776803ba5499caf3327269b407c7d69464ef26754ab5ee585570c8f8361302f96a769e500b454704a30a54ac3e805d7c4554b7e291e5c39536823'
                                    alt='모동숲 닭새우 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~12월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~6월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>21시~4시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal' href='/w/%EB%B0%94%EB%8B%B7%EA%B0%80%EC%9E%AC'
                        title='바닷가재'>바닷가재</a></strong><br><span class='wiki-size size-down-1'>ロブスター</span><br><span
                    class='wiki-size size-down-1'>Lobster</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 바닷가재 아이콘'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2FlfdiiiKs0YcPc9AKCXebTJgHmFA3NT%2FXEHwSQagfBTX84T3HNQtGIIWu9Xd5zip%2BFP4Y%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='6595'
                                data-src='//ww.namu.la/s/0d3f43ca0e3843cb42182662f5f8b304568e2efd643f4e11ac4cc9b60a7165801f217af991302cb5883807630cc885633bf6f7782381c81c54076462c964a69023dea2a355c689a12e04aafaa798948451d4e05055fcdef95032032b0dcee2e9'
                                alt='모동숲 바닷가재 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/0d3f43ca0e3843cb42182662f5f8b304568e2efd643f4e11ac4cc9b60a7165801f217af991302cb5883807630cc885633bf6f7782381c81c54076462c964a69023dea2a355c689a12e04aafaa798948451d4e05055fcdef95032032b0dcee2e9'
                                    alt='모동숲 바닷가재 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~6월<br>12월~1월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~7월<br>10월~12월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%83%80%EC%9A%B4%EC%9C%BC%EB%A1%9C%20%EB%86%80%EB%9F%AC%EA%B0%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='타운으로 놀러가요 동물의 숲'>타운으로 놀러가요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal'
                        href='/w/%EB%B0%94%ED%8B%B0%EB%85%B8%EB%AC%B4%EC%8A%A4' title='바티노무스'>자이언트
                        이소포드</a></strong><br><span class='wiki-size size-down-1'>ダイオウグソクムシ</span><br><span
                    class='wiki-size size-down-1'>Giant isopod</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 자이언트 이소포드 아이...'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2FlfdhiErYTbrdrzlIBWoeSyHp2%2BbsVA8FtE%2FYue8SVgxdKvbYk3mg519khkKeu42vvybM%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='5886'
                                data-src='//ww.namu.la/s/6461b46bd74c99de49df5af091d9e1e9f813c9272df3c00a3cfd29436f44c9eeb535e03e381b9cafa22161f5a612b0381d08159c7379d0f7fada243ebe49ef297ca7d80ba2088091a732e1cffc9190f910deabe306b4b65176ef23dc0e184de2'
                                alt='모동숲 자이언트 이소포드 아이...'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/6461b46bd74c99de49df5af091d9e1e9f813c9272df3c00a3cfd29436f44c9eeb535e03e381b9cafa22161f5a612b0381d08159c7379d0f7fada243ebe49ef297ca7d80ba2088091a732e1cffc9190f910deabe306b4b65176ef23dc0e184de2'
                                    alt='모동숲 자이언트 이소포드 아이...'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>7월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>9시~16시<br>21시~4시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>12,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%88%AC%EA%B5%AC%EA%B2%8C'
                    title='투구게'>투구게</a><br><span class='wiki-size size-down-1'>カブトガニ</span><br><span
                    class='wiki-size size-down-1'>Horseshoe crab</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 투구게 아이콘'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2Flfdjlj4uvcDm%2FM1dI4aY8MR%2By5o1gAW1W0k4kPk1%2Bb6eH%2Bw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4378'
                                data-src='//w.namu.la/s/5eaf6ecb76996b1f2aa274be13e7b8e06b2e0b566f499980c3162800e8d36d893285405501e1d5ccea8b0d9474d7214fb97e81fc765fff35962f7192d65dccc6ad21a745541d91e746ba0a182bce4e558cec77e7f4b4fc67ad98f18ae16c112d'
                                alt='모동숲 투구게 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/5eaf6ecb76996b1f2aa274be13e7b8e06b2e0b566f499980c3162800e8d36d893285405501e1d5ccea8b0d9474d7214fb97e81fc765fff35962f7192d65dccc6ad21a745541d91e746ba0a182bce4e558cec77e7f4b4fc67ad98f18ae16c112d'
                                    alt='모동숲 투구게 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>7월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>21시~4시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%A9%8D%EA%B2%8C'
                    title='멍게'>멍게</a><br><span class='wiki-size size-down-1'>ホヤ</span><br><span
                    class='wiki-size size-down-1'>Sea Pineapple</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 멍게 아이콘'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2Flfdg3ZodNV0ihpei6rFPdWXYWKirbDvXVVHPc8o4oqkHHiQ%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4298'
                                data-src='//ww.namu.la/s/f5c10a56ec817cd98f268a887a9dd62a5406841c3955534e1c44b1843a11db0e3ccf453a9dba8e1988067459770610000598b5d3c12e596a36abfd458e254b0dc2df42cafce66efab301c65323985787162557f618cdc242300ca870f9bf9b55'
                                alt='모동숲 멍게 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/f5c10a56ec817cd98f268a887a9dd62a5406841c3955534e1c44b1843a11db0e3ccf453a9dba8e1988067459770610000598b5d3c12e596a36abfd458e254b0dc2df42cafce66efab301c65323985787162557f618cdc242300ca870f9bf9b55'
                                    alt='모동숲 멍게 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~2월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,500</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>가든일<br><span class='wiki-size size-down-1'>チンアナゴ</span><br><span
                    class='wiki-size size-down-1'>Spotted garden
                    eel</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 가든일 아이콘'
                    href='/jump/4CgmH2fASuKEHCjDGpufOXHMjnaTDqff3IYUMK%2FlfdjrEsW0J9uq70oYctndc2PNcAVVBvTZtLatzRA86lSu%2Bw%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='3273'
                                data-src='//ww.namu.la/s/92ca1f92c96d561e0081b2ab7855e169e9e576dc798807514c35f0796f3d55a08b6b46f0009f23b2e65b12db6cd22e003ef82b1da2aa0be26a94bfac239f87c4ea8eee29e0235c27b823f0532f8f8674dce93e5b813306a3de881e3cabec635d'
                                alt='모동숲 가든일 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/92ca1f92c96d561e0081b2ab7855e169e9e576dc798807514c35f0796f3d55a08b6b46f0009f23b2e65b12db6cd22e003ef82b1da2aa0be26a94bfac239f87c4ea8eee29e0235c27b823f0532f8f8674dce93e5b813306a3de881e3cabec635d'
                                    alt='모동숲 가든일 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>5월~10월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4시~21시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>1,100</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%8E%B8%ED%98%95%EB%8F%99%EB%AC%BC'
                    title='편형동물'>납작벌레</a><br><span class='wiki-size size-down-1'>ヒラムシ</span><br><span
                    class='wiki-size size-down-1'>Flatworm</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 납작벌레 아이콘'
                    href='/jump/nq6ALgkIApemvmsk0OaoVzHfdsD2MBZj3nagd9esa%2Fdt8SzYlibjSGjsuBtlN2cAt0sKqFeFwTrP0d1hTszJmAfGjj7RRjVgQKDnilNPpcg%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='3437'
                                data-src='//ww.namu.la/s/428d1df0a373df4f2049994ae69b24a65da3d9365bc385f07eee9043b78ec469fe43f614097286fd04f061b544d0046d9e1cab2832dfed06aafa13775594e26c892f0250921c5dfca83bf9da04c9dd3f26e9fa4a505e57590629e2848f0744a1'
                                alt='모동숲 납작벌레 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/428d1df0a373df4f2049994ae69b24a65da3d9365bc385f07eee9043b78ec469fe43f614097286fd04f061b544d0046d9e1cab2832dfed06aafa13775594e26c892f0250921c5dfca83bf9da04c9dd3f26e9fa4a505e57590629e2848f0744a1'
                                    alt='모동숲 납작벌레 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>8월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2월~3월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>매우 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>700</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><strong><a class='wiki-link-internal'
                        href='/w/%ED%95%B4%EB%A1%9C%EB%8F%99%EA%B5%B4%ED%95%B4%EB%A9%B4'
                        title='해로동굴해면'>해로동혈</a></strong><br><span class='wiki-size size-down-1'>カイロウドウケツ</span><br><span
                    class='wiki-size size-down-1'>Venus Flower
                    Basket</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='모동숲 해로동혈 아이콘'
                    href='/jump/nq6ALgkIApemvmsk0OaoVzHfdsD2MBZj3nagd9esa%2Fcf0X%2BGnrMwgcdv8Dw1Ivk1vayVk6ssDGPfivJ0Upzqy9soujzBIfRFjcdfrlUaadQ%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='4099'
                                data-src='//ww.namu.la/s/05deaec7966924ec67e7bb86f89020d44de456c438c70d4423a68de1acbe4e6162680b3c70149904efbfa538752e78975683b46792f3e6c3c5de2eefb78e3c6e66219efc01dff492542483111b6c067aed134a6f2eb620bee1c7cafdc53889ac'
                                alt='모동숲 해로동혈 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/05deaec7966924ec67e7bb86f89020d44de456c438c70d4423a68de1acbe4e6162680b3c70149904efbfa538752e78975683b46792f3e6c3c5de2eefb78e3c6e66219efc01dff492542483111b6c067aed134a6f2eb620bee1c7cafdc53889ac'
                                    alt='모동숲 해로동혈 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>10월~2월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4월~8월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다(잠수)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>5,000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AA%A8%EC%97%AC%EB%B4%90%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='모여봐요 동물의 숲'>모여봐요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>떡붕어<br><span class='wiki-size size-down-1'>ヘラブナ</span><br><span
                    class='wiki-size size-down-1'>Herabuna</span></div>
        </td>
        <td style='text-align:center;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='동물의 숲 떡붕어 아이콘'
                    href='/jump/nq6ALgkIApemvmsk0OaoVz3JuwsnIUVBU7hmOz7GAarTmBQqllwxvXs0JBOEjJYVEqYFQwE%2BcPw6nxklsHziu8uW3l5mI9QNlvxlHjpC1uI%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='407'
                                data-src='//ww.namu.la/s/c73358fae92e8da6313c3deb87c6338c6901220514f387083751b7c5a1e0fd1e629a9ba1625c052048bb14ca32b4b8cc6108a5dbd0ff1126bc8cc45893af1d80554e71f23f49e487b92d7c3f65cf26b2c970792ca9ea17ade80733f50154f816'
                                alt='동물의 숲 떡붕어 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/c73358fae92e8da6313c3deb87c6338c6901220514f387083751b7c5a1e0fd1e629a9ba1625c052048bb14ca32b4b8cc6108a5dbd0ff1126bc8cc45893af1d80554e71f23f49e487b92d7c3f65cf26b2c970792ca9ea17ade80733f50154f816'
                                    alt='동물의 숲 떡붕어 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td colspan='2'>
            <div class='wiki-paragraph'>300</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 +</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>대형메기<br><span class='wiki-size size-down-1'>オオナマズ</span><br><span
                    class='wiki-size size-down-1'>Giant catfish</span>
            </div>
        </td>
        <td style='text-align:center;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='동물의 숲 대형메기 아이콘'
                    href='/jump/nq6ALgkIApemvmsk0OaoVz3JuwsnIUVBU7hmOz7GAarCc9p42fES7%2FvhMJcxEU5OkJUV3iD5Mp3wL4kuGNXpKQ1jRR9StWOohp2dqt4enxQ%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='494'
                                data-src='//ww.namu.la/s/c564dd81bcb768c137cb0e2d0597dd274ece35602a10e13515596548b9b845cea418976560ba34bb7d3a883fd4945db8a52d9bba2ad26b57b7dc76c33fac8e7bd9e948fb18bd5c5ef5c8e130ac17192ca7e1b6d5f2e290e30886b9091480c463'
                                alt='동물의 숲 대형메기 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/c564dd81bcb768c137cb0e2d0597dd274ece35602a10e13515596548b9b845cea418976560ba34bb7d3a883fd4945db8a52d9bba2ad26b57b7dc76c33fac8e7bd9e948fb18bd5c5ef5c8e130ac17192ca7e1b6d5f2e290e30886b9091480c463'
                                    alt='동물의 숲 대형메기 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td colspan='2'>
            <div class='wiki-paragraph'>3000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>작은 배스<br><span class='wiki-size size-down-1'>ちいさいバス</span><br><span
                    class='wiki-size size-down-1'>Small bass</span>
            </div>
        </td>
        <td style='text-align:center;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='동물의 숲 작은 배스 아이콘'
                    href='/jump/nq6ALgkIApemvmsk0OaoVz3JuwsnIUVBU7hmOz7GAaoLgMVi5d91x%2Bz7ktJ7LvpJIhX8ZnExLh9he8Cga1ftvVS%2FtbEWzQ2X5vRbnxwO1ts%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='313'
                                data-src='//ww.namu.la/s/ad9a365ab66b1e5addb4ba2e83a8a82922775cb19f0c893fe602c308d20641d043906ef905021b17dc5798f274a9b08af899f042b740488ab5ad38bde7211a9083bde310e787753e2bd6de1a64374bd676d4a3b39f9dfddd2e61756f724281e0'
                                alt='동물의 숲 작은 배스 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/ad9a365ab66b1e5addb4ba2e83a8a82922775cb19f0c893fe602c308d20641d043906ef905021b17dc5798f274a9b08af899f042b740488ab5ad38bde7211a9083bde310e787753e2bd6de1a64374bd676d4a3b39f9dfddd2e61756f724281e0'
                                    alt='동물의 숲 작은 배스 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td colspan='2'>
            <div class='wiki-paragraph'>200</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>보통 배스<br><span class='wiki-size size-down-1'>ふつうのバス</span><br><span
                    class='wiki-size size-down-1'>Black bass</span>
            </div>
        </td>
        <td style='text-align:center;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='놀동숲 큰입배스 아이콘'
                    href='/jump/nq6ALgkIApemvmsk0OaoV2V%2B5CJbdR%2FUE52jeKQ9P3zsSRpJFidyOwLX%2BrHup%2BR28B%2FpG7jgRAKfVgi3tVRjIgS2ESWObF11zOdgFY6kd1k%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iMjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQiIGhlaWdodD0iMjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='616'
                                data-src='//ww.namu.la/s/3d88718b2ea54de5e9b1be6ccfce53494d4c88eb083e57b9ad29ae9a1f37436e59aecf3d5941432a16581fde5696d4d338b3a48d04487e70dd06fedc8c0f5953a0173ee734369dcf033dc29ebc7451b9c87966fd62fb38a4fbd06459711023fe'
                                alt='놀동숲 큰입배스 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/3d88718b2ea54de5e9b1be6ccfce53494d4c88eb083e57b9ad29ae9a1f37436e59aecf3d5941432a16581fde5696d4d338b3a48d04487e70dd06fedc8c0f5953a0173ee734369dcf033dc29ebc7451b9c87966fd62fb38a4fbd06459711023fe'
                                    alt='놀동숲 큰입배스 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td colspan='2'>
            <div class='wiki-paragraph'>300</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'>큰 배스<br><span class='wiki-size size-down-1'>おおきいバス</span><br><span
                    class='wiki-size size-down-1'>Large bass</span>
            </div>
        </td>
        <td style='text-align:center;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='동물의 숲 큰 배스 아이콘'
                    href='/jump/nq6ALgkIApemvmsk0OaoVz3JuwsnIUVBU7hmOz7GAapElPBfByjRoOBeyR92MOi432nbgptS0DxQEz%2BgWUHOagcpss1rmelikgYPsoQLdp8%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='543'
                                data-src='//w.namu.la/s/520211d85376b3f6e49ee89018d95b5c7e10d9ab53c44a9a8853bed793fafb9e226fd0c5974cfe03d01906cd714d9571abc7d7116cd0daf323d93d109c29802736abdaee3a503d218953a17dccd59156e1ce6014d0722ca2feacd59351d4047b'
                                alt='동물의 숲 큰 배스 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/520211d85376b3f6e49ee89018d95b5c7e10d9ab53c44a9a8853bed793fafb9e226fd0c5974cfe03d01906cd714d9571abc7d7116cd0daf323d93d109c29802736abdaee3a503d218953a17dccd59156e1ce6014d0722ca2feacd59351d4047b'
                                    alt='동물의 숲 큰 배스 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td colspan='2'>
            <div class='wiki-paragraph'>3000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%86%A1%EC%96%B4'
                    title='송어'>민물송어</a><br><span class='wiki-size size-down-1'>カワマス</span><br><span
                    class='wiki-size size-down-1'>Brook trout</span>
            </div>
        </td>
        <td style='text-align:center;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='동물의 숲 민물송어 아이콘'
                    href='/jump/nq6ALgkIApemvmsk0OaoVz3JuwsnIUVBU7hmOz7GAarHvEuYPv6sLeWrWfN3rlqqtMrfvISJw7WEohz1igWSChdPDUTWmumOqtyiOl%2FBdp4%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='814'
                                data-src='//w.namu.la/s/d2425835b5831f09480554e31d33e891135090b54255fa1bfeb8d664f9bbeccc936400323f81341f7b666680cb65d356474ce2ca3455806d5d6b26445f6dda16967b5adbd9875b71b07be5050f1dabcb6f41b305cbff467d5bb56ea285c91ee3'
                                alt='동물의 숲 민물송어 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/d2425835b5831f09480554e31d33e891135090b54255fa1bfeb8d664f9bbeccc936400323f81341f7b666680cb65d356474ce2ca3455806d5d6b26445f6dda16967b5adbd9875b71b07be5050f1dabcb6f41b305cbff467d5bb56ea285c91ee3'
                                    alt='동물의 숲 민물송어 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td colspan='2'>
            <div class='wiki-paragraph'>150</div>
        </td>
        <td>
            <div class='wiki-paragraph'>북미판 <a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 e+</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%95%B4%ED%8C%8C%EB%A6%AC'
                    title='해파리'>해파리</a><br><span class='wiki-size size-down-1'>クラゲ</span><br><span
                    class='wiki-size size-down-1'>Jellyfish</span></div>
        </td>
        <td style='text-align:center;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='타동숲 해파리 아이콘'
                    href='/jump/nq6ALgkIApemvmsk0OaoVy%2FDniWYlwUamI5AnDeHhBNJpDmLQpEMUbbixw11UhAIwfViSQe%2F9onmNL4Rhlzxbg%3D%3D'
                    rel='nofollow'><span class='wiki-image-align-normal' style='width:64px;'><span
                            class='wiki-image-wrapper' style='width: 100%;'><img class='wiki-image-space' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc2IiBoZWlnaHQ9IjM3NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='><img
                                class='wiki-image wiki-image-loading' width='100%'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc2IiBoZWlnaHQ9IjM3NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48L3N2Zz4='
                                data-filesize='50737'
                                data-src='//w.namu.la/s/9fc9e1663d8e9cf1a6264e949d09161829c744ba2ea592d1441c8698528d2d6cfc9f473a7773b8f721f5a42da3f4b8b56825b82c0f04676234f44cb6fa4dba2b8ea131fead6d985f25195ab3deca795f2abf21d9f8cf0b8c68ddeef04fa1b3d7'
                                alt='타동숲 해파리 아이콘'><noscript><img class='wiki-image' width='100%'
                                    src='//w.namu.la/s/9fc9e1663d8e9cf1a6264e949d09161829c744ba2ea592d1441c8698528d2d6cfc9f473a7773b8f721f5a42da3f4b8b56825b82c0f04676234f44cb6fa4dba2b8ea131fead6d985f25195ab3deca795f2abf21d9f8cf0b8c68ddeef04fa1b3d7'
                                    alt='타동숲 해파리 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>8월말</div>
        </td>
        <td>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>바다</div>
        </td>
        <td colspan='2'>
            <div class='wiki-paragraph'>100</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲 +</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%83%80%EC%9A%B4%EC%9C%BC%EB%A1%9C%20%EB%86%80%EB%9F%AC%EA%B0%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='타운으로 놀러가요 동물의 숲'>타운으로 놀러가요 동물의 숲</a><a class='wiki-fn-content'
                    title='다만 튀동숲에서도 수영을 할 때 장애물로 출연한다.' href='#fn-18'><span class='target'
                        id='rfn-18'></span>&#91;18&#93;</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%88%84%EC%B9%98'
                    title='누치'>누치</a><br><span class='wiki-size size-down-1'>ニゴイ</span><br><span
                    class='wiki-size size-down-1'>Barbel steed</span>
            </div>
        </td>
        <td style='text-align:center;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='동물의 숲 누치 아이콘'
                    href='/jump/nq6ALgkIApemvmsk0OaoVz3JuwsnIUVBU7hmOz7GAapgdbkmY%2FR7EPqaFBtFi%2FJAFHaLm7tm6ehBQQERbj59jGNX6feF5XBK3p5SXRvHO7E%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='1928'
                                data-src='//w.namu.la/s/55bd2374cee49870dffa4cf8c7a8ff8102029495800868dd9cc06f422a819ea0e6e5f35ce3cc61f5575eaa5345932cb47863b231eb71ceee267d44553f5d339afdd6cb705eabb3c88e7ff03e63f14c329b1b169dea42eb0ddc85c4cac32559f9'
                                alt='동물의 숲 누치 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/55bd2374cee49870dffa4cf8c7a8ff8102029495800868dd9cc06f422a819ea0e6e5f35ce3cc61f5575eaa5345932cb47863b231eb71ceee267d44553f5d339afdd6cb705eabb3c88e7ff03e63f14c329b1b169dea42eb0ddc85c4cac32559f9'
                                    alt='동물의 숲 누치 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'>24시간 출현</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>200</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%9E%A5%EC%96%B4'
                    title='장어'>장어</a><br><span class='wiki-size size-down-1'>ウナギ</span><br><span
                    class='wiki-size size-down-1'>Eel</span></div>
        </td>
        <td style='text-align:center;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='동물의 숲 장어 아이콘'
                    href='/jump/nq6ALgkIApemvmsk0OaoVz3JuwsnIUVBU7hmOz7GAarxVi6TSZApyTD8SiW%2Fxizs9Flc8RuCPnsZ9a84p6nj7lGu3vU2OCW4p7HyAjo4lb0%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='2374'
                                data-src='//w.namu.la/s/08159b9e7af140abac96850c19742b45c459b3d3f7fde2ef3f03e4846865beb109c3a1d28d434755449636477379616130dd096a53c494930d23e6b641ad642ba066fa737a2b7e33d3ff1f1930eab6186c5faeaf197dc102bf66aca83ef9c5ca'
                                alt='동물의 숲 장어 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/08159b9e7af140abac96850c19742b45c459b3d3f7fde2ef3f03e4846865beb109c3a1d28d434755449636477379616130dd096a53c494930d23e6b641ad642ba066fa737a2b7e33d3ff1f1930eab6186c5faeaf197dc102bf66aca83ef9c5ca'
                                    alt='동물의 숲 장어 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>6월~9월초</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>가늘고 길다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>2000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%EB%AC%B4%EC%A7%80%EA%B0%9C%EC%86%A1%EC%96%B4' title='무지개송어'>무지개송어</a><br><span
                    class='wiki-size size-down-1'>オオイワナ</span><br><span class='wiki-size size-down-1'>Rainbow trout</span>
            </div>
        </td>
        <td style='text-align:center;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='동물의 숲 무지개송어 아이콘'
                    href='/jump/P4jKEfZUSaB5CvF06EeMfodxMGnmUopNkLoGUUt6ni0VyLRzwA3kbkZP8AlSpA5Vyel2m3%2BYkIKCahgHt%2F598wOhP1K4B0rgU2c%2FMdw1Y50%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='2204'
                                data-src='//w.namu.la/s/8fa346f72921f88e1dc8f0b646e9d497aac242e74ef30b85f54dee2eb7c877742884d08b64fbaba8e99cf0498ccd5c11c466bee3a7bede0b5d815c5880a197e7707317715e3920780d3c61f13f80ce6e9a6f110d9dee2c582335118a577e115c'
                                alt='동물의 숲 무지개송어 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/8fa346f72921f88e1dc8f0b646e9d497aac242e74ef30b85f54dee2eb7c877742884d08b64fbaba8e99cf0498ccd5c11c466bee3a7bede0b5d815c5880a197e7707317715e3920780d3c61f13f80ce6e9a6f110d9dee2c582335118a577e115c'
                                    alt='동물의 숲 무지개송어 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>3월~6월<br>9월~11월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4시~9시,
                16시~21시(3월~6월)<br>4시~21시(9월~11월)</div>
        </td>
        <td>
            <div class='wiki-paragraph'>강</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 크다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>800</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='동물의 숲'>동물의 숲</a></div>
        </td>
        <td style='text-align:left;'>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EC%A0%84%EB%B3%B5#s-4'
                    title='전복'>오분자기</a><br><span class='wiki-size size-down-1'>トコブシ</span><br><span
                    class='wiki-size size-down-1'>Ear shell</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='동물의 숲 오분자기 아이콘'
                    href='/jump/P4jKEfZUSaB5CvF06EeMfodxMGnmUopNkLoGUUt6ni29e3CV3Oke2qzL7a%2FTe3Ur0dkpLlOpRTXFl4a2E96U1TlNG6aaIA52v3cOQXdRwbg%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='1385'
                                data-src='//w.namu.la/s/061fe35fed7d6b4be5a53ece56b32a63b512ad3fabe3671fa96ea051780cefc0dcc3d035346cfecfec78781e43a4a8cd082b3df4f5584315862fd8ebc3259e888fbe4a4b6422665814a81f974f81d1e97056f2389f960f498d7ae1a123d9f6e8'
                                alt='동물의 숲 오분자기 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/061fe35fed7d6b4be5a53ece56b32a63b512ad3fabe3671fa96ea051780cefc0dcc3d035346cfecfec78781e43a4a8cd082b3df4f5584315862fd8ebc3259e888fbe4a4b6422665814a81f974f81d1e97056f2389f960f498d7ae1a123d9f6e8'
                                    alt='동물의 숲 오분자기 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>1년 내내</div>
        </td>
        <td>
            <div class='wiki-paragraph'>16시~9시</div>
        </td>
        <td>
            <div class='wiki-paragraph'>마을, 섬</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>300</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%EB%B0%B1%ED%95%A9(%EC%A1%B0%EA%B0%9C)'
                    title='백합(조개)'>백합</a><br><span class='wiki-size size-down-1'>ハマグリ</span><br><span
                    class='wiki-size size-down-1'>Clam</span></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='동물의 숲 백합 아이콘'
                    href='/jump/P4jKEfZUSaB5CvF06EeMfodxMGnmUopNkLoGUUt6ni1bXr1R9Gi3lPm0dCfJ7MzbL9H6O2aUiTF7pxmKrr0cGShf1Dm407i8kzDZTcWAqBM%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='1539'
                                data-src='//ww.namu.la/s/25ce8b6b52c0563db62529351a7132b77394eed8b3e89de1e3164d5c3aabef71221e448d34a94a42869f659ec26fb7b517aaae7fc7473ebd33da6ef172390c24235e2f140c9a71f1719d1e1bff3dca31787b59a3eee5023a8af7e80535c9d647'
                                alt='동물의 숲 백합 아이콘'><noscript><img class='wiki-image'
                                    src='//ww.namu.la/s/25ce8b6b52c0563db62529351a7132b77394eed8b3e89de1e3164d5c3aabef71221e448d34a94a42869f659ec26fb7b517aaae7fc7473ebd33da6ef172390c24235e2f140c9a71f1719d1e1bff3dca31787b59a3eee5023a8af7e80535c9d647'
                                    alt='동물의 숲 백합 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>9월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>하루종일</div>
        </td>
        <td>
            <div class='wiki-paragraph'>마을</div>
        </td>
        <td>
            <div class='wiki-paragraph'>약간 작다</div>
        </td>
        <td>
            <div class='wiki-paragraph'>300</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    <tr>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' href='/w/%ED%84%B8%EA%B2%8C'
                    title='털게'>털게</a><br><span class='wiki-size size-down-1'>ケガニ</span><br><span
                    class='wiki-size size-down-1'>Horsehair crab</span>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal' title='동물의 숲 털게 아이콘'
                    href='/jump/P4jKEfZUSaB5CvF06EeMfodxMGnmUopNkLoGUUt6ni3m5gqkMmGgAoRzLZbUlfcYM7QGuRgC%2FN3ob9HuhhsdaVPZ%2BFRsA1q5uJTreOSBcIE%3D'
                    rel='nofollow'><span class='wiki-image-align-normal'><span class='wiki-image-wrapper'><img
                                class='wiki-image-space'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'><img
                                class='wiki-image wiki-image-loading'
                                src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+'
                                data-filesize='3056'
                                data-src='//w.namu.la/s/b2f5cebcced0640f4cbb3bc030d572e96a9eea280649a6bb020e4c33bb87480223b58834f93881d938550a6da8154ac14ddece59a9d8253f13b82fe7c70457de95fecab0e589b56f03def38f326ffcffc2d70c398e5fb1094544b5cdd804931f'
                                alt='동물의 숲 털게 아이콘'><noscript><img class='wiki-image'
                                    src='//w.namu.la/s/b2f5cebcced0640f4cbb3bc030d572e96a9eea280649a6bb020e4c33bb87480223b58834f93881d938550a6da8154ac14ddece59a9d8253f13b82fe7c70457de95fecab0e589b56f03def38f326ffcffc2d70c398e5fb1094544b5cdd804931f'
                                    alt='동물의 숲 털게 아이콘'></noscript></span></span></a>
            </div>
        </td>
        <td>
            <div class='wiki-paragraph'>11월~4월</div>
        </td>
        <td>
            <div class='wiki-paragraph'>하루종일</div>
        </td>
        <td>
            <div class='wiki-paragraph'>마을</div>
        </td>
        <td>
            <div class='wiki-paragraph'>중간</div>
        </td>
        <td>
            <div class='wiki-paragraph'>4000</div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
        <td>
            <div class='wiki-paragraph'><a class='wiki-link-internal'
                    href='/w/%ED%8A%80%EC%96%B4%EB%82%98%EC%99%80%EC%9A%94%20%EB%8F%99%EB%AC%BC%EC%9D%98%20%EC%88%B2'
                    title='튀어나와요 동물의 숲'>튀어나와요 동물의 숲</a></div>
        </td>
    </tr>
    `.trimAllLine();

    static fromName = (name: string): Fish => {
        return new FishData().getFishs().filter((fish: Fish) => fish.name === name)[0];
    }

    getFishs = (): Array<Fish> => {
        if (BaseKClass.vm.fishs.isNotEmpty()) return BaseKClass.vm.fishs;
        const fishs = [];
        const cut = (string: string) => string.split('>')[1].split('<')[0];
        // fishs.push(new Fish('여자친구', 'https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F202008%2F20200818162006934.jpg', '', '', '대한민국', '', ''));
        FishData.HTML.split('<tr>').forEach((fishHtml: string) => {
            if (fishHtml.contains('wiki-paragraph')) {
                const data = fishHtml.split('wiki-paragraph');
                let name = data[1].replace('<strong>', '').replace('<u>', '');
                if (cut(name).isBlank()) {
                    name = cut(name.split('title')[1]);
                } else {
                    name = cut(name);
                }
                const imageUrl = `https:${fishHtml.split(`data-src='`)[1].split(`'`)[0]}`;
                const date = cut(data[3]);
                let time = '';
                let locate = '';
                let size = '';
                let money = '';
                if (fishHtml.contains(`<td colspan='2'>`)) {
                    time = cut(data[4]);
                    locate = cut(data[5]);
                    size = '알 수 없음';
                    money = cut(data[6]);
                } else {
                    if (cut(data[5]).contains('시')) {
                        time = cut(data[5]);
                        locate = cut(data[6]);
                        size = cut(data[7]).replace('(등지느러미)', '');
                        money = cut(data[8]);
                    } else {
                        time = cut(data[4]);
                        locate = cut(data[5]);
                        size = cut(data[6]).replace('(등지느러미)', '');
                        money = cut(data[7]);
                    }
                }
                const fish = new Fish(name, imageUrl, date, time, locate, size, money);
                fishs.push(fish);
            }
        });
        BaseKClass.vm.fishs = fishs;
        return BaseKClass.vm.fishs;
    }
}