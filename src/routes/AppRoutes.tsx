// src/routes/Routes.js
import { createBrowserRouter, Outlet } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import NotFound from "../pages/NotFound/NotFound";

import CSPortfolio from "../pages/CSPortfolio/CSHome";
import Skills from "../pages/CSPortfolio/Skills";
import Projects from "../pages/CSPortfolio/Projects";
import Extras from "../pages/CSPortfolio/Extras";
//import Jobs from "../pages/CSPortfolio/Jobs";

import PhotographyPortfolio from "../pages/PhotographyPortfolio/PhotographyPortfolio";
import PublishedWorks from "../pages/PhotographyPortfolio/PublishedWorks";
import CompletePhotoGallery from "../pages/PhotographyPortfolio/CompletePhotoGallery";

import MusicDatabase from "../pages/MusicDatabase/MusicDatabase";
import TextRPG from "../pages/TextRPG/TextRPG";

 
// Define your routes here
// Format:
// {
// path: "/",
// element: <PageHere />,
// }
const router = createBrowserRouter([
  {
    path: "/cs-portfolio-react-materialui", // URL path
    element: <Homepage />, // Component to render
  },
  {
    path: "/cs-portfolio-react-materialui/cs-portfolio",
    element: <Outlet />,
    errorElement: <NotFound />, // Handles errors in this route/children
		children: [
			{
				index: true,
				element: <CSPortfolio />,
			},
			{
				path: "/cs-portfolio-react-materialui/cs-portfolio/skills",
				element: <Skills />,
			},
			{
				path: "/cs-portfolio-react-materialui/cs-portfolio/projects",
				element: <Projects />,
			},
			{
				path: "/cs-portfolio-react-materialui/cs-portfolio/extras",
				element: <Extras />,
			}
		]
  },
  {
    path: "/cs-portfolio-react-materialui/photography-portfolio",
    element: <Outlet />,
    errorElement: <NotFound />, // Handles errors in this route/children
		children: [
			{
				index: true,
				element: <PhotographyPortfolio />,
			},
			{
				path: "/cs-portfolio-react-materialui/photography-portfolio/published",
				element: <PublishedWorks />,
			},
			{
				path: "/cs-portfolio-react-materialui/photography-portfolio/gallery",
				element: <CompletePhotoGallery />,
			},
		]
  },
  {
    path: "/cs-portfolio-react-materialui/music-database",
    element: <MusicDatabase />,
  },
  {
    path: "/cs-portfolio-react-materialui/text-rpg",
    element: <TextRPG />,
  },
  {
    path: "*", // Catch-all for undefined paths
    element: <NotFound />,
  },
]);
 
export default router;