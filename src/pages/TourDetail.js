import React, { useEffect,useState } from 'react';
import '../css/common.css';
import api from '../api';
import Keyword from '../components/Keyword';
import Itinerary from './../components/Itinerary';
import { useParams } from 'react-router-dom';
import MainImage from '../components/MainImage';
import MeetInfo from '../components/MeetInfo';
import ServiceGuide from '../components/ServiceGuide';
import TourIntro from './../components/TourIntro';


const TourDetail = () => {

    const [productInDetail, setProductInDetail] = useState();
    const [loading, setLoading] = useState(true);
    const {product_id} = useParams();

    // 61176
    useEffect ( () => {

        async function handleGetProductInDetail() {
           
            try {
                const data = await api.post('/Order/GetProductInDetail', {
                            ProductID: product_id,
                            SearchDate: "2022-11-15",
                            Days: 1,
                            PAdult: 2,
                            ChildAges: "1,11" }
                        
                );

                setProductInDetail(data);
                setLoading(false);

            }
            catch(e) {
                console.error("ttt",e);
            }
        }

        handleGetProductInDetail();

    },[]);


    if (loading) {
        return;
    }


  return (
    <>
        <div id="container" class="container">
          
            <div class="contentsWrap detail newTypesub">
               
                <section class="tour">
                <header>

                <div class="imageContainer">
                <ul class="image">
                    {
                        productInDetail.data.ProductImages.map( (item,index) => (<MainImage key={index} url={item.ImageURL} />) )
                    }                                      
                </ul>
                {
                    productInDetail.data.ProductImages &&
                    <ul class="thumbnail">
                        {
                            productInDetail.data.ProductImages.map( (item,index) => (<MainImage key={index} url={item.ThumbURL} />) )
                        }                                       
                    </ul>
                }
                </div>
                  
                    <dl class="itemInfo">
                    <dd class="code">
                        <span>상품코드</span>
                        <strong>{productInDetail.data.ProductCode}</strong>
                    </dd>
                    <dt>{productInDetail.data.ProductName}</dt>
                    <dd class="keyword"> 
                        {       
                           productInDetail.data.Keywords.split(',').map((item,index) => ( <Keyword key={index} item = {item}/>))                            
                        }                                            
                    </dd>
                    <dd class="inline both top mt-10">
                        <div class="left">
                        <p class="grade"><span class="hide">평점</span><span>{productInDetail.data.Rating}</span></p>
                        <p class="epilogue"><span class="hide">후기</span><span>{productInDetail.data.Reviews}</span></p>
                        </div>
                        <div class="right">
                        {/* <button type="button" class="btn_map">지도보기</button> */}
                        </div>
                    </dd>
                    <dd>
                        <ul class="tableStyle">
                        <li>
                            <dl class="w50p">
                            <dt>미팅장소</dt>
                            <dd>{productInDetail.data.MeetingPointName}</dd>
                            </dl>
                            <dl class="w50p">
                            <dt>투어일정</dt>
                            <dd>{productInDetail.data.TourDays}일</dd>
                            </dl>
                        </li>
                        <li>
                            <dl class="w50p">
                            <dt>종료장소</dt>
                            <dd>{productInDetail.data.TourEndPointName}</dd>
                            </dl>
                            <dl class="w50p">
                            <dt>최소 행사인원</dt>
                            <dd>{productInDetail.data.AvailableMinPerson}명</dd>
                            </dl>
                        </li>
                        </ul>
                    </dd>
                    </dl>
                </header>
                <article>

                <div class="componentWrap menu tab">
                <article>
                
                    <ul class="itemList">
                    <li class="on">
                        <p><a href="#tab01">상품설명</a></p>
                    </li>
                    <li>
                        <p><a href="#tab02">투어 소개</a></p>
                    </li>
                    <li>
                        <p><a href="#tab03">미팅정보</a></p>
                    </li>
                    </ul>
                    <ul class="itemList">
                    <li>
                        <p><a href="#tab04">이용안내</a></p>
                    </li>
                    <li>
                        <p><a href="#tab05">일정안내</a></p>
                    </li>
                    <li>
                        <p><a href="#tab06">이용후기</a></p>
                    </li>
                    </ul>
                </article>
                </div>        
                    
                <ul class="detail">

                 
                <li id="tab02">
                    {  productInDetail.data.ProductContents.filter(item => item.ContentType === '040100').map( (item,index) => (<TourIntro key={index} item={item} />) )}
                </li>
                
                <li id="tab03">
                    <header><h2>미팅정보</h2></header>
                    <section>
                    <article>
                        <ul class="tableStyle meetinfo">
                        {                        
                            productInDetail.data.ProductContents.filter(item => item.ContentType === '040901').map( (item,index) => (<MeetInfo key={index} item={item} />) )
                        
                        }                      
                        </ul>
                    </article>
                    </section>
                </li>

                <li id="tab04">               
                    {                        
                            productInDetail.data.ProductContents.filter(item => item.ContentType === '040103').map( (item,index) => (<ServiceGuide key={index} item={item} />) )
                        
                    }                          
                    
                </li>
                
                <li id="tab05">
                        <header>
                        <div class="inline both">
                            <h2>일정안내</h2>
                            {/* <button type="button" class="btn_map_small">위치보기</button> */}
                        </div>
                        </header>
                        <section class="schedule">
                        <ul class="scheduleWrap">
                            {
                                Array.from(Array(productInDetail.data.TourDays), (day,index) => <Itinerary key={index} day={index + 1} items={productInDetail.data.ProductItinerarys} />)                                
                            }
                            
                        </ul>
                        </section>
                    </li>
                
                </ul>
                </article>
                </section>
               
             
            </div>
          
            </div>

    </>
  )
}

export default TourDetail