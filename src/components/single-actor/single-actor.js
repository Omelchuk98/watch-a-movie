import { movieService } from "../../services/movieService";
import './single-actor.css';


const SingleActor = ({ actor }) => {
   const { character, name, profile_path } = actor;
   const bg = movieService.w500Image(profile_path);
   return (
      <div className="actor-card">
         <img src={bg} alt="photo" className='actor-img' />
         <div className="actor-card__name">
            <p><b>Character</b>: <br /> {character}</p>
            <p><b>Name</b>: <br /> {name}</p>
         </div>
      </div >

   );
};

export { SingleActor };