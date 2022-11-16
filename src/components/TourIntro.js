import React from 'react'

const TourIntro = ({item}) => {
  return (
    <>
        <header><h2>투어 소개</h2></header>
        <section>
            <article>
            <p>
                {item.Content}
            </p>
            {/* <button type="button" class="more">상품설명 더보기</button> */}
            </article>
        </section>
    </>
  )
}

export default TourIntro