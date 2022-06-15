import { useState, useEffect } from "react";
import { movieService } from "../../services/movieService";
import { SingleActor } from "../single-actor/single-actor";
import './movie-details.css'

const MovieDetails = ({ details }) => {
   const { id, title, poster_path,
      budget, genres, overview,
      release_date, revenue,
      runtime, vote_average, production_countries,

   } = details;

   const [video, setVideo] = useState(null);
   const [actors, setActors] = useState([]);
   const bg = movieService.w500Image(poster_path);

   useEffect(() => {
      movieService.getVideo(id).then(({ data }) => setVideo(data))
   }, [id])

   useEffect(() => {
      movieService.getActors(id).then(({ data }) => setActors(data.cast.slice(0, 7)))
   }, [id])

   let num = () => video.results.find(function (item, index, array) {
      return item.type === 'Trailer';
   });

   return (
      <div className="movie-details">
         <h1>{title}</h1>
         <div className="movie-details__container">
            <div className="poster_container">
               <img src={bg} alt="poster" className="movie-details__poster" />
               <p><b>Production countries</b>: {production_countries.map(item => ` ${item.name},`)}</p>
               <p><b>Release date</b>: {release_date}</p>
               <p><b>Budget</b>: {budget}$</p>
               <p><b>Revenue</b>: {revenue}$</p>
               <p><b>Genres</b>: {genres.map(item => ` ${item.name},`)}</p>
               <p><b>Runtime</b>: {runtime}m.</p>
               <p><b>Average vote</b>: {vote_average}</p>
            </div>
            <div className="video_container">
               {video && <iframe
                  src={`https://www.youtube.com/embed/${num().key}`}
                  width="800px"
                  height="500px"
                  title="video"></iframe>}
               <h2>Description of "{title}"</h2>
               <p>{overview}</p>
            </div>
         </div>
         <h2>Cast</h2>
         <div className="actors-list">
            {actors &&
               actors.map((actor) =>
                  <SingleActor key={actor.id} actor={actor} />)}
         </div>
      </div>
   );
};

export { MovieDetails };