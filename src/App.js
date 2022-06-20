import { Route, Routes, Navigate } from "react-router-dom";

import { MainLayout } from "./layouts";
import {
   HomePage, TVPage, MoviesPage, NotFoundPage,
   SingleMoviePage, SingleActorPage, SingleTVPage
} from './pages';

function App() {
   return (
      <Routes>
         <Route path={'/'} element={<MainLayout />}>
            <Route index element={<Navigate to={"/watch-a-movie"} />} />
            <Route path={"watch-a-movie"} element={<HomePage />} />
            <Route path={"movie"} element={<MoviesPage />} />
            <Route path={"movie/:id"} element={<SingleMoviePage />} />
            <Route path={"actor/:id"} element={<SingleActorPage />} />
            <Route path={"tv"} element={<TVPage />} />
            <Route path={"tv/:id"} element={<SingleTVPage />} />
            <Route path={"actor/:id"} element={<SingleActorPage />} />
            <Route path={"*"} element={<NotFoundPage />} />
         </Route>
      </Routes>

   );
}
export default App;
