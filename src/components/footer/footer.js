import './footer.css';
import { Link } from 'react-router-dom';

import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';

let openInNewTap = (url) => {
   window.open(url, `_blank`).focus();
}
let link = {
   tw: 'https://www.twitter.com',
   fb: 'https://www.facebook.com',
   inst: 'https://www.instagram.com',
   imdb: 'https://www.imdb.com/chart/top/',
}

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__container">
            <div className="footer__list">
               <Link to={'/'} className="footer__item">Home</Link>
               <Link to={'/'} className="footer__item">Contact Us</Link>
               <Link to={'/'} className="footer__item">Term of services</Link>
               <Link to={'/'} className="footer__item">About us</Link>
            </div>
            <div className="footer__list">
               <Link to={'/'} className="footer__item">Live</Link>
               <Link to={'/'} className="footer__item">FAQ</Link>
               <Link to={'/'} className="footer__item">Premium</Link>
               <Link to={'/'} className="footer__item">Pravacy policy</Link>
            </div>
            <div className="footer__list">
               <Link to={'/'} className="footer__item">You must watch</Link>
               <Link to={'/'} className="footer__item">Recent release</Link>
               <Link to={'/'} className="footer__item">Upcoming</Link>
               <a className="footer__item" onClick={() => openInNewTap(link.imdb)}>
                  Top IMDB
               </a>
            </div>
         </div>
         <div className='footer__footer'>
            <div className='copyright'>Copyright © 2022 Movies. All Rights Reserved.</div>
            <div className='footer__icons'>
               <div className='footer__icon'
                  onClick={() => openInNewTap(link.fb)}>
                  <img src={facebook} alt="facebook" className="footer__img" />
               </div>
               <div className='footer__icon' onClick={() => openInNewTap(link.tw)}>
                  <img src={twitter} alt="twitter" className="footer__img" />
               </div>
               <div className='footer__icon' onClick={() => openInNewTap(link.inst)}>
                  <img src={instagram} alt="instagram" className="footer__img" />
               </div>
            </div>
         </div>


      </div>
   );
}

export { Footer };