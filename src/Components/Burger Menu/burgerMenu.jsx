import './burgerMenu.css';

import { slide as Menu } from 'react-burger-menu'

export default function BurgerMenu(){
  
return (
    <Menu right >
    <a id="home" className="menu-item" href="/">Home</a>
    <a id="about" className="menu-item" href="/dashboard">Dashboard</a>
    <a id="about" className="menu-item" href="/libraryManager">library login</a>
    </Menu>
);

}