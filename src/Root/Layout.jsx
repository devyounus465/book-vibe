import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
