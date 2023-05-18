//* pages *//
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";

//* component *//
import { Router } from "./components/Router";

export const App = () => {
  return (
    <main>
      <Router
        routes={[
          { path: "/", Component: HomePage },
          { path: "/about", Component: AboutPage },
        ]}
      />
    </main>
  );
};
