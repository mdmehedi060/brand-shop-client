import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import userDefaultPic from "../../assets/User/user.png"
import { Authcontext } from './../../Components/Providers/AuthProviders';

const Header = () => {
  const {user,logOut} =useContext(Authcontext)
  const handleSignOut=()=>{
  logOut()
  .then(result=>{
      console.log(result);
  })
  .catch(error=>console.error(error))
  }

    const navLinks = <>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/addproduct'>Add Product</NavLink></li>
     <li><NavLink to='/mycart'>My Cart</NavLink></li>
     
   
                  
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 
            shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
         <div className="flex p-2">
            <img className="h-12 w-12 rounded-full" src="https://i.ibb.co/x3ChKvd/logo-4.png" alt="" />
            <a className="font-extrabold  text-blue-500 text-2xl">Mehedi Automotive</a>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userDefaultPic} />
                       
                    </div>
                </label>
                {
                    user ?
                    <button onClick={handleSignOut} className="btn">Log Out</button>
                    :
                    <Link to="/login">
                    <button className="btn">Log In</button>
                </Link>
                }
               
            </div>
      </div>
    );
};

export default Header;