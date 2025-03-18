import { NavLink } from "react-router-dom";
import rocketImage from "../assets/img/undraw_rocket.svg";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../redux/user/user.action";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleLogout = () => {
    // console.log("yes logged out");
    dispatch(setLogout());
  };

  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <NavLink
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </NavLink>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="btn btn-danger mt-3">
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="btn btn-primary mt-3">
            Login
          </NavLink>
        )}

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <NavLink className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item">
          <NavLink className="nav-link" to="/buttons">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components Buttons</span>
          </NavLink>
        </li>

        {/* <li class="nav-item">
          <a class="nav-link" href="/cards">
            <i class="fas fa-fw fa-cog"></i>
            <span>Components Cards</span>
          </a>
        </li> */}

        <li className="nav-item">
          <NavLink className="nav-link" to="/colors">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities Colors</span>
          </NavLink>
        </li>

        {/* <li class="nav-item">
          <a class="nav-link" href="/borders">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Utilities Borders</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/animations">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Utilities Animations</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/other">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Utilities Other</span>
          </a>
        </li> */}

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Addons</div>

        <li className="nav-item">
          <NavLink className="nav-link collapsed" to="/login">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages Login</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/charts">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/tables">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </NavLink>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>

        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src={rocketImage}
            alt="rocket"
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
