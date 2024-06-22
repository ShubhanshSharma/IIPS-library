import './IIPSLibrary.css';
import i from '../../Assets/i.svg';
import tilted_i from '../../Assets/tilted i.svg'
import IIPSLibraryHeading from './IIPSLibraryHeading';


export default function IIPSLibrary(){

    return(
        <div className='relative mx-auto w-max flex flex-col scale-[0.8] md:scale-100 text-white justify-center items-center'>

            <IIPSLibraryHeading />

            {/* line */}
            <div className='relative w-full  bg-white h-[2px] rounded-full'></div>

            
            <div className=' relative font-normal text-[20px] ' >A Haven for Curious Minds</div>
        </div>
    )
}