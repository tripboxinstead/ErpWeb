import React from 'react'
import Parser from 'html-react-parser'; 

const MeetInfo = ({item}) => {
  return (
    <li>
        <dl>
        <dt><img src="images/icon_ok.png" alt="" />{item.ContentTitle}</dt>
        <dd>
             <p>{Parser(item.Content.replace(/\\r\\n|\\n|\\r/gm,"<br>"))}</p> 
            {/* <p>{Parser(`<b>ddddd</b>`)}</p>  */}
        </dd>
        </dl>
    </li>
  )
}

export default MeetInfo