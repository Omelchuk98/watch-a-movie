import { useState, useEffect } from "react";
import { movieService } from "../../services/movieService";
const MovieDetails = ({ details }) => {
   const { id, title, poster_path } = details;
   const [video, setVideo] = useState(null);
   const bg = movieService.w500Image(poster_path);
   useEffect(() => {
      movieService.getVideo(id).then(({ data }) => setVideo(data))
   }, [id])

   return (
      <div>
         <img src={bg} alt="poster" />
         <p>{title}</p>
         {video && <iframe
            src={`https://www.youtube.com/embed/${video.results[1].key}`}
            width="500px"
            height="300px"
            title="video"></iframe>}
      </div >
   );
};

export { MovieDetails };