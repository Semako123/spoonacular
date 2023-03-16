import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import { Search, Result, NotFound, Cuisines, Recipe } from "../Pages";
import { homeLoader } from "../containers/Random/Random";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />} loader={homeLoader} />
      <Route path="search" element={<Search />}>
        <Route path="result" element={<Result />} />
      </Route>
      <Route path="cuisines" element={<Cuisines />} />
      <Route path="recipe/:id" element={<Recipe />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
