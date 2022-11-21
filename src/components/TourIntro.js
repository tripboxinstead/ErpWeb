import React from 'react'
import Parser from 'html-react-parser'; 

const TourIntro = ({item}) => {
  return (
    <>
        <header><h2>투어 소개</h2></header>
        <section>
            <article>
            <p style={{padding :'10px'}}>
                {Parser(item.ContentTag)}
                {/* <p style={{padding :'10px'}}>{Parser(item.ContentTag)}</p>  */}
            </p>
            {/* <button type="button" class="more">상품설명 더보기</button> */}
            </article>
        </section>
    </>
  )
}

export default TourIntro