import { useLoaderData, useParams } from "react-router-dom";
import DetailsProduct from "./DetailsProduct";
import { useEffect, useState } from "react";


const CardDetails = () => {
    const [carddetails,setCardDetails]=useState();
const details = useLoaderData();
console.log(details);
const { id } = useParams();
// console.log(id);
useEffect(()=>{
  const findDetails = details?.find(detail=> detail.id !== id);
  setCardDetails(findDetails);
},[id,details])
    return (
        <div>
            {
                carddetails.map(carddetail=><DetailsProduct key={carddetail.id} carddetail={carddetail}></DetailsProduct>)
            }
        </div>
    );
};

export default CardDetails;