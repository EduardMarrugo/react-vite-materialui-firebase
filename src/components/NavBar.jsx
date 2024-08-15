import { NavLink } from "react-router-dom";

import { useUserContext } from "../utils/useUserContext";

const NavBar = () => {
  const { user, setUser } = useUserContext();

  const handleLogOut = () => {
    setUser(false);
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="btn btn-outline-primary" to="/">
          Login
        </NavLink>
        {user && (
          <>
            <NavLink className="btn btn-outline-primary" to="/dashboard">
              Dashboad
            </NavLink>
            <button className="btn btn-outline-danger" onClick={handleLogOut}>
              LogOut
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
