import LibraryStats from "../Library stats/libraryStats";
import timeIcon from '../../Assets/time.svg';
import HomeTable from "../Home table/HomeTable";


export default function LibraryMainContainer(){
    return(
        <div className="relative flex flex-col h-screen w-full justify-between items-center bg-[#EFF9FF]">
            
            <div className=" w-full relative h-fit mx-auto scale-50 md:scale-75 lg:scale-100 flex lg:mt-[5vh]">
                <LibraryStats />
            </div>
            
            <div className=" w-[95%] h-[428px] rounded-sm flex flex-col border-t-gray-700 border-t-[1px] m-4">

                <div className=" relative flex flex-row ">
                    <img src={timeIcon} alt="clock" />
                    <p className=" m-2 font-medium text-gray-600">Recent Transactions</p>
                </div>

                <HomeTable />
            </div>


            <div>

            </div>
        </div>
    )
}