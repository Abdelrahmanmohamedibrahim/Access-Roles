import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import Layout from "./Layout";
import RoleAccess from "./RoleAccess";
import Dasboard from "./Dasboard";
import UserList from "./UserList";
import AddUser from "./AddUser";
function App() {
  const routeConfigs = [
    {
      roles: ["user"],
      paths: [{ path: "/dashboard", component: <Dasboard /> }],
    },
    {
      roles: ["admin"],
      paths: [
        { path: "/users", component: <UserList /> },
        { path: "/adduser", component: <AddUser /> },
        { path: "/dashboard", component: <Dasboard /> },
      ],
    },
  ];
  const [currentUser] = useLocalStorage("sara", "admin");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={currentUser} />}>
          {routeConfigs.map((routeConfig, index) => (
            <Route
              key={index}
              element={
                <RoleAccess roles={routeConfig.roles} user={currentUser} />
              }
            >
              {routeConfig.paths.map((pathConfig, pathIndex) => (
                <Route
                  key={pathIndex}
                  path={pathConfig.path}
                  element={pathConfig.component}
                />
              ))}
            </Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
