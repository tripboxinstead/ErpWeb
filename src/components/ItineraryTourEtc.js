import React, {useState,useEffect} from 'react'

const ItineraryTourEtc = ({items,day}) => {


    const [breakFast, setBreakFast] = useState([]);
    const [dayBreakFast, setDayBreakFast] = useState('')
    const [dayLunch, setDayLunch] = useState('')
    const [dayDinner, setDayDinner] = useState('')
    //const [hotelInfo, setHotelInfo] = useState({})

    useEffect( () => {

        async function handleInfo() {
                    
            setBreakFast(items,...breakFast);

            let DayBreakFast =  breakFast.filter((item) => item.Day  === parseInt(day) ).map(item => item.DayBreakfast).filter((value, index, self) => self.indexOf(value) === index);
            let DayLunch =  breakFast.filter((item) => item.Day === parseInt(day) ).map(item => item.DayLunch).filter((value, index, self) => self.indexOf(value) === index);
            let DayDinner =  breakFast.filter((item) => item.Day === parseInt(day) ).map(item => item.DayDinner).filter((value, index, self) => self.indexOf(value) === index);
           // let hotelinfo = breakFast.filter((item) => item.Day === parseInt(day) && item.LocationType === "038002" )
           
            setDayBreakFast(DayBreakFast[0]);
            setDayLunch(DayLunch[0]);
            setDayDinner(DayDinner[0]);
           // setHotelInfo(items.filter((item) => item.Day === parseInt(day) && item.LocationType === "038002" ))

     
          }

          handleInfo();

    },[items,day,[]])

    
    //console.log("tt",items.filter((item) => item.Day === parseInt(day) && item.LocationType === "038002" ))


  return (
    <>
     <ul className="tourEtc">
        {
            items.filter((item) => item.Day === parseInt(day) && item.LocationType === "038002" ).length > 0 ?
            <li className="bed" style= {{ backgroundImaged: `url('images/icon_bed.png')` }}>
            <header>
                <dl>
                <dt>
                    {
                        
                        items.filter((item) => item.Day === parseInt(day) && item.LocationType === "038002" ).map((item,index) =>                         
                            {

                                // return  <span key={index}>{item.PlaceName} ?????? Keio Plaza Hotel Tokyo (5??????)</span>
                                return  <span key={index}>{item.PlaceName}   </span>
                            }
                            
                        )                
                    }
                </dt>
                </dl>
                    {
                        items.filter((item) => item.Day === parseInt(day) && item.LocationType === "038002" ).length > 0 ?
                        <p className="info">??? ????????? ?????? ???????????? ??????????????? ??????????????????.</p>
                        : 
                        null
                    }
                    
            </header>
            </li> 
            : 
            null
        }
        
        <li className="food" style= {{ backgroundImage: `url('images/icon_meal.png')` }}>
        <article>
            <dl>
            <dt><span>[??????] {dayBreakFast ?? dayBreakFast}</span></dt>
            {/* <dd>?????????</dd> */}
            </dl>
            <dl>
            <dt><span>[??????] {dayLunch ?? dayLunch}</span></dt>
            {/* <dd>????????? </dd> */}
            </dl>
            <dl>
            <dt><span>[??????]  {dayDinner ?? dayDinner}</span></dt>
            {/* <dd>?????????</dd> */}
            </dl>
        </article>
        </li>
       
    </ul>
    </>
  )
}

export default ItineraryTourEtc