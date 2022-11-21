import React from 'react'
import Util from '../helpers/Util';
import ImageSide from './ImageSide';

const ItineraryTour = ( {items,day}) => {

  return (
    <>

        <li>
            <header>
             
                <dl>
                <dt><span>{items.Title}</span></dt>
                <dd><img src="images/icon_clock.png" width="" height="" alt="" />{items.TourStart} ~ {items.TourEnd} (약 {Util.duration(items.Duration)} 소요)</dd>
                </dl>
            </header>
            <article>
                <p>
                {items.Desc}
                </p>
                {/* <p class="info lightgrey mt-2">※ 현지 기상상황에 따라 후지산 조망이 어려울 수 있습니다.</p> */}
            </article>
            
            {/* {
              
              items.ItineraryImages &&
              <div style={{width:'100%'}} ><ImageSide items ={items.ItineraryImages}  /> </div>
                
              } */}
              
              {/* {items.ItineraryImages && items.ItineraryImages.map((item,index) =>  ( <ItineraryImages key={index} url = {item.ImageURL} day= {index}  />))     } */}
            
             
            <div className="detailmessage">
                <article>
                <header>{items.PlaceName}</header>
                { 

                  items.ItineraryImages && <ImageSide items ={items.ItineraryImages} day={day}  />
                  
                  // items.ItineraryImages &&
                 
                 
                  // <Carousel  responsive={responsive} className="imageContainer"    >       
                  // {        
                               
                  //       //  item.ItineraryImages.map((item,index) =>  {
                          
                  //       //     return   <div key={index}  > <img src={item.ImageURL} width="" height="" alt="" />   </div>
                          
                  //       //   }) 

                  //          <div>dddddd</div>                 
                  //       // items.ItineraryImages.map((item,index) =>  ( <ItineraryImages key={index} url = {item.ImageURL} day= {index}  />))                              
                  // }
                  // </Carousel> 
                                   
                 
                }
                <p>점검중2</p>
               
                </article>
            </div>

            {
                items.OptionItinerarys &&
                <div className="option">                    
                    <p>선택가능한 <strong>{items.OptionItinerarys.length}</strong>개의 일정이 있습니다.</p>                
                </div>
            }
        </li>
        
   
    </>
  )
}

export default ItineraryTour