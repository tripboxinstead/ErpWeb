import React,{useState} from 'react'

const MainImage = ({url,oldUrl,handleMainImageChange,isMain}) => {

  const [oUrl, setOurl] = useState(oldUrl);
  const [cursorInfo,setCursorInfo] = useState(isMain);

  const handleImageView = (e) => {
    // console.log(e.target.getAttribute('src'));
    // console.log(oUrl);
    e.preventDefault();
    
    //console.log(oUrl);
    handleMainImageChange(oUrl);

  }

  return (
           
    <li style={{margin:"1px",   cursor:"Pointer" } }><img src={url} width="180px" height="180px" alt="" onClick={ () => handleMainImageChange(oUrl) }  /></li>
   
    
    
  )
}

export default MainImage