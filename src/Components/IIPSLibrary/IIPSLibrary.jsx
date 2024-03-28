import './IIPSLibrary.css';
import i from '../../Assets/i.svg';
import tilted_i from '../../Assets/tilted i.svg'


export default function IIPSLibrary(){

    return(
        <div className='relative mx-auto w-max flex flex-col z-50 text-white justify-center items-center'>

            <div className='relative h-max flex flex-row text-[32px] -ml-4 -mb-6 font-semibold justify-center items-center'>
                <img src={i} className='  pt-3'></img>
                <img src={i} className=' -ml-[47px] pt-3'></img>
                <span className=' -ml-[24px]'>PS L</span>
                <img src={tilted_i} className=' -ml-[11px]  pt-3'></img>
                <span className=' -ml-[12px]'>BRARY</span>
            </div> 

            {/* line */}
            <div className='relative w-full bg-white h-[2px] rounded-full'></div>

            
            <div className=' relative font-normal text-[20px]' >A Haven for Curious Minds</div>
        </div>
    )
}