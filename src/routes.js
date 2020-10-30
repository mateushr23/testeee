import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProgressBar from "./components/circularProgress/ProgressBar";

const Login = lazy(() => import("./pages/login/Login"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Register = lazy(() => import("./pages/register/Register"));
const Adm = lazy(() => import("./pages/adm"));

const Routes = () => (
  <Router>
    <Suspense
      fallback={
        <div className="mt-5 pt-5">
          <ProgressBar />
        </div>
      }
    >
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/adm" component={Adm} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
