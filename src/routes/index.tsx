import React, { lazy, Suspense } from "react";
import { Switch, Route } from 'react-router-dom';
// import { Dashboard } from "../pages/Dashboard";
// import { Repo } from "../pages/Repo";

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Repo = lazy(() => import('../pages/Repo'));

export const Routes: React.FC = () => {
  return (
    <Suspense fallback={'Carregando'}>
      <Switch>
        <Route component={Dashboard} path="/" exact/>
        <Route component={Repo} path="/repositories/:repository+" />
      </Switch>
    </Suspense>
  );
};
