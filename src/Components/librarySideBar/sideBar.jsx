import LibrarySideHeader from "../IIPSLibrary/librarySideHeader";
import logoutImage from '../../Assets/icons8-logout-96 1.svg';
import BurgerMenu from '../Burger Menu/burgerMenu';
import { Link } from "react-router-dom";

export default function SideBar(props){

    let bold = props.highlight;
    return(
        <div className=" relative bg-[#D6FFC8] shadow-none lg:shadow-[15px_0px_66px_0px_rgba(0,0,0,0.08)] z-30 flex lg:flex-col justify-between lg:justify-between items-center w-full h-[10vh] sm:h-[20vh] lg:w-max  lg:min-h-screen ">
            {/* library heading */}
            <div className=" relative flex h-fit scale-50 sm:scale-75 md:scale-100 -left-20 sm:left-0 md:top-0">
                <LibrarySideHeader />    
            </div>

            <div className="relative hidden text-[40px] font-medium gap-6 lg:flex flex-col text-[#5E5E5E] ">
                {bold=='home'? <span className="  text-black">Home</span>: <Link to='/libraryDashboard'><span>Home</span></Link>}
                {bold=='books'? <span className="  text-black">Books</span>: <Link to='/libraryBooks'><span>Books</span></Link>}
                {bold=='users'? <span className="  text-black">Users</span>: <Link to='/libraryUsers'><span>Users</span></Link>}
            </div>


            <div className=" relative hidden lg:flex flex-col items-center p-7">
                <div className=" flex flex-row relative ">
                    <span className=" font-semibold text-[25px]">Logout </span>
                    <img src={logoutImage} alt='logout'/>
                </div>
                
                <p className=" text-[10px] font-light">Copyright @2023 All rights reserved</p>
            </div>
            
           
        </div>
    )
}