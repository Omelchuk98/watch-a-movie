import { Link, NavLink } from 'react-router-dom';
import './header.css';

import logo from './logo.png';


const Header = () => {
   return (
      <div className="header">
         <div className="header__container">
            <Link to="home" >
               <img src={logo} alt="logo" className="logo__img" />
            </Link>
            <div className="logo__text">Watch a movie <br /> or <br /> be part of one</div>
            <nav className="header__menu">
               <div className="menu__list">
                  <NavLink to="home" className="menu__item">Home</NavLink>
                  <NavLink to="movie" className="menu__item">Movies</NavLink>
                  <NavLink to="tv" className="menu__item">TV Shows</NavLink>
               </div>
            </nav>

         </div>
      </div>
   );
};

export { Header };