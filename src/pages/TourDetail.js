import React, { useEffect,useState } from 'react';
import '../css/common.css';
import Keyword from '../components/Keyword';
import Itinerary from './../components/Itinerary';
import { useParams } from 'react-router-dom';
import MainImage from '../components/MainImage';
import MeetInfo from '../components/MeetInfo';
import ServiceGuide from '../components/ServiceGuide';
import TourIntro from './../components/TourIntro';
import Loading from '../components/Loading';
import { useDispatch ,useSelector } from "react-redux";
import { tourAction } from "../redux/actions/tourAction";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,

    },
    
  };

const TourDetail = () => {

    const dispatch = useDispatch();
    
    const {product_id} = useParams();
    const {Detail,loading} = useSelector(state => state.tour );
    const [mainImageUrl,setMainImageUrl] = useState();

    const handleMainImageChange = (e) => {
       
        setMainImageUrl(e);
     
    }

    useEffect(() => {

         dispatch(tourAction.getTourDetailInfo(product_id));    

         
     },[product_id]);


    if (loading) {               
        return (<Loading />);
    } 

  return (
    <>
    <div id="container" className="container">

        <div className="contentsWrap detail newTypesub">
               
               <section className="tour">
                <header>

                <div className="imageContainer" >
                    {
                        Detail.productInDetail.ProductImages &&

                        <ul className="image">
                        {
                            mainImageUrl ?

                            // <MainImage  url={Detail.productInDetail.ProductImages[0].ImageURL} />
                            <MainImage  url={mainImageUrl}  />
                            :
                            <MainImage  url={Detail.productInDetail.ProductImages[0].ImageURL}  />
                            // Detail.productInDetail.ProductImages.map( (item,index) => (<MainImage key={index} url={item.ImageURL} />) )
                        }                                      
                        </ul>
                    }
                

                    
                    {
                        Detail.productInDetail.ProductImages &&
                     
                       
                        <Carousel 
                            responsive={responsive} 
                            className="thumbnail" 
                            minimumTouchDrag={80}
                            
                        >
                        {/* <ul className="thumbnail"> */}
                        {
                        
                            Detail.productInDetail.ProductImages.map( (item,index) => (<MainImage key={index} url={item.ThumbURL} oldUrl ={item.ImageURL} handleMainImageChange = {handleMainImageChange}  />) )
                                
                        }                                       
                        {/* </ul> */}
                        </Carousel>
                        
                     
                    } 
                </div>
                    
                    <dl className="itemInfo">
                    <dd className="code">
                        <span>상품코드</span>
                        <strong>{Detail.productInDetail.ProductCode}</strong>
                    </dd>
                    <dt>{Detail.ProductName}</dt>
                    <dd className="keyword"> 
                        {       
                            Detail.productInDetail.Keywords.split(',').map((item,index) => ( <Keyword key={index} item = {item}/>))                            
                        }                                            
                    </dd>
                    <dd className="inline both top mt-10">
                        <div className="left">
                        <p className="grade"><span className="hide">평점</span><span>{Detail.productInDetail.Rating}</span></p>
                        <p className="epilogue"><span className="hide">후기</span><span>{Detail.productInDetail.Reviews}</span></p>
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
                            <dd>{Detail.productInDetail.MeetingPointName}</dd>
                            </dl>
                            <dl className="w50p">
                            <dt>투어일정</dt>
                            <dd>{Detail.productInDetail.TourDays}일</dd>
                            </dl>
                        </li>
                        <li>
                            <dl className="w50p">
                            <dt>종료장소</dt>
                            <dd>{Detail.productInDetail.TourEndPointName}</dd>
                            </dl>
                            <dl className="w50p">
                            <dt>최소 행사인원</dt>
                            <dd>{Detail.productInDetail.AvailableMinPerson}명</dd>
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
                        </ul>
                    </article>
                </div>        
                   
                <ul className="detail">
                    { 
                        Detail.productInDetail.ProductContents &&
                        <li id="tab02">
                            {  
                                Detail.productInDetail.ProductContents.filter(item => item.ContentType === '040100').map( (item,index) => (<TourIntro key={index} item={item} />) )
                            }
                        </li>
                    }    
               
                    { 
                        Detail.productInDetail.ProductContents &&
                        <li id="tab03">
                            <header><h2>미팅정보</h2></header>
                            <section>
                                <article>
                                    <ul class="tableStyle meetinfo">
                                    {               
                                        
                                        Detail.productInDetail.ProductContents.filter(item => item.ContentType === '040901').map( (item,index) => (<MeetInfo key={index} item={item} />) )
                                    
                                    }                      
                                    </ul>
                                </article>
                            </section>
                        </li>
                    }

                    { 
                        Detail.productInDetail.ProductContents &&
                        <li id="tab04">               
                            {                  
                                
                                Detail.productInDetail.ProductContents.filter(item => item.ContentType === '040103').map( (item,index) => (<ServiceGuide key={index} item={item} />) )
                                
                            }                          
                            
                        </li>
                    }
                
                    {
                        Detail.productInDetail.ProductItinerarys &&
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
                                        Array.from(Array(Detail.productInDetail.TourDays), (item,index) => <Itinerary key={index} day={index + 1} items={Detail.productInDetail.ProductItinerarys.sort((a,b) => {
                                            return b.seq - a.seq;
                                        }).filter(item => item.Day === parseInt(index + 1) )

                                            // items.sort((a,b) => {
                                            //     return b.seq - a.seq;
                                            // }).filter(item => item.Day === parseInt(day) )
                                        
                                        }  /> )                                
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