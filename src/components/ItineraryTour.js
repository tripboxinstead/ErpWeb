import React,{useEffect} from 'react'
import ItineraryImages from './ItineraryImages';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Util from '../helpers/Util';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const ItineraryTour = ( {item}) => {

    console.log("ItineraryTour", item)

  return (
    <>

        <li>
            <header>
                <dl>
                <dt><span>{item.Title}</span></dt>
                <dd><img src="images/icon_clock.png" width="" height="" alt="" />{item.TourStart} ~ {item.TourEnd} (약 {Util.duration(item.Duration)} 소요)</dd>
                </dl>
            </header>
            <article>
                <p>
                {item.Desc}
                </p>
                {/* <p class="info lightgrey mt-2">※ 현지 기상상황에 따라 후지산 조망이 어려울 수 있습니다.</p> */}
            </article>
            <div class="detailmessage">
                <article>
                <header>{item.PlaceName}</header>
                <div class="imageContainer">
                    <ul>
                        {
                            item.ItineraryImages &&  item.ItineraryImages.map((item,index) =>   <ItineraryImages key={index} item={item} /> ) 
                        }
                    </ul>
                    
                </div>
                <p>- api 어디서 뭘 가져오지?</p>
                </article>
            </div>
            {
                item.OptionItinerarys &&
                <div class="option">                    
                    <p>선택가능한 <strong>{item.OptionItinerarys.length}</strong>개의 일정이 있습니다.</p>                
                </div>
            }
        </li>
        
   
    </>
  )
}

export default ItineraryTour