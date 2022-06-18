import { useState, useEffect } from 'react';

import { CarouselCard } from '../carousel-card/carousel-card';
import { movieService } from '../../services/movieService';

import arrow from './arrow_back.png';

import './carousel-home.css';

const CarouselHome = (props) => {
   const [items, setItems] = useState(null);
   const [first, setFirst] = useState(0);
   const [second, setSecond] = useState(5);

   useEffect(() => {
      movieService.getHomeMovie(props.status).then(({ data }) => setItems(data))
   }, [])


   const showFirst = () => {
      if (first !== 0) {
         setFirst((firstValue) => firstValue - 1)
      } else setFirst(0);
      if (second !== 5) {
         setSecond((nextValue) => nextValue - 1)
      } else setSecond(5);
   }

   const showSecond = () => {
      if (first !== 15) {
         setFirst((firstValue) => firstValue + 1)
      } else setFirst(0);
      if (second !== 20) {
         setSecond((nextValue) => nextValue + 1)
      } else setSecond(5);
   }

   return (
      <div className='carousel-home__container'>
         <div className='arrow' onClick={() => showFirst()}>
            <img src={arrow} alt='arrow-back' />
         </div>
         <div className='carousel-home__movie-list'>
            {items &&
               items.results.slice(first, second).map(item =>
                  <CarouselCard key={item.id} item={item} category={props.category} />)}
         </div >
         <div className='arrow rotate' onClick={() => showSecond()}>
            <img src={arrow} alt='arrow-forward' />
         </div>
      </div>
   );
};

export { CarouselHome };