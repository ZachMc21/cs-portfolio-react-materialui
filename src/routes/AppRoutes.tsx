// src/routes/Routes.js
import { createBrowserRouter, Outlet } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import CSPortfolio from "../pages/CSPortfolio/CSPortfolio";
import Skills from "../pages/CSPortfolio/Skills";
import Projects from "../pages/CSPortfolio/Projects";
import Extras from "../pages/CSPortfolio/Extras";
import PhotographyPortfolio from "../pages/PhotographyPortfolio/PhotographyPortfolio";
import MusicDatabase from "../pages/MusicDatabase/MusicDatabase";
import TextRPG from "../pages/TextRPG/TextRPG";
import NotFound from "../pages/NotFound/NotFound";
 
// Define your routes here
// Format:
// {
// path: "/",
// element: <PageHere />,
// }
const router = createBrowserRouter([
  {
    path: "/", // URL path
    element: <Homepage />, // Component to render
  },
  {
    path: "/cs-portfolio",
		element: <Outlet />,
    errorElement: <NotFound />, // Handles errors in this route/children
		children: [
			{
				index: true,
				element: <CSPortfolio />,
			},
			{
				path: "/cs-portfolio/skills",
				element: <Skills />,
			},
			{
				path: "/cs-portfolio/projects",
				element: <Projects />,
			},
			{
				path: "/cs-portfolio/extras",
				element: <Extras />,
			}
		]
  },
  {
    path: "/photography-portfolio",
    element: <PhotographyPortfolio />,
  },
  {
    path: "/music-database",
    element: <MusicDatabase />,
  },
  {
    path: "/text-rpg",
    element: <TextRPG />,
  },
  {
    path: "*", // Catch-all for undefined paths
    element: <NotFound />,
  },
]);
 
export default router;