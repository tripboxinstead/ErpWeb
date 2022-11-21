import React,{useState} from 'react'

const MainImage = ({url,oldUrl,handleMainImageChange}) => {

  const [oUrl, setOurl] = useState(oldUrl);

  const handleImageView = (e) => {
    // console.log(e.target.getAttribute('src'));
    // console.log(oUrl);
    e.preventDefault();
    
    //console.log(oUrl);
    handleMainImageChange(oUrl);

  }

  return (
    <li><img src={url} width="" height="" alt="" onClick={ () => handleMainImageChange(oUrl) }  /></li>
  )
}

export default MainImage