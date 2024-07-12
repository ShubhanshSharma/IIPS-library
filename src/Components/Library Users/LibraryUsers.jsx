import SideBar from "../librarySideBar/sideBar";
import LibraryHamburger from "../LibraryHamburger/LibraryHamburger";

export default function LibraryUsers(){


    return(
        <div className=" min-h-screen w-screen relative flex flex-col lg:flex-row overflow-hidden">

            <div>
                <SideBar highlight={'users'}/>
            </div>

            <div className="absolute -top-4 sm:top-0 left-full h-screen w-screen">
                <LibraryHamburger highlight={'users'}/>
            </div>

        </div>
    )
}