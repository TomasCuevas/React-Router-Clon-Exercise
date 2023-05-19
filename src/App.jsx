//* pages *//
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { Page404 } from "./pages/404";

//* component *//
import { Route } from "./components/Route";
import { Router } from "./components/Router";
import { SearchPage } from "./pages/SearchPage";

const appRoutes = [{ path: "/search/:query", component: SearchPage }];

export const App = () => {
  return (
    <main>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Router>
    </main>
  );
};
