import React , {useState,useEffect} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ItineraryImages from './ItineraryImages';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  },
  
};

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
      window.removeEventListener("resize", () => {
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

           
             {/* <Carousel responsive={responsive}   >
              {  
               
                   items.map((item,index) =>  (  <ItineraryImages key={index} url = {item.ImageURL} day= {day}  /> ))   
               
                
                
              }
            </Carousel>  */}
            
        </div>

      }
    </>

  )
}

export default ImageSide
