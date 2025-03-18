import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div className="d-flex">
        <Navbar />
        <div className="content-wrapper" style={{ flex: 1 }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
