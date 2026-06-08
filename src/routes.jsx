import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Burger from "./Burger";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
  {
    path: "burger",
    element: <Burger />,
  },
];

export default routes;
