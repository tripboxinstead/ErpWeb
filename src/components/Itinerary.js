import React,{useEffect,useState} from 'react'
import ItineraryAllDay from './ItineraryAllDay';
import ItineraryTour from './ItineraryTour';
import ItineraryTourEtc from './ItineraryTourEtc';

const Itinerary = ({day,items}) => {

    // const [allDay, setAllDay] = useState(items.sort((a,b) => {
    //     return b.seq - a.seq;
    // }).filter(item => item.Day === parseInt(day) && !item.PlaceName    ))

   // const [dayInfo, setDayInfo] = useState()

    // const [allDay, setAllDay] = useState(items.sort((a,b) => {
    //     return b.seq - a.seq;
    // }).filter(item => item.Day === parseInt(day) ))


    
    // useEffect (() => {
        
    //     setDayInfo(day);


    // },[day,items])

    
    // if (items.length == 0) {
    //     return;
    // }


    // console.log("allday",allDay);

  return (
    <>
         <li>
            <header>
                <h3>
                <p><span>{day}일차</span><strong></strong></p>
                <img src="images/ic_arrow_bottom.svg" width="" height="" alt="" />
                </h3>
            </header>
            {/* <article class="open" style={{display : "block" }}> */}
            <article  >

                { 
                    items.length > 1 ?
                
                    <>
                        <h4>전체 일정</h4>
                        <div className="summaryWrapbox">
                        
                            <ItineraryAllDay day={day} items={items.sort((a,b) => {
                                    return b.seq - a.seq;
                                }).filter(item => item.Day === parseInt(day)    )}/>
       
                        </div>
                    </>
                    : null                
                }

                <div className="detailWrap">
                <ul className="tour">
                {
                    items.length > 0 ?
                    items.sort((a,b) => {
                        return b.seq - a.seq;
                    }).filter(item => item.Day === parseInt(day) && item.LocationType !== "038002").map((item,index) => {                      
                        return <ItineraryTour key={index} items={item} day={day} />
                    }) : <p>no </p> 
                }
                </ul>
                
                {items && <ItineraryTourEtc items = {items} day={day}  /> }               

                </div>
            </article>
            </li>
    </>
  )
}

export default Itinerary