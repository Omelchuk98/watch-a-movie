import { movieService } from "../../services/movieService";

import './actor-details.css';
import undef from './no-user.jpg';

const ActorDetails = ({ actor }) => {
   const { name, biography, birthday,
      deathday, place_of_birth, profile_path } = actor;
   const bg = movieService.w500Image(profile_path);
   return (
      <div className="actor-details__wrapper">
         <div className='actor-details__container'>
            <img src={profile_path === null ? undef : bg} alt="photo" className='actor-details__photo' />
            <div className='actor-details__details'>
               <h1>{name} </h1>
               <p><b>Date of birth</b>: {birthday}</p>
               {deathday && deathday}
               <p><b>Place of birth</b>: {place_of_birth}</p>
               <h2>Biography</h2>
               <p>{biography}</p>
            </div>
         </div>
      </div>
   );
};

export { ActorDetails };