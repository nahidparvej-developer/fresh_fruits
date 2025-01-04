import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
      const {user, logOut} = useContext(AuthContext);
      const handlelogOut =() => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error));
      }

    const navOptions = <>
        <li><Link to='/home'>HOME</Link></li>
        <li><Link to='/contact'>CONTACT US</Link></li>
      
        <li><Link to='/menu'>OUR MENU</Link></li>
        <li><Link to='/order/salad'>ORDER NOW</Link></li>
        {
            user ?
             <> 
             <button onClick={handlelogOut} className="btn btn-gost">LogOut</button>
             </> 
             :
             <> <Link to="/login" className="btn">Login</Link></>
        }
       
       
        
    </>
    return (
        <div>
            <div className="navbar max-w-screen-lg mx-auto fixed z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {navOptions}
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost text-xl"> <p className="flex-auto text-sm">HEMAYETPUR <p className="text-xs">RESTURANT</p></p></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  px-1">
                    {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                </div>
            </div>
        </div>
    );
};

export default NavBar;