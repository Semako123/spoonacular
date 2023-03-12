import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import { Search, Result, NotFound } from "../Pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="search" element={<Search />}>
        <Route path=":id" element={<Result />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
