import './Landing.css';
import homeImage from '../../Assets/73Z_2108.w023.n001.896B.p1.896.jpg';
import bookmark from '../../Assets/book mark.svg'
import IIPSLibrary from '../IIPSLibrary/IIPSLibrary';
import LoginSection from '../LoginSection/LoginSection';




export default function Home(){

    return(
        <div className="App h-screen w-screen flex flex-col">

            {/* background image */}
            <div className=' relative h-full w-fit '>
                <img className=' relative h-screen z-10' src={homeImage} />
            </div>

            {/* bg color div */}
            <div className=' absolute h-full w-full bg-[#081327]'></div>
            
            {/* center div for login and sign in */}
            <div className=' absolute z-20 rounded-3xl grid grid-cols-12 h-[70%] w-[70%] top-[15%] left-[15%] bg-[#01001cad]'>

                {/* need help */}
                <div className=' absolute top-3 right-12 text-[12px] text-[#ef7115]'>
                    <button>Need a Help ?</button>
                </div>

                {/* IIPS Library element */}
                <div className='relative m-auto col-span-5'>
                    <IIPSLibrary />
                </div>

                {/* Login section */}
                <div className='relative m-auto col-span-7'>
                    <LoginSection />
                </div>

            </div>

            {/* bookmark */}
            <img src={bookmark} className=' w-20 absolute left-[18%] top-[13%] z-20' ></img>
        </div>
    )
}