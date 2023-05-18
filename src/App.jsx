import { useState } from "react";

export const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo</p>
      <a href="/about">Ir a Sobre Nosotros</a>
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
      <a href="/">Ir a Home</a>
    </>
  );
};

export const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return (
    <main>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/about" && <AboutPage />}
    </main>
  );
};
