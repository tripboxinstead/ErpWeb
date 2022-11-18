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
import Loading from '../components/Loading';


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
               // console.error("ttt",e);
            }
        }

        handleGetProductInDetail();

    },[product_id,[]]);


    if (loading) {
        
        return (<Loading />);
    }

    if (!productInDetail) {
        //console.log("error");
        return null;
    }


  return (
    <>
        <div id="container" className="container">
          
            <div className="contentsWrap detail newTypesub">
               
                <section className="tour">
                <header>

                <div className="imageContainer">
                <ul className="image">
                    {
                        productInDetail.data.ProductImages && productInDetail.data.ProductImages.map( (item,index) => (<MainImage key={index} url={item.ImageURL} />) )
                    }                                      
                </ul>
                {
                    productInDetail.data.ProductImages &&
                    <ul className="thumbnail">
                        {
                            productInDetail.data.ProductImages.map( (item,index) => (<MainImage key={index} url={item.ThumbURL} />) )
                        }                                       
                    </ul>
                }
                </div>
                  
                    <dl className="itemInfo">
                    <dd className="code">
                        <span>상품코드</span>
                        <strong>{productInDetail.data.ProductCode}</strong>
                    </dd>
                    <dt>{productInDetail.data.ProductName}</dt>
                    <dd className="keyword"> 
                        {       
                           productInDetail.data.Keywords.split(',').map((item,index) => ( <Keyword key={index} item = {item}/>))                            
                        }                                            
                    </dd>
                    <dd className="inline both top mt-10">
                        <div className="left">
                        <p className="grade"><span className="hide">평점</span><span>{productInDetail.data.Rating}</span></p>
                        <p className="epilogue"><span className="hide">후기</span><span>{productInDetail.data.Reviews}</span></p>
                        </div>
                        <div className="right">
                        {/* <button type="button" class="btn_map">지도보기</button> */}
                        </div>
                    </dd>
                    <dd>
                        <ul className="tableStyle">
                        <li>
                            <dl className="w50p">
                            <dt>미팅장소</dt>
                            <dd>{productInDetail.data.MeetingPointName}</dd>
                            </dl>
                            <dl className="w50p">
                            <dt>투어일정</dt>
                            <dd>{productInDetail.data.TourDays}일</dd>
                            </dl>
                        </li>
                        <li>
                            <dl className="w50p">
                            <dt>종료장소</dt>
                            <dd>{productInDetail.data.TourEndPointName}</dd>
                            </dl>
                            <dl className="w50p">
                            <dt>최소 행사인원</dt>
                            <dd>{productInDetail.data.AvailableMinPerson}명</dd>
                            </dl>
                        </li>
                        </ul>
                    </dd>
                    </dl>
                </header>
                <article>

                <div className="componentWrap menu tab">
                <article>
                
                    <ul className="itemList">
                    {/* <li class="on">
                        <p><a href="#tab01">상품설명</a></p>
                    </li> */}
                    <li>
                        <p><a href="#tab02">투어 소개</a></p>
                    </li>
                    <li>
                        <p><a href="#tab03">미팅정보</a></p>
                    </li>
                    </ul>
                    <ul className="itemList">
                    <li>
                        <p><a href="#tab04">이용안내</a></p>
                    </li>
                    <li>
                        <p><a href="#tab05">일정안내</a></p>
                    </li>
                    {/* <li>
                        <p><a href="#tab06">이용후기</a></p>
                    </li> */}
                    </ul>
                </article>
                </div>        
                    
                <ul className="detail">

                { 
                    productInDetail.data.ProductContents &&
                    <li id="tab02">
                        {  
                            productInDetail.data.ProductContents.filter(item => item.ContentType === '040100').map( (item,index) => (<TourIntro key={index} item={item} />) )
                        }
                    </li>
                }
                
                { 
                    productInDetail.data.ProductContents &&
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
                }

                { 
                    productInDetail.data.ProductContents &&
                    <li id="tab04">               
                        {                  
                            
                            productInDetail.data.ProductContents.filter(item => item.ContentType === '040103').map( (item,index) => (<ServiceGuide key={index} item={item} />) )
                            
                        }                          
                        
                    </li>
                }
                
                {
                    productInDetail.data.ProductItinerarys &&
                    <li id="tab05">
                            <header>
                            <div className="inline both">
                                <h2>일정안내</h2>
                                {/* <button type="button" class="btn_map_small">위치보기</button> */}
                            </div>
                            </header>
                            <section className="schedule">
                            <ul className="scheduleWrap">
                                {
                                    Array.from(Array(productInDetail.data.TourDays), (day,index) => <Itinerary key={index} day={index + 1} items={productInDetail.data.ProductItinerarys} />)                                
                                }
                                
                            </ul>
                            </section>
                    </li>
                }
                
                </ul>
                </article>
                </section>
               
             
            </div>
          
            </div>

    </>
  )
}

export default TourDetail