import { CarouselHome } from "../../components";
import { category, status } from "../../constants/urls";


const HomePage = () => {
   return (
      <div>
         <div>
            <h1>Popular movies</h1>
            <CarouselHome category={category.movie} status={status.popular} />
         </div >
         <div>
            <h1>Upcoming movies</h1>
            <CarouselHome category={category.movie} status={status.upcoming} />
         </div >
         <div>
            <h1>Top rated movies</h1>
            <CarouselHome category={category.movie} status={status.top_rated} />
         </div >
      </div>
   );
};

export { HomePage };