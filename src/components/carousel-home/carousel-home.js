import { useState, useEffect } from 'react';
import { CarouselCard } from '../carousel-card/carousel-card';
import { movieService } from '../../services/movieService';

import './carousel-home.css';

const CarouselHome = (props) => {

   const [items, setItems] = useState(null);
   useEffect(() => {
      movieService.getHomeMovie(props.status).then(({ data }) => setItems(data))
   }, [])
   return (
      <div>
         {items &&
            items.results.map(item =>
               <CarouselCard key={item.id} item={item} category={props.category} />)}
      </div >

   );
};

export { CarouselHome };