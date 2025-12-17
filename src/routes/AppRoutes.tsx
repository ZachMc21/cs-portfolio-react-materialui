// src/routes/Routes.js
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";
 
// Define your routes here
const router = createBrowserRouter([
  {
    path: "/", // URL path
    element: <Home />, // Component to render
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*", // Catch-all for undefined paths
    element: <NotFound />,
  },
]);
 
export default router;