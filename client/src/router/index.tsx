import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./config";

const Router: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Router;
