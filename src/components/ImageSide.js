import React , {useState,useEffect} from 'react'
import ItineraryImages from './ItineraryImages';



const ImageSide = ({items,day}) => {

    const [resize, setResize] = useState();
    const [value ,setValue] = useState(false);

    const handleOutput = () => {
     // console.log("gggg");
    }


  useEffect(() => {
    window.addEventListener("resize", () => {
      setResize(window.innerWidth);
    });

    const time = setTimeout(() => {
     // console.log(window.innerWidth);
      setResize(window.innerWidth);
      setValue(true);
    }, 0.0000000000000000001);

    return () => {
      window.removeEventListener("resize", ()    => {
        setResize(window.innerWidth);
      });

      clearTimeout(time);
    };
  }, [items]);

  handleOutput();

  return (
    <>
      { 

        items &&
      // <div className={  resize > 1400 ? "collapse navbar-collapse-show"  : "collapse navbar-collapse"} >
        <div className="imageContainer" >
          
          <ul>
           {items.map((item,index) =>  ( <ItineraryImages key={index} url = {item.ImageURL} day= {index}  /> ))  }
          
          </ul>
        
        </div>

      }
    </>

  )
}

export default ImageSide
