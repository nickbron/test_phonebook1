import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Appbar from "./Componets/AppBar/AppBar";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeView = lazy(() => import("./Views/HomeView/HomeView"));
const ContactsView = lazy(() => import("./Views/ContactsView/ContactsView"));
const AboutView = lazy(() => import("./Views/AboutView/AboutView"));
const NotFoundView = lazy(() => import("./Views/NotFoundView/NotFoundView"));

export default function App() {
  return (
    <>
      <Appbar />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/test_phonebook1" exact>
            <HomeView />
          </Route>
          <Route path="/contacts" exact>
            <ContactsView />
          </Route>

          <Route path="/about">
            <AboutView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
