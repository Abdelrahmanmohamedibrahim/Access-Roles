import { NavLink } from "react-router-dom";

function Drawer({ user }) {
  return (
    <>
      <div className="drawer">
        {user == "user" && (
          <nav>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </nav>
        )}
        {user == "admin" && (
          <nav>
            <NavLink to="/users">User List</NavLink>
            <NavLink to="/adduser">Add User</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </nav>
        )}
      </div>
    </>
  );
}

export default Drawer;
