import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';



const Slider = () => {

const sliderProducts=useLoaderData();
const {name}=useParams()
console.log(sliderProducts);
  const [productBrand,setproductBrand]=useState(sliderProducts);
const [bannerImg,setBannerImg]=useState({});
const [notFound,setNotFound]=useState(null);



useEffect(()=>{
  if(sliderProducts.length == 0){
    setNotFound('No Product Available')
  }

  const matchData= sliderProducts?.find(item=> item.brandname == name );
  setBannerImg(matchData)
  console.log(matchData);

},[name,sliderProducts])

    return (
      
      <div>
<div className="carousel h-[500px] w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/HgGdszz/car-1.webp" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/fM2mfrC/car-2.webp" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/L5KZDFJ/car-3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/L5KZDFJ/car-3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      </div>
    );
};

export default Slider;