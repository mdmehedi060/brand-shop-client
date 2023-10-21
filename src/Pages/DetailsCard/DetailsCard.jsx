import { Link } from "react-router-dom";
import Slider from "./Slider";
import { useState } from 'react';
import { useEffect } from 'react';



const DetailsCard = ({product}) => {
 
  const {_id,photo,name,brandname,type,price,description,rating} = product;

 

  return (
    <div>
     
     {/* <div>
        {
banners.map(banner=><Slider key={banner.idx} banner={banner}></Slider>)
        }
     </div> */}
      <div >
      <div className="card m-4 w-96 bg-base-100 shadow-xl">
       <div >
       <figure><img className="w-full h-60" src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold">{type}</p>
         <div className="flex">
         <p className="text-4xl text-orange-600">{rating}</p>
         <p className="font-bold">Price: {price}</p>
         </div>
          <p>{description}</p>
       </div>
          <div className="flex justify-between m-4">
          <Link to={`/detailsproduct/${_id}`}>
        <button className="btn btn-primary">Details</button>
        </Link>
       <Link to={`/update/${_id}`}>
       <button className="btn btn-primary">Update</button>
       </Link>
    
      </div>
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default DetailsCard;
