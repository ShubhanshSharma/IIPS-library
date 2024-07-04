import LibrarySideHeader from "../IIPSLibrary/librarySideHeader";
import logoutImage from '../../Assets/icons8-logout-96 1.svg'

export default function SideBar(){

    return(
        <div className=" relative bg-[#D6FFC8] flex flex-col justify-start lg:justify-between w-full lg:w-max  lg:min-h-screen">
            {/* library heading */}
            <div className=" relative flex">
                <LibrarySideHeader />    
            </div>

            <div className="relative hidden text-[40px] font-medium gap-6 lg:flex flex-col text-[#5E5E5E] ">
                <span>Home</span>
                <span>Books</span>
                <span>Users</span>
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