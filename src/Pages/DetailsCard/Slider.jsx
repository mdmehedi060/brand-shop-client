import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from 'react';



const Slider = () => {

const sliderProducts=useLoaderData();
  const [productBrand,setproductBrand]=useState(sliderProducts);
const [bannerImg,setBannerImg]=useState([]);
const [notFound,setNotFound]=useState(null);



useEffect(()=>{
  if(sliderProducts.length == 0){
    setNotFound('No Product Available')
  }

fetch('/category.json')
.then(res=>res.json())
.then(data=>{
  const matchData= data?.find(item=> item.name == productBrand[0].name );
  setBannerImg(matchData)
  console.log(matchData);
})

},[])

    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={sliderProducts.imageOne} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={sliderProducts.imageTwo} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={sliderProducts.imageThree}  className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        
        </div>
      
    );
};

export default Slider;