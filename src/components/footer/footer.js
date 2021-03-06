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
   imdb_tv: 'https://www.imdb.com/chart/toptv/',
   netflix_film: 'https://top10.netflix.com/films',
   netflix_tv: 'https://top10.netflix.com/tv',
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
               <Link to={'/'} className="footer__item">Privacy policy</Link>
            </div>
            <div className="footer__list">
               <a className="footer__item" onClick={() => openInNewTap(link.netflix_film)}>
                  Top Netflix films
               </a>
               <a className="footer__item" onClick={() => openInNewTap(link.netflix_tv)}>
                  Top Netflix TV
               </a>
               <a className="footer__item" onClick={() => openInNewTap(link.imdb_tv)}>
                  Top IMDB TV
               </a>
               <a className="footer__item" onClick={() => openInNewTap(link.imdb)}>
                  Top IMDB films
               </a>
            </div>
         </div>
         <div className='footer__footer'>
            <div className='copyright'>Copyright ?? 2022 Movies. All Rights Reserved.</div>
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