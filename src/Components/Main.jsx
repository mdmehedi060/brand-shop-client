import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Footer from "../Pages/Home/Footer";


const Main = () => {
    return (
        <div  className="max-w-7xl mx-auto dark:bg-white">
         
           <Header></Header>
           <Outlet></Outlet> 
           <Footer></Footer>
        
        </div>
    );
};

export default Main;