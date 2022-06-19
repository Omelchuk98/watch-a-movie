import { useState, useEffect } from "react";
import { movieService } from "../../services/movieService";
import { SingleActor } from "../single-actor/single-actor";

import undef from './image-not-found.png';

const TVDetails = ({ details }) => {
   const { id, created_by, episode_run_time, first_air_date, genres,
      name, number_of_episodes, number_of_seasons, overview,
      poster_path, seasons, status, tagline, vote_average, production_countries, backdrop_path
   } = details;
   const [video, setVideo] = useState(null);
   const [actors, setActors] = useState([]);
   const bg = movieService.w500Image(poster_path || backdrop_path);

   useEffect(() => {
      movieService.getVideoTV(id).then(({ data }) => setVideo(data.results.find(item => item.type === 'Trailer')))
   }, [id])

   useEffect(() => {
      movieService.getActorsTV(id).then(({ data }) => setActors(data.cast.slice(0, 7)))
   }, [id])


   return (
      <div className="movie-details">
         <h1>{name}</h1>
         <h3>"{tagline}"</h3>
         <div className="movie-details__container">
            <div className="poster_container">
               <img src={backdrop_path === null && poster_path === null ? undef : bg} alt="poster" className="movie-details__poster" />
               <p><b>Seasons</b>: {number_of_seasons}</p>
               <p><b>Episodes</b>: {number_of_episodes}</p>
               <p><b>Status</b>: {status}</p>
               <p><b>Created by</b>: {created_by.map(item => ` ${item.name},`)}</p>
               <p><b>Production countries</b>: {production_countries.map(item => ` ${item.name},`)}</p>
               <p><b>Release date</b>: {first_air_date}</p>
               <p><b>Genres</b>: {genres.map(item => ` ${item.name},`)}</p>
               <p><b>Runtime</b>: {episode_run_time}m.</p>
               <p><b>Average vote</b>: {vote_average}</p>
            </div>
            {<div className="video_container">
               {video && <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  width="800px"
                  height="500px"
                  title="video"></iframe>}
               <h2>Description of "{name}"</h2>
               <p>{overview}</p>
            </div>}
         </div>
         <h2>Cast</h2>
         {<div className="actors-list">
            {actors &&
               actors.map((actor) =>
                  <SingleActor key={actor.id} actor={actor} />)}
         </div>}
      </div>
   );
};

export { TVDetails };