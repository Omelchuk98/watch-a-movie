import './footer.css';

import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
const Footer = () => {
   return (
      <div className="footer">
         <div className="footer__container">
            <div className="footer__list">
               <p className="footer__item">Home</p>
               <p className="footer__item">Contact Us</p>
               <p className="footer__item">Term of services</p>
               <p className="footer__item">About us</p>
            </div>
            <div className="footer__list">
               <p className="footer__item">Live</p>
               <p className="footer__item">FAQ</p>
               <p className="footer__item">Premium</p>
               <p className="footer__item">Pravacy policy</p>
            </div>
            <div className="footer__list">
               <p className="footer__item">You must watch</p>
               <p className="footer__item">Recent release</p>
               <p className="footer__item">Top IMDB</p>
            </div>
         </div>
         <div className='footer__footer'>
            <div className='copyright'>Copyright © 2022 Movies. All Rights Reserved.</div>
            <div className='footer__icons'>
               <div className='footer__icon' onClick={() => console.log('Hi')}>
                  <img src={facebook} alt="facebook" className="footer__img" />
               </div>
               <div className='footer__icon'>
                  <img src={twitter} alt="twitter" className="footer__img" />
               </div>
               <div className='footer__icon'>
                  <img src={instagram} alt="instagram" className="footer__img" />
               </div>
            </div>
         </div>


      </div>
   );
}

export { Footer };