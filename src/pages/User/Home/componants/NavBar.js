import { Link, useLocation } from "react-router-dom";
import logo from "../../../../img/logo/logo.png";

const NavBar = () => {
  const location = useLocation()
  const { pathname} = location;
  return (
    <>
      {pathname === "/login" || pathname === "/register" || pathname === "/" ? ("") :(
        <header>
          <div class="header-area">
            <div class="main-header header-sticky">
              <div class="container-fluid">
                <div class="row align-items-center">
                  {/* <!-- Logo --> */}
                  <div class="col-xl-2 col-lg-2 col-md-1">ٍ
                    <div class="logo">
                      <Link to={"/home"}>
                        <img src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div class="col-xl-10 col-lg-10 col-md-10">
                    <div class="menu-main d-flex align-items-center justify-content-end">
                      {/* <!-- Main-menu --> */}
                      <div class="main-menu f-right d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li>
                              <Link to={"/home"}>Home</Link>
                            </li>
                            {/* <li>
                            <Link to={"/about"}>About</Link>
                          </li> */}

                            <li>
                              <Link to={"/departs"}>Departments</Link>
                              <ul class="submenu">
                                <li>
                                  <Link to={"/departments?id=1"}>
                                    Dentistry
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/departments?id=2"}>
                                    Cardiology
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/departments?id=3"}>
                                    ENT Spitialists
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/departments?id=4"}>
                                    Neuroanatomy
                                  </Link>
                                </li>
                                <li>
                                  <Link to={"/departments?id=5"}>
                                    Blood Screening
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to={"/medicines"}>Medicines</Link>
                            </li>
                            <li>
                              <Link to={"/doctors"}> Doctors </Link>
                            </li>
                            {/* <li>
                            <a href="contact.html">Contact</a>
                          </li> */}
                          </ul>
                        </nav>
                      </div>
                      <div class="header-right-btn f-right d-none d-lg-block ml-30">
                        <Link to="/login" class="btn header-btn">
                            Logout
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      ) }
    </>
  );
};
export default NavBar;
