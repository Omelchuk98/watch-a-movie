import { useForm } from 'react-hook-form';


const Search = () => {
   const { register, reset, handleSubmit } = useForm();
   return (
      <form>
         <div><input type='text' {...register} /></div>
      </form>
   );
};

export { Search };