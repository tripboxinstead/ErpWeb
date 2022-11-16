import React from 'react'

const ItineraryTourEtc = () => {
  return (
    <>
     <ul class="tourEtc">
        <li class="bed" style= {{ backgroundImaged: `url('images/icon_bed.png')` }}>
        <header>
            <dl>
            <dt><span>Hotel New Otani Tokyo the Main (5성급) 또는 Keio Plaza Hotel Tokyo (5성급)</span></dt>
            </dl>
            <p class="info">※ 숙박은 출발 일주일전 홈페이지에 알려드립니다.</p>
        </header>
        </li>
        <li class="food" style= {{ backgroundImage: `url('images/icon_meal.png')` }}>
        <article>
            <dl>
            <dt><span>[조식] 호텔식</span></dt>
            <dd>뷔페식 api 정보가 없어요</dd>
            </dl>
            <dl>
            <dt><span>[중식] 현지식</span></dt>
            <dd>api 정보가 없어요 에도시대부터 스모 선수들이 체력 보충을 위해 즐겨먹던 음식입니다. 냄비에 해산물, 고기, 완자, 채소 등을 넣고 담백하게 끓여 새콤한 폰즈 소스에 찍어 먹는 국물요리로, 다양한 재료를 푸짐하게 즐기실 수 있습니다. </dd>
            </dl>
            <dl>
            <dt><span>[석식] 특식</span></dt>
            <dd>api 정보가 없어요 특별식에 대한 설명이 좌라락 들어갑니다.</dd>
            </dl>
        </article>
        </li>
       
    </ul>
    </>
  )
}

export default ItineraryTourEtc