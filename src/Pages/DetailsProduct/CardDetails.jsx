import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";


const CardDetails = () => {
    const [carddetails,setCardDetails]=useState();
const details = useLoaderData();
console.log(details);
// const {photo,name,brandname,type,price,description,rating} =  detailsProduct;
const { id,photo,name,brandname,type,price,description,rating } = useParams();
// console.log(id);
useEffect(()=>{
  
  if (Array.isArray(details)) {
    const findDetails =details.find(detail=> detail.id == id);
    console.log(findDetails);
    setCardDetails(findDetails);
  } 
  // else {
  //   console.error('details is not an array.');
    
  // }
  
 
},[id,details])
    return (
        <div>
           <div>
          <h2 className="text-4xl text-center font-bold m-6">Details Product pages</h2>  
          <div className="card w-96 bg-slate-100 m-auto shadow-lg">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <div className="flex">
    <p className="text-4xl text-orange-600">{rating}</p>
         <p className="font-bold">Price: {price}</p>
         </div>
    <p>{description}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default CardDetails;