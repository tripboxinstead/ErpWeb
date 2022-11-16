import React from 'react'
import ItineraryAllDay from './ItineraryAllDay';
import ItineraryTour from './ItineraryTour';
import ItineraryTourEtc from './ItineraryTourEtc';

const Itinerary = ({day,items}) => {

    console.log("day",day);
    console.log("items",items);

    console.log("items",items.length);
    console.log("items",items[0].day);

    if (items.length == 0) {
        return;
    }
     

  return (
    <>
         <li>
            <header>
                <h3>
                <p><span>{day}일차</span><strong></strong></p>
                <img src="images/ic_arrow_bottom.svg" width="" height="" alt="" />
                </h3>
            </header>
            <article class="open" style={{display : "block" }}>
                <h4>전체 일정</h4>
                <div class="summaryWrapbox">
                {
                    items &&
                   
                    <ItineraryAllDay items={items.sort((a,b) => {
                            return b.seq - a.seq;
                        }).filter(item => item.Day === parseInt(day) && item.PlaceName !== ""   )}/>
                  
                    }
                  
               
                </div>
                <div class="detailWrap">
                <ul class="tour">
                {
                    items.length > 0 ?
                    items.sort((a,b) => {
                        return b.seq - a.seq;
                    }).filter(item => item.Day === parseInt(day) && item.LocationType !== "038002").map((item,index) => {                      
                        return <ItineraryTour key={index} item={item} />
                    }) : <p>no </p> 
                }
                </ul>
                <ItineraryTourEtc />
               

                </div>
            </article>
            </li>
    </>
  )
}

export default Itinerary