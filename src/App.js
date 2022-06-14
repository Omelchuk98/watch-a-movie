import { Route, Routes, Navigate } from "react-router-dom";

import { MainLayout } from "./layouts";
import {
   HomePage, TVPage, MoviesPage, NotFoundPage,
   SingleMoviePage, SingleActorPage
} from './pages';

function App() {
   return (
      <Routes>
         <Route path={'/'} element={<MainLayout />}>
            <Route index element={<Navigate to={"/home"} />} />
            <Route path={"home"} element={<HomePage />} />
            <Route path={"movie"} element={<MoviesPage />} />
            <Route path={"movie/:id"} element={<SingleMoviePage />} />
            <Route path={"movie/:id/:id"} element={<SingleActorPage />} />
            <Route path={"tv"} element={<TVPage />} />
            <Route path={"*"} element={<NotFoundPage />} />
         </Route>
      </Routes>

   );
}
export default App;
