
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {id,image,name,brandName,price,type,rating,addButton,shortDescription} = category;
    return (
        <div className="card w-96 bg-gray-100 shadow-xl">
        <figure>
            <img className="w-full h-60" src={image} alt="Shoes" />
            </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold">{name}</h2>
        <div className="flex font-bold">
        <p>Price: {price}</p>
          <p>Brand: {brandName}</p>
        </div>
          <p></p>
          <p>{shortDescription}</p>
         <div className='card-actions justify-end'>
         {
            <Link 
            to={`/details/${id}`}
            className="text-pink-500 font-bold">
                <button className='btn btn-success'> View Details</button>
                 </Link>
        }
         </div>
        </div>
      </div>
    );
};

export default CategoryCard;