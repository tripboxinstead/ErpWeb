import React,{useEffect,useState} from 'react'
import TourIntro from './TourIntro';

const ItineraryAllDay = ({day,items}) => {

    const [newItem, setNewItem] = useState([]);

      useEffect (() => {

        async function  division  (arr, number)  {
        
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

        division(items,5);

      },[items,day])


  return (
    <>
       
        <div class="summaryWrap">
             {
                
                 newItem.length > 0 && newItem.map((Mainitem,index) => {
                    return (
                        
                        
                        <ul key={index}>
                            {
                                Mainitem.length > 0 && Mainitem.map((subItems, sIndex) => {                      
                                   return  <li key={sIndex} class="tour"><p><span>{ !subItems.PlaceName ? subItems.Title : subItems.PlaceName}</span></p></li>
                                })
                            }
                    
                        </ul>
                        
                    )
             })}
    
        </div>

       

    </>
  )
}

export default ItineraryAllDay