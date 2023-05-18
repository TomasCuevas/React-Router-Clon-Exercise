import { useEffect, useState } from "react";

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

  const Page =
    routes.find(({ path }) => path === currentPath)?.Component ||
    DefaultComponent;

  return <Page />;
};
