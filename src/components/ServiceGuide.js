import React from 'react'
import MainImage from './MainImage'
import Parser from 'html-react-parser'; 


const ServiceGuide = ({item}) => {
  return (
    <>
        <header><h2>{item.ContentTitle}</h2></header> 
        <section>
        <article>
        <p>{Parser(item.Content.replace(/\\r\\n|\\n|\\r/gm,"<br>"))}</p> 
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
                    
            
                    <ul className="image">            
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