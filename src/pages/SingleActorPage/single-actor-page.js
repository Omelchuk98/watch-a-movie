import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import { ActorDetails } from "../../components";


const SingleActorPage = () => {
   const { state } = useLocation;
   const [actor, setActor] = useState(state);
   const { id } = useParams();
   useEffect(() => {
      if (!state) {
         movieService.getSingleActor(id).then(({ data }) => setActor(data))
      } else {
         setActor(state)
      }
   }, [id, state])

   return (
      <div>
         {actor && <ActorDetails actor={actor} />}
      </div>
   );
};

export { SingleActorPage };