import { useEffect, useState } from "react";

//* consts *//
import { EVENTS } from "./consts";

function navigate(href) {
  window.history.pushState({}, "", href);

  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo</p>
      <button onClick={() => navigate("/about")}>Ir a Sobre Nosotros</button>
    </>
  );
};

export const AboutPage = () => {
  return (
    <>
      <h3></h3>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1175252084901462016/suUDhzx-_400x400.jpg"
          alt="me photo"
        />
      </div>
      <p>
        Hola! Me llamo Tomás Cuevas y estoy creando un clon de React Router.
      </p>
      <button onClick={() => navigate("/")}>Ir a Home</button>
    </>
  );
};

export const App = () => {
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

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
};
