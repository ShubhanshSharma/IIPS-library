import './Landing.css';
import homeImage from '../../Assets/73Z_2108.w023.n001.896B.p1.896.jpg';
import bookmark from '../../Assets/book mark.svg'
import IIPSLibrary from '../IIPSLibrary/IIPSLibrary';
import LoginSection from '../LoginSection/LoginSection';




export default function Home(){

    return(
        <div className="App h-screen w-screen flex flex-col bg-[#081327]">

            {/* background image */}
            {/* <div className=' relative h-full w-fit '>
                <img className='girl_image relative h-screen z-10' src={homeImage} />
            </div> */}

            {/* bg color div */}
            {/* <div className=' absolute h-full w-full bg-[#081327]'></div> */}
            
            {/* center div for login and sign in */}
            <div className=' relative  m-auto z-20 rounded-3xl grid grid-cols-12 grid-rows-2 min-h-[70%] w-[70%]   bg-[#01001cad]'>

                {/* need help */}
                <div className='need_help_button top-3 right-12 text-[12px] text-[#ef7115] hidden absolute md:block '>
                    <button>Need a Help ?</button>
                </div>

                {/* IIPS Library element */}
                <div className='relative m-auto row-span-1 col-span-12 lg:row-span-2 lg:col-span-5'>
                    <IIPSLibrary />
                </div>

                {/* Login section */}
                <div className='relative m-auto row-span-1 col-span-12 lg:row-span-2 lg:col-span-7'>
                    <LoginSection />
                </div>

            </div>

            {/* bookmark */}
            <img src={bookmark} className=' w-20 absolute left-[18%] top-[13%] z-20' ></img>
        </div>
    )
}