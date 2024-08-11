import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function RoleAccess({ roles, user }) {
  console.log(roles, user);
  return roles.includes(user) ? <Outlet /> : <p>wrong</p>;
}

export default RoleAccess;
