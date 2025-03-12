import rocketImage from "../assets/img/undraw_rocket.svg";

const Navbar = () => {
  return (
    <>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
          <a class="nav-link" href="/">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div class="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li class="nav-item">
          <a class="nav-link" href="/buttons">
            <i class="fas fa-fw fa-cog"></i>
            <span>Components Buttons</span>
          </a>
        </li>

        {/* <li class="nav-item">
          <a class="nav-link" href="/cards">
            <i class="fas fa-fw fa-cog"></i>
            <span>Components Cards</span>
          </a>
        </li> */}

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li class="nav-item">
          <a class="nav-link" href="/colors">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Utilities Colors</span>
          </a>
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

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div class="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li class="nav-item">
          <a class="nav-link collapsed" href="/login">
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages Login</span>
          </a>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li class="nav-item">
          <a class="nav-link" href="/charts">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li class="nav-item">
          <a class="nav-link" href="/tables">
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div class="sidebar-card d-none d-lg-flex">
          <img
            class="sidebar-card-illustration mb-2"
            src={rocketImage}
            alt="rocket"
          />
          <p class="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            class="btn btn-success btn-sm"
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
