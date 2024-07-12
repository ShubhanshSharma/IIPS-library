import SideBar from "../librarySideBar/sideBar";
import LibraryMainContainer from "../Library container/LibraryMainContainer";
import LibraryHamburger from "../LibraryHamburger/LibraryHamburger";

export default function LibraryDashboard(){

    return(
        <div className=" min-h-screen w-screen relative flex flex-col lg:flex-row overflow-hidden">

            <div>
                <SideBar highlight={'home'}/>
            </div>

            <div className=" relative flex flex-row w-full">
                <LibraryMainContainer />
            </div>

            <div className="absolute top-0 left-full h-screen w-screen">
                <LibraryHamburger highlight={'home'}/>
            </div>

        </div>
    )
}