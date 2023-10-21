import Header from "../Header/Header";
import Footer from "../Home/Footer";


const ErrorPages = () => {
    return (
        <div>
            <Header></Header>
              <div className="card w-96 h-96 mt-12 mb-12 text-center 
            mx-auto bg-slate-100 shadow-lg">
  <div className="card-body">
    <h2 className="card-title mt-10 text-5xl font-bold">404 Error page is not found</h2>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default ErrorPages;