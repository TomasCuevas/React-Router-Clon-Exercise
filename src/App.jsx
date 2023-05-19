import { Suspense, lazy } from "react";

//* pages *//
const LazyAboutPage = lazy(() => import("./pages/About"));
const LazySearchPage = lazy(() => import("./pages/Search"));
const LazyHomePage = lazy(() => import("./pages/Home"));
const Page404 = lazy(() => import("./pages/404"));

//* component *//
import { Router, Route } from "./components";

const appRoutes = [
  { path: "/:lang/about", component: LazyAboutPage },
  { path: "/search/:query", component: LazySearchPage },
];

export const App = () => {
  return (
    <main>
      <Suspense fallback={<div>loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" component={LazyHomePage} />
          <Route path="/about" component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
};
