import React, {useState,useEffect} from 'react'

const ItineraryTourEtc = ({items,day}) => {


    const [breakFast, setBreakFast] = useState([]);
    const [dayBreakFast, setDayBreakFast] = useState('')
    const [dayLunch, setDayLunch] = useState('')
    const [dayDinner, setDayDinner] = useState('')
    const [hotels, setHotels] = useState([]);


    useEffect( () => {

        async function handleInfo() {
                    
            setBreakFast(items,...breakFast);

            let DayBreakFast =  breakFast.filter((item) => item.Day  === parseInt(day) ).map(item => item.DayBreakfast).filter((value, index, self) => self.indexOf(value) === index);
            let DayLunch =  breakFast.filter((item) => item.Day === parseInt(day) ).map(item => item.DayLunch).filter((value, index, self) => self.indexOf(value) === index);
            let DayDinner =  breakFast.filter((item) => item.Day === parseInt(day) ).map(item => item.DayDinner).filter((value, index, self) => self.indexOf(value) === index);
            //let Hotels =  breakFast.filter((item) => item.Day === parseInt(day) && item.LocationType === "038002" );

          
            //setHotels([...Hotels])
            setDayBreakFast(DayBreakFast[0]);
            setDayLunch(DayLunch[0]);
            setDayDinner(DayDinner[0]);

           //  console.log("g2",hotels);            
            // console.log("g1",DayBreakFast);            
            // console.log("gg",breakFast);
          }

          handleInfo();

    },[items])

    


  return (
    <>
     <ul class="tourEtc">
            
        <li class="bed" style= {{ backgroundImaged: `url('images/icon_bed.png')` }}>
        <header>
            <dl>
            <dt>
                {
                    items.filter((item) => item.Day === parseInt(day) && item.LocationType === "038002" ).map((item,index) =>                         
                        {

                            return  <span key={index}>{item.PlaceName} 또는 Keio Plaza Hotel Tokyo (5성급)</span>
                        }
                        
                    )
                
                }
            </dt>
            </dl>
            <p class="info">※ 숙박은 출발 일주일전 홈페이지에 알려드립니다.</p>
        </header>
        </li>
        
        <li class="food" style= {{ backgroundImage: `url('images/icon_meal.png')` }}>
        <article>
            <dl>
            <dt><span>[조식] {dayBreakFast}</span></dt>
            <dd>api 어디서 가져와야되죠..? erp상에는 이런 구조가 없는데요</dd>
            </dl>
            <dl>
            <dt><span>[중식] {dayLunch}</span></dt>
            <dd>api 어디서 가져와야되죠..? erp상에는 이런 구조가 없는데요 </dd>
            </dl>
            <dl>
            <dt><span>[석식]  {dayDinner}</span></dt>
            <dd>api 어디서 가져와야되죠..? erp상에는 이런 구조가 없는데요</dd>
            </dl>
        </article>
        </li>
       
    </ul>
    </>
  )
}

export default ItineraryTourEtc