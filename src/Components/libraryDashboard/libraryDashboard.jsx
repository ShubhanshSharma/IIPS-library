import SideBar from "../sideBar/sideBar";
import LibraryMainContainer from "../Library container/LibraryMainContainer";

export default function LibraryDashboard(){

    return(
        <div className=" min-h-screen w-screen relative flex flex-col lg:flex-row overflow-hidden">

            <div>
                <SideBar />
            </div>

            <div className=" relative flex flex-row w-full">
                <LibraryMainContainer />
            </div>

        </div>
    )
}