

export default function LibraryStats(){

    return(
        <div className=" relative m-auto p-4 flex flex-row w-[95%] h-[200px] ">


            {/* Currently issued books */}
            <div className=" relative h-full w-full bg-[#FFC8C8]">
                <div className=" absolute bottom-2 left-8 font-bold text-[65px]">35</div>

                <pre className=" relative bottom-0 right-0 text-[35px] font-semibold text-slate-600"> Issued Books </pre >
            </div>


            {/* active users */}
            <div className=" relative h-full w-full bg-[#F7FFC8]">
                <div className=" absolute bottom-2 left-8 font-bold text-[65px]">35</div>

                <pre className=" relative bottom-0 right-0 text-[35px] font-semibold text-slate-600"> Active Users </pre >
            </div>


            {/* total users */}
            <div className=" relative h-full w-full bg-[#C8EEFF]">
                <div className=" absolute bottom-2 left-8 font-bold text-[65px]">35</div>

                <pre className=" relative bottom-0 right-0 text-[35px] font-semibold text-slate-600"> Total Users </pre >
            </div>
        </div>
    )
}