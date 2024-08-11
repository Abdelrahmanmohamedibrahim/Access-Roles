import { Outlet } from "react-router-dom";
import Drawer from "./Drawer";

function Layout({ user }) {
  return (
    <div>
      <Drawer user={user} />
      <Outlet />
      <p>footer</p>
    </div>
  );
}

export default Layout;
