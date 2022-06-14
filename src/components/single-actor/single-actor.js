import { useNavigate } from "react-router-dom";
import { movieService } from "../../services/movieService";
import './single-actor.css';


const SingleActor = ({ actor }) => {
   const { character, name, profile_path, id } = actor;
   const bg = movieService.w500Image(profile_path);
   const navigate = useNavigate();
   return (
      <div className="actor-card" onClick={() => navigate(`${id}`)}>
         <img src={bg} alt="photo" className='actor-img' />
         <div className="actor-card__name">
            <p><b>Character</b>: <br /> {character}</p>
            <p><b>Name</b>: <br /> {name}</p>
         </div>
      </div >

   );
};

export { SingleActor };