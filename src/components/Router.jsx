import { Children, useEffect, useState } from "react";
import { match } from "path-to-regexp";

//* consts *//
import { EVENTS } from "../consts";

export const Router = ({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <></>,
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  //? obtenemos las propiedades de los children
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === "Route";

    return isRoute ? props : null;
  }).filter(Boolean);

  //? concatenamos las rutas por argumento y por children
  const routesToUse = routes.concat(routesFromChildren);

  //? iteramos sobre todas las rutas y las guardamos en un objeto
  let routeParams = {};
  const Page =
    routesToUse.find(({ path }) => {
      if (path === currentPath) return true;

      const matcherUrl = match(path, { decode: decodeURIComponent });
      const matched = matcherUrl(currentPath);

      if (!matched) return false;

      // guardar los parametros de la url que eran dinamicos
      routeParams = matched.params;
      return true;
    })?.component || DefaultComponent;

  return <Page params={routeParams} />;
};
