import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { TVDetails } from '../../components/index';
import { movieService } from "../../services/movieService";

const SingleTVPage = () => {
   const { state } = useLocation;
   const [details, setDetails] = useState(state);
   const { id } = useParams();
   useEffect(() => {
      if (!state) {
         movieService.getTVById(id).then(({ data }) => setDetails(data))
      } else {
         setDetails(state)
      }
   }, [id, state])

   return (
      <div>
         {details && <TVDetails details={details} />}
      </div>
   );
};

export { SingleTVPage };