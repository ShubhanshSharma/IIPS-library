import { useState, useEffect } from 'react';
import HamburgerMenu from '../../Assets/Hamburger Menu.svg';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function LibraryHamburger( props){

    let bold = props.highlight;

    const [isMenu, setMenu] = useState(false);

    useEffect(() =>{
        let tl1 = gsap.timeline();
        let tl2 = gsap.timeline();

        if(isMenu){
            tl1.to(".Hamburger-menu-library ",{
                translateX: '-100%',
            });
            tl2.to(".Hamburger-menu-library-icon ",{
                translateX: '100vw',
            });
        }else{
            tl1.to(".Hamburger-menu-library",{
                translateX: '0%',
                duration:1.5,
                ease: "power4.out"
            });
            tl2.to(".Hamburger-menu-library-icon ",{
                translateX: '0%',
                duration: 1.5,
                ease: "power4.out"
            });
        }
    }, [isMenu])

    
    return(
        <div className="Hamburger-menu-library relative h-screen w-screen z-40 bg-[#D6FFC8] flex flex-col justify-center items-center">

            <div className="relative flex text-[40px] font-medium gap-6 lg:hidden flex-col text-[#5E5E5E] ">
                {bold=='home'? <span className="  text-black">Home</span>: <Link to='/libraryDashboard'><span>Home</span></Link>}
                {bold=='books'? <span className="  text-black">Books</span>: <Link to='/libraryBooks'><span>Books</span></Link>}
                {bold=='users'? <span className="  text-black">Users</span>: <Link to='/libraryUsers'><span>Users</span></Link>}
            </div>

            <div className='Hamburger-menu-library-icon fixed right-full top-8 h-10 w-10 lg:hidden' onClick={() => {setMenu(!isMenu)}}>
                <img src={HamburgerMenu} />
            </div>
        </div>
    )
}