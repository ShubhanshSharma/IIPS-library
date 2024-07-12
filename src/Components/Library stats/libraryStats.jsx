

export default function LibraryStats(){

    return(
        <div className=" relative m-auto p-4 flex flex-row w-[95%] h-[100px]  sm:h-[150px] lg:h-[200px] ">


            {/* Currently issued books */}
            <div className=" relative h-full w-1/3 bg-[#FFC8C8] shadow-[15px_0px_66px_0px_rgba(0,0,0,0.08)]">
                <div className=" absolute bottom-2 left-1 sm:left-8 font-bold text-[30px] sm:text-[40px] lg:text-[65px]">35</div>

                <pre className=" absolute w-1/2 bottom-0  right-2 sm:right-0 text-wrap text-[18px] sm:text-[24px] md:text-[35px] font-semibold text-slate-600">Issued Books</pre >
            </div>


            {/* active users */}
            <div className=" relative h-full w-1/3 bg-[#F7FFC8] shadow-[15px_0px_66px_0px_rgba(0,0,0,0.08)]">
                <div className=" absolute bottom-2 left-1 sm:left-8 font-bold text-[30px] sm:text-[40px] lg:text-[65px]">35</div>

                <pre className=" absolute w-1/2 bottom-0  right-2 sm:right-0 text-wrap text-[18px] sm:text-[24px] md:text-[35px] font-semibold text-slate-600">Active Users</pre >
            </div>


            {/* total users */}
            <div className=" relative h-full w-1/3 bg-[#C8EEFF] shadow-[15px_0px_66px_0px_rgba(0,0,0,0.08)]">
                <div className=" absolute bottom-2 left-1 sm:left-8 font-bold text-[30px] sm:text-[40px] lg:text-[65px]">35</div>

                <pre className=" absolute w-1/2 bottom-0  right-2 sm:right-0 text-wrap text-[18px] sm:text-[24px] md:text-[35px] font-semibold text-slate-600">Total Users</pre >
            </div>
        </div>
    )
}