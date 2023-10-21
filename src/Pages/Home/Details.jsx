
import { useLoaderData } from 'react-router-dom';
import DetailsCard from './../DetailsCard/DetailsCard';
import Slider from '../DetailsCard/Slider';


const Details = () => {
  const products=useLoaderData();
  // console.log(products);






  
  return (
    <div>
    <h2>This is Details Card: {products.length}</h2>
    <div>
      <Slider></Slider>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2  m-6">
    {products && products.length > 0 && (
      products.map(product=><DetailsCard key={product.id} product={product}></DetailsCard>)
    )
   }
   
    </div>
  </div>
  );
};

export default Details;