import { Switch } from "@mui/material";
import { Outlet, Router, Scripts } from "react-router";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import CSPortfolio from "./pages/CSPortfolio";
import PhotographyPortfolio from "./pages/PhotographyPortfolio";
import DnDoWolfWiki from "./pages/DnDoWolfWiki";
import MusicDatabase from "./pages/MusicDatabase";
import React from "react";
import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client";

import Enter from "./Enter";
import App from "./App";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Enter />}>
			<Route path="/cs-portfolio" element={<CSPortfolio />} />
			<Route path="/photography-portfolio" element={<PhotographyPortfolio />} />
			<Route path="/dndowolf-wiki" element={<DnDoWolfWiki />} />
			<Route path="/music-database" element={<MusicDatabase />} />
			<Route path="" element={<Enter />} />
		</Route>
	)
);

const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<App />
	</React.StrictMode>
);

/*
export default function App() {
	return (
		<html>
			<head>
				<link rel="icon" href="data:image/x-icon;base64,AA" />
			</head>
			<body>
				<Router>
						<Switch>
								<Route exact path="/cs-portfolio" component={CSPortfolio} />
								<Route exact path="/photography-portfolio" component={PhotographyPortfolio} />
								<Route exact path="/dndowolf-wiki" component={DnDoWolfWiki} />
								<Route exact path="/music-database" component={MusicDatabase} />
								<Route path="/" component={Enter} />
						</Switch>
				</Router>
			</body>
		</html>
	);
}
	*/
