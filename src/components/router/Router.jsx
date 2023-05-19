import { Children, useEffect, useState } from "react";
import { match } from "path-to-regexp";

//* utils *//
import { getCurrentPath } from "../../utils";

//* consts *//
import { EVENTS } from "../../consts";

export const Router = ({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <></>,
}) => {
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {};

  //? obtenemos las propiedades de los children
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type;
    const isRoute = name === "Route";

    return isRoute ? props : null;
  });

  //? concatenamos las rutas por argumento y por children
  const routesToUse = routes.concat(routesFromChildren).filter(Boolean);
  console.log(routesToUse);

  //? iteramos sobre todas las rutas y las guardamos en un objeto
  const Page =
    routesToUse.find(({ path }) => {
      if (path === currentPath) return true;

      // hemos usado path-to-regexp
      // para poder detectar rutas dinámicas como por ejemplo
      // /search/:query <- :query es una ruta dinámica
      const matcherUrl = match(path, { decode: decodeURIComponent });
      const matched = matcherUrl(currentPath);
      if (!matched) return false;

      // guardar los parámetros de la url que eran dinámicos
      // y que hemos extraído con path-to-regexp
      // por ejemplo, si la ruta es /search/:query
      // y la url es /search/javascript
      // matched.params.query === 'javascript'
      routeParams = matched.params;
      return true;
    })?.component || DefaultComponent;

  return <Page params={routeParams} />;
};
