import { useEffect, useState } from "react";
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from "../DetailsCard/DetailsCard";


const Details = () => {
    const [carddetails,setCardDetails]=useState({});
    const details = useLoaderData();
    console.log(details);
    const { id } = useParams();
    console.log(id);
    useEffect(()=>{
      const findDetails = details?.find(detail=> detail.id === id);
      setCardDetails(findDetails);
    },[id,details])

    return (
      <DetailsCard carddetails={carddetails}></DetailsCard>
    );
};

export default Details;