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

    
    console.log("tt",items.filter((item) => item.Day === parseInt(day) && item.LocationType === "038002" ))


  return (
    <>
     <ul className="tourEtc">
            
        <li className="bed" style= {{ backgroundImaged: `url('images/icon_bed.png')` }}>
        <header>
            <dl>
            <dt>
                {
                    
                    items.filter((item) => item.Day === parseInt(day) && item.LocationType === "038002" ).map((item,index) =>                         
                        {

                            // return  <span key={index}>{item.PlaceName} 또는 Keio Plaza Hotel Tokyo (5성급)</span>
                            return  <span key={index}>{item.PlaceName}   </span>
                        }
                        
                    )                
                }
            </dt>
            </dl>
            
                 <p className="info">※ 숙박은 출발 일주일전 홈페이지에 알려드립니다.</p>
                
        </header>
        </li>
        
        <li className="food" style= {{ backgroundImage: `url('images/icon_meal.png')` }}>
        <article>
            <dl>
            <dt><span>[조식] {dayBreakFast ?? dayBreakFast}</span></dt>
            {/* <dd>점검중</dd> */}
            </dl>
            <dl>
            <dt><span>[중식] {dayLunch ?? dayLunch}</span></dt>
            {/* <dd>점검중 </dd> */}
            </dl>
            <dl>
            <dt><span>[석식]  {dayDinner ?? dayDinner}</span></dt>
            {/* <dd>점검중</dd> */}
            </dl>
        </article>
        </li>
       
    </ul>
    </>
  )
}

export default ItineraryTourEtc