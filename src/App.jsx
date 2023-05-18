//* pages *//
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";

//* component *//
import { Router } from "./components/Router";
import { SearchPage } from "./pages/SearchPage";

export const App = () => {
  return (
    <main>
      <Router
        routes={[
          { path: "/", Component: HomePage },
          { path: "/about", Component: AboutPage },
          { path: "/search/:query", Component: SearchPage },
        ]}
      />
    </main>
  );
};
