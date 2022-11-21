import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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


const MainImageCarousel =  ({url,oldUrl,handleMainImageChange}) => {
  
    const [oUrl, setOurl] = useState(oldUrl);

    const handleImageView = (e) => {
    
      e.preventDefault();
      handleMainImageChange(oUrl);
  
    }
  
    return (
        <Carousel>
            <li><img src={url} width="" height="" alt="" onClick={ () => handleMainImageChange(oUrl) }  /></li>
        </Carousel>
      
    )
  }


export default MainImageCarousel