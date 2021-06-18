import React from 'react'
import { UserAuth } from "./hooks/auth-hooks";
import Login from "./pages/login";
import { Route, BrowserRouter } from "react-router-dom";
import { Authcontext } from "./context/auth-context";
import NavBar from "./components/navBar";
import ListeAtelier from './pages/atelier/liste-atelier';
import AjoutAtelier from './pages/atelier/ajout-atelier';
import UpdateAtelier from './pages/atelier/update-atelier';
import DrawerMenu from "./components/drawerMenu";


function App() {
  const { token, login, logout, userId } = UserAuth();

  let routes;
  if (token) {
    routes = (
      <React.Fragment>
        <Route path="/" exact component={ListeAtelier} />
        <Route path="/ajout-atelier"  component={AjoutAtelier} />
        <Route path="/update-atelier/:id"  component={UpdateAtelier} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" exact component={Login} />
      </React.Fragment>
    );
  }
  return (
    <div>
      <Authcontext.Provider
        value={{ userId: userId, token: token, login: login, logout: logout }}
      >
        <BrowserRouter>
        {token && <DrawerMenu content={routes} />}
          {!token && routes}
        </BrowserRouter>
      </Authcontext.Provider>
    </div>
  );
}

export default App;
