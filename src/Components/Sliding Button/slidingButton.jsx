import arrow from '../../Assets/icons8-arrow-64.png';


export default function SlidingButton (){

    return(
        <div className=" relative justify-center items-center w-fit h-fit rounded-lg border-r-[2px] border-y-[2px] bg-transparent m-auto border-[#182856]">
            <button className='relative m-1 w-[30px] '>
                <img src={arrow} ></img>
            </button>
        </div>
    )
}