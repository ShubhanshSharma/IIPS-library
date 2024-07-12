import './Landing.css';
import bookmark from '../../Assets/book mark.svg'
import IIPSLibrary from '../IIPSLibrary/IIPSLibrary';
import LoginSection from '../LoginSection/LoginSection';
import IIPSLibraryHeading from '../IIPSLibrary/IIPSLibraryHeading';
import CircleElement from '../Circle/circle';




export default function Home(){

    return(
        <div className="App h-screen w-screen flex flex-col bg-[rgb(8,19,39)]  overflow-hidden">

            {/* background image */}
            {/* <div className=' relative h-full w-fit '>
                <img className='girl_image relative h-screen z-10' src={homeImage} />
            </div> */}

            {/* bg color div */}
            {/* <div className=' absolute h-full w-full bg-[#081327]'></div> */}
            
            {/* center div for login and signin and logo*/}
            <div className='center_div_for_login relative  m-auto z-20 items-center rounded-3xl flex flex-row-reverse  
                            w-[84%] h-[80%] md:w-[70%] md:min-h-[70%]  bg-[#01001cad] backdrop-blur-sm
                            '>



                {/* Login section */}
                <div className='relative m-auto '>
                    <LoginSection loginType={'student'}/>
                </div>

                {/* IIPS Library element */}
                <div className='relative w-2/12 hidden lg:block m-auto'>
                    <IIPSLibrary />
                </div>


                {/* below elements are absolute in position. They are assets */}
                {/* need help */}
                <div className='need_help_button top-3 right-12 text-[12px] text-[#ef7115] hidden absolute lg:block '>
                    <button>Need a Help ?</button>
                </div>


                {/* IIPS Library element  at less than md width*/}
                <div className='absolute left-[3rem] top-[-3%] md:left-[7rem] scale-[0.56] md:scale-[0.85] block lg:hidden'>
                    <IIPSLibraryHeading />
                </div>


                {/* bookmark */}
                <img src={bookmark} className=' w-12 md:w-20 absolute left-[4%] -top-[10px] md:-top-[16px] z-20' ></img>

                

            </div>

            {/* left circle on md++ */}
            <div className='absolute hidden md:block top-[10em] left-0'>
                <CircleElement diameter='260'  shadow="20" />
            </div>

            {/* top right on md++ */}
            <div className='fixed hidden md:block top-[-2em] right-[5em]'>
                <CircleElement diameter='120'  shadow="20" />
            </div>

            {/* bottom right on md++ */}
            <div className='fixed hidden md:block bottom-[16%] right-[16%]'>
                <CircleElement diameter='60' onlyOrange={true}  shadow="20" />
            </div>

            {/*  right middle on md++ */}
            <div className='fixed hidden md:block bottom-[46%] right-[36%]'>
                <CircleElement diameter='200' onlyOrange={false}  shadow="20" />
            </div>

            {/* BELOW CIRCLES ARE FOR md-- */}
            {/* left circle on md++ */}
            <div className='absolute md:hidden top-[-8em] -left-[12rem]'>
                <CircleElement diameter='460'  shadow="20" />
            </div>

            {/* right circle on md++ */}
            <div className='fixed md:hidden top-[35%] right-[8rem]'>
                <CircleElement diameter='260'  shadow="20" />
            </div>
        </div>
    )
}