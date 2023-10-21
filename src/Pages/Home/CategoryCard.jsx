
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {id,image,name,brandName} = category;
    return (
        <div>
          
            <div className="card w-96 bg-[#D0E4E0] shadow-xl">
        <figure>
            <img className="w-full h-60" src={image} alt="Shoes" />
            </figure>
        <div className="card-body">
         
       
         <div className='card-actions justify-start'>
         {
            <Link 
            to={`/details/${name}`}
            className="text-black font-bold">
                <h2 className="card-title text-2xl text-[#20B2AA] font-extrabold">{name}</h2>
                 </Link>
        }
         </div>
        </div>
      </div>
        </div>
    );
};

export default CategoryCard;