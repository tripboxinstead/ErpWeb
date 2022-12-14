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
                            <MainImage  url={mainImageUrl} isMain="Default" />
                            :
                            <MainImage  url={Detail.productInDetail.ProductImages[0].ImageURL} isMain="Default"   />
                            // Detail.productInDetail.ProductImages.map( (item,index) => (<MainImage key={index} url={item.ImageURL} />) )
                        }                                      
                        </ul>
                    }
                

                    
                    {
                        Detail.productInDetail.ProductImages &&
                     
                       
                        <Carousel 
                            responsive={responsive} 
                            className="thumbnail" 
                            swipeable={true}
                            arrows={false}
                            minimumTouchDrag={100}
                            itemClass="carousel-item-padding-40-px"
                            // focusOnSelect={true}
                            
                        >
                        {/* <ul className="thumbnail"> */}
                        {
                        
                            Detail.productInDetail.ProductImages.map( (item,index) => (<MainImage key={index} isMain="Pointer"  url={item.ThumbURL} oldUrl ={item.ImageURL} handleMainImageChange = {handleMainImageChange}  />) )
                                
                        }                                       
                        {/* </ul> */}
                        </Carousel>
                        
                     
                    } 
                </div>
                    
                    <dl className="itemInfo">
                    <dd className="code">
                        <span>????????????</span>
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
                        <p className="grade"><span className="hide">??????</span><span>{Detail.productInDetail.Rating}</span></p>
                        <p className="epilogue"><span className="hide">??????</span><span>{Detail.productInDetail.Reviews}</span></p>
                        </div>
                        <div className="right">
                        {/* <button type="button" class="btn_map">????????????</button> */}
                        </div>
                    </dd>
                    <dd>
                        <ul className="tableStyle">
                        <li>
                            <dl className="w50p">
                            <dt>????????????</dt>
                            <dd>{Detail.productInDetail.MeetingPointName}</dd>
                            </dl>
                            <dl className="w50p">
                            <dt>????????????</dt>
                            <dd>{Detail.productInDetail.TourDays}</dd>
                            </dl>
                        </li>
                        <li>
                            <dl className="w50p">
                            <dt>????????????</dt>
                            <dd>{Detail.productInDetail.TourEndPointName}</dd>
                            </dl>
                            <dl className="w50p">
                            <dt>?????? ????????????</dt>
                            <dd>{Detail.productInDetail.AvailableMinPerson}???</dd>
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
                                <p><a href="#tab02">?????? ??????</a></p>
                            </li>

                            <li>
                                <p><a href="#tab03">????????????</a></p>
                            </li>

                        </ul>

                        <ul className="itemList">

                            <li>
                                <p><a href="#tab04">????????????</a></p>
                            </li>

                            <li>
                                <p><a href="#tab05">????????????</a></p>
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
                            <header><h2>????????????</h2></header>
                            <section>
                                <article>
                                    <ul className="tableStyle meetinfo">
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
                                    <h2>????????????</h2>
                                    {/* <button type="button" class="btn_map_small">????????????</button> */}
                                </div>
                                </header>
                                <section className="schedule">
                                <ul className="scheduleWrap">
                                    {
                                        Array.from(Array(parseInt(Detail.productInDetail.TourDays.replace('???',''))), (item,index) => <Itinerary key={index} day={index + 1} items={Detail.productInDetail.ProductItinerarys.sort((a,b) => {
                                            return b.seq - a.seq;
                                        }).filter(item => item.Day === parseInt(index + 1) )

                                      

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