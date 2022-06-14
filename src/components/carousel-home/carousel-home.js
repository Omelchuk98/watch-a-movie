import { useState, useEffect } from 'react';

import { Carousel } from '@trendyol-js/react-carousel';

import { CarouselCard } from '../carousel-card/carousel-card';
import { movieService } from '../../services/movieService';

import arrow from './arrow_back.png';


import './carousel-home.css';

const CarouselHome = (props) => {
   const [items, setItems] = useState([]);

   useEffect(() => {
      movieService.getHomeMovie(props.status).then(({ data }) => setItems(data.results.slice(0, 6)))
   }, [items])


   return (
      <div className='carousel-home__container'>
         <div className='arrow'>
            <img src={arrow} alt='arrow-back' />
         </div>
         <div className='carousel-home__movie-list'>
            {items &&
               items.map(item =>
                  <CarouselCard key={item.id} item={item} category={props.category} />)}
         </div >
         <div className='arrow rotate'>
            <img src={arrow} alt='arrow-forward' />
         </div>
      </div>
   );
};

export { CarouselHome };