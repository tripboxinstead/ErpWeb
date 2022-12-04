import React from 'react'
import MainImage from './MainImage'
import Parser from 'html-react-parser'; 


const ServiceGuide = ({item}) => {

    //console.log(item.ContentTag);

  return (
    <>
        <header><h2>{item.ContentTitle}</h2></header> 
        <section>
        <article>
        {/* <p>{Parser(item.ContentTag.replace(/\\r\\n|\\n|\\r/gm,"<br>"))}</p>  */}
            <p style={{padding :'10px',whiteSpace: "pre-wrap" }}>{Parser(item.ContentTag)}</p> 
        {
            item.ContentImages &&
            <div className="tripinfoImg">
                <div className="imageContainer">
                { 
                    item.ContentImages &&
                    
            
                    <ul className="image">            
                    {item.ContentImages.map((item,index) => ( <MainImage key={index} url={item.ImageURL} />))}
                    </ul>
                }

                { 
                    item.ContentImages &&
                    
            
                    <ul className="thumbnail">            
                    {item.ContentImages.map((item,index) => ( <MainImage key={index} url={item.ThumbURL} />))}
                    </ul>
                }

                
                </div>
            </div>
            
        }
        <br/>
        
        </article>
        </section>
    </>
  )
}

export default ServiceGuide