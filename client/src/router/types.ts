export type RoutePathTypes = "/" | "/settings";

export type RouteNameTypes = "home" | "settings";

export interface RouteMap {
  HOME: RoutePathTypes;
  SETTINGS: RoutePathTypes;
}

export interface RouteItem {
  path: RoutePathTypes;
  name: RouteNameTypes;
  icon: string;
  details: string;
  element: JSX.Element;
}
