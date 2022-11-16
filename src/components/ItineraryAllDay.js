import React,{useEffect,useState} from 'react'
import TourIntro from './TourIntro';

const ItineraryAllDay = ({items}) => {

    const [newItem, setNewItem] = useState([]);

    const division = (arr, number) => {
        
        const length = arr.length;
        const divide = Math.floor(length / number) + (Math.floor( length % number ) > 0 ? 1 : 0);
        const newArray = [];
      
        for (let i = 0; i <= divide; i++) {
          // 배열 0부터 n개씩 잘라 새 배열에 넣기
          newArray.push(items.splice(0, number)); 
          //setNewItem(newItem => [...newItem,arr.splice(0, number)]) //.push(arr.splice(0, number)); 
        }
       
        setNewItem([...newArray]);

     
      }

      useEffect (() => {

        division(items,5);

      },[])

      useEffect (() => {

        division(items,5);

      },[items])

    //   if (newItem.length > 0) {
    //     return (   console.log('tq',newItem) );
    //   }


  return (
    <>
       
        <div class="summaryWrap">
             {
                
                 newItem.length > 0 && newItem.map((Mainitem,index) => {
                    return (
                        
                        <ul key={index}>
                            {
                                Mainitem.length > 0 && Mainitem.map((subItems, sIndex) => {                      
                                   return <li key={sIndex} class="tour"><p><span>{subItems.PlaceName}</span></p></li>
                                })
                            }
                    
                        </ul>
                    )
             })}
    
        </div>

        {/* <div class="summaryWrap">
        <ul>
             {
                
                items && items.map((Mainitem, index) => {
                    return (                         
                        <li class="tour"><p><span>이올라니 궁전1</span></p></li>
                         
                    )
               
             })
            
             }
               </ul>
    
        </div> */}

    </>
  )
}

export default ItineraryAllDay