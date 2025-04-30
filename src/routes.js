// src/routes.js
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
