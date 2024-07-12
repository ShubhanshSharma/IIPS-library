import SideBar from "../librarySideBar/sideBar";
import LibraryHamburger from "../LibraryHamburger/LibraryHamburger";

export default function LibraryBooks(){


    return(
        <div className=" min-h-screen w-screen relative flex flex-col lg:flex-row overflow-hidden ">

            <div>
                <SideBar highlight={'books'}/>
            </div>

            <div className="absolute top-0 left-full h-screen w-screen">
                <LibraryHamburger highlight={'books'}/>
            </div>

        </div>
    )
}