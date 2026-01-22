import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PageOne />} />
      <Route path="/two" element={<PageTwo />} />
      <Route path="/three" element={<PageThree />} />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
