import { Outlet } from "react-router-dom";
import Navigation from "../component/navigation";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
