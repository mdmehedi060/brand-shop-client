
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import CategoryCard from './CategoryCard';



const Home = () => {
const categorys = useLoaderData();

    return (
        <div className="min-w-6xl">
          
          <Banner></Banner>

          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 mt-10">
            {
              categorys.map(category=><CategoryCard key={category.id} category={category}> </CategoryCard>)
            }
          </div>
        </div>
    );
};

export default Home;