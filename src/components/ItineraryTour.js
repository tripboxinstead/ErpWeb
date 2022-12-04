import React,{useState,useRef,useEffect} from 'react'
import Util from '../helpers/Util';
import ImageSide from './ImageSide';

import { motion } from "framer-motion"


const ItineraryTour = ( {items,day}) => {

  const [width,setWidth] = useState(500);
  const ref = useRef()

  useEffect( () => {

    if (ref && ref.current) {
      const tmp = ref.current?.scrollWidth - ref.current?.offsetWidth;
      if (tmp === 0) {
        setWidth(() => 500);
      } else {
        setWidth(() => tmp);
      }

      console.log(items);

  }
    
    // setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

  },[]);

  return (
    <>


        <li>
            <header>
             
                <dl>
                <dt><span>{items.Title}</span></dt>
                <dd><img src={items.PlaceIconURL} width="" height="" alt="" />{items.TourStart} ~ {items.TourEnd} (약 {Util.duration(items.Duration)} 소요)</dd>
                </dl>
            </header>
            <article>
                <p>
                {items.Desc}
                </p>
                {/* <p class="info lightgrey mt-2">※ 현지 기상상황에 따라 후지산 조망이 어려울 수 있습니다.</p> */}
            </article>
            
            {
              items.RelatedPlaces &&
              (
                items.RelatedPlaces.map((item,index) => {
                  return (
                    <div className="detailmessage" key={index}>
                      <article>
                        <header>{item.PlaceName}</header>

                        {
                          item.PlaceImages && 
                          <div class="imageContainer">
                            <ul>
                              <li> <img src = {item.PlaceImages[0].ThumbURL} alt= "" key={item} /> </li>
                            </ul>
                          </div>
                        }

                        <p>{item.PlaceDesc}</p>
            
                        </article>
                    </div>
                  )
                })
              )
            }
         
            {/* <div className="detailmessage">
                <article>
                <header>{items.PlaceName}</header>
                                
                                  
                {
                  items.ItineraryImages &&

                  
                  <motion.div ref={ref} className="carousel" whileTap={"grabbing"}>
                    <motion.div 
                      drag="x"
                      dragConstraints={{ right : 0,left: -width }}
                      className='inner-carousel'
                    >

                      { 
                        items.ItineraryImages.map((item,index) => {
                          return (
                            <motion.div className="item">
                              <img src = {item.ImageURL} alt= "" key={item} />
                            </motion.div>
                          )

                        })
                      }
                      
                    </motion.div>
                  </motion.div>
                }
                

                <p>점검중2</p>
            
                </article>
            </div> */}
            
          
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