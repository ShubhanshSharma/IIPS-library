import './Dashboard.css';
import IIPSLibraryHeading from '../IIPSLibrary/IIPSLibraryHeading';
import { Container } from '@mui/material';
import {Box} from '@mui/material';
import { Fullscreen } from '@mui/icons-material';
import CircleElement from '../Circle/circle';
import BgTextureDiv from '../BG Texture div/bgTextureDiv';
import BurgerMenu from '../Burger Menu/burgerMenu';
import SlidingButton from '../Sliding Button/slidingButton';
import { gsap } from "gsap";
import { useEffect, useState } from 'react';
import searchIcon from '../../Assets/Search widget.svg';


export default function Dashboard(){

    const [isLeft, setLeft] = useState(false);

    useEffect(() =>{
        let tl = gsap.timeline();

        if(isLeft){
            tl.to(".slidingDiv ",{
                translateX: '-95%',
                opacity: 1
            })
        }else{
            tl.to(".slidingDiv",{
                translateX: '0%',
                opacity: 1
            })
        }
    }, [isLeft])

    const slideHandler = () => {
        setLeft(!isLeft);
    }
    

    return(
        <div className=' min-h-screen w-screen flex flex-col bg-[#081327]  overflow-hidden'>

            {/* Navbar contents */}
            <div className='absolute left-[-20px] md:left-[60px] top-[-10px] z-30 scale-50 sm:scale-75 lg:scale-100'>
                <IIPSLibraryHeading />
            </div>

            <div className=' w-fit absolute right-[40px] md:right-[70px]'>
                <BurgerMenu />
            </div>


            {/* MAIN DIV */}
            <div className='relative flex flex-row h-[90vh] md:h-[80vh] justify-center items-center w-[90%] m-auto py-3 gap-24'>
                <div className='relative rounded-3xl m-auto z-30 h-full hidden lg:block w-2/6'>
                    <BgTextureDiv height='100%' width='100%' />
                </div>

                {/* Sliding divs and buttons to trigger slide */}
                <div className='slidingDiv relative flex flex-row rounded-3xl m-auto z-30 h-full w-[100%]'>
                    <div className=' relative flex flex-row rounded-3xl m-auto z-30 h-full w-[100%]'>
                        <BgTextureDiv height='100%' width='100%' />
                        
                    </div>
                    
                    
                    {/* sliding Animation button for small screens*/}
                    <div onClick={slideHandler} className=' relative block lg:hidden w-fit h-fit bottom-[-85%]'>
                        <SlidingButton />
                    </div>
                    

                    <div className=' absolute flex flex-row  left-[85vw] object-fill rounded-3xl m-auto md:hidden z-30 h-full w-[90vw]'>
                        
                        <img src={searchIcon} className=' w-90vw'></img>
                        
                    </div>
                </div>
            </div>



            {/* BELOW ARE ALL THE CIRCLES ASSETS WHICH ARE FIXED OR ABSOLUTE */}
            
            {/* left circle on md++ */}
            <div className='absolute hidden md:block top-[10em] left-0'>
                <CircleElement diameter='260'  shadow="20" />
            </div>

            {/* top right on md++ */}
            <div className='fixed hidden md:block top-[-2em] right-[5em]'>
                <CircleElement diameter='120'  shadow="20" />
            </div>

            {/* bottom right on md++ */}
            <div className='fixed hidden md:block bottom-[19%] right-[9%]'>
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