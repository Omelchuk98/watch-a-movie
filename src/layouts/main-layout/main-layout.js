import { Outlet } from "react-router-dom";
import { Footer } from "../../components";

import { Header } from "../../components/header/header";

const MainLayout = () => {
   return (
      <div>
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export { MainLayout };