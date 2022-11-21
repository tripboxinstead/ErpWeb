import React from 'react'
import Parser from 'html-react-parser'; 

const MeetInfo = ({item}) => {

  
  return (
    
       
        <li>
            <dl>
            <dt><img src="images/icon_ok.png" alt="" />{item.ContentTitle}</dt>
            <dd>
                {/* <p>{Parser(item.ContentTag.replace(/\\r\\n|\\n|\\r/gm,"<br>"))}</p>  */}
                <p style={{padding :'10px'}}>{Parser(item.ContentTag)}</p> 
                {/* <p>{Parser(`<b>ddddd</b>`)}</p>  */}
            </dd>
            </dl>
        </li>
        
    
  )
}

export default MeetInfo