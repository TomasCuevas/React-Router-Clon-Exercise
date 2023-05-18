import { useEffect, useState } from "react";

const NAVIGATION_EVENT = "pushstate";

function navigate(href) {
  window.history.pushState({}, "", href);

  const navigationEvent = new Event(NAVIGATION_EVENT);
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

    window.addEventListener(NAVIGATION_EVENT, onLocationChange);

    return () => window.removeEventListener(NAVIGATION_EVENT, onLocationChange);
  }, []);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
};
