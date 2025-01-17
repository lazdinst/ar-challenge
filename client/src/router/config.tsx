import { Home, Settings } from "../pages";
import { RouteItem, RouteMap } from "./types";

export const routesMap: RouteMap = {
  HOME: "/",
  SETTINGS: "/settings",
};

export const routes: RouteItem[] = [
  {
    path: routesMap.HOME,
    name: "home",
    icon: "home",
    details: "Home",
    element: <Home />,
  },
  {
    path: routesMap.SETTINGS,
    name: "settings",
    icon: "cogs",
    details: "Settings",
    element: <Settings />,
  },
];
