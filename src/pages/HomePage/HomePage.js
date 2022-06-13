import { CarouselHome } from "../../components";
import { category, status } from "../../constants/urls";

const HomePage = () => {
   return (
      <div>
         <CarouselHome category={category.movie} status={status.popular} />
      </div >
   );
};

export { HomePage };