import LibrarySideHeader from "../IIPSLibrary/librarySideHeader";
import LoginSection from "../LoginSection/LoginSection";


export default function LibraryManager(){

    return(
        <div className=" w-screen h-screen relative justify-center flex bg-[#EFF9FF]">

            {/* center screen div */}
            <div className=" relative md:flex-row flex-col  w-[800px] min-h-[400px] shadow-[15px_0px_66px_0px_rgba(0,0,0,0.08)] mx-5 self-center flex bg-[#D6FFC8] rounded-3xl">

                 {/* library heading */}
                <div className=" relative m-auto sm:scale-100 scale-75">
                    <LibrarySideHeader />    
                </div>

                <div className=" flex relative  md:w-[1px] w-[200px] self-center h-[1px] md:h-[100px] my-auto md:-translate-x-7  bg-slate-700 rounded-full "></div>


                {/* login section */}
                <div className="relative w-fit h-fit m-auto">
                    <LoginSection loginType='library'/>
                </div>
            </div>
        </div>
    )
}