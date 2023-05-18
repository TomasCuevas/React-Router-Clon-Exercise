import { useEffect, useState } from "react";
import { match } from "path-to-regexp";

//* page *//
import { Page404 } from "../pages/404";

//* consts *//
import { EVENTS } from "../consts";

export const Router = ({
  routes = [],
  defaultComponent: DefaultComponent = () => <Page404 />,
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

  let routeParams = {};

  const Page =
    routes.find(({ path }) => {
      if (path === currentPath) return true;

      const matcherUrl = match(path, { decode: decodeURIComponent });
      const matched = matcherUrl(currentPath);

      if (!matched) return false;

      // guardar los parametros de la url que eran dinamicos
      routeParams = matched.params;
      return true;
    })?.Component || DefaultComponent;

  return <Page params={routeParams} />;
};
