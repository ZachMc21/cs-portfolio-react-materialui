import { Switch } from "@mui/material";
import { Outlet, Router, Scripts } from "react-router";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import CSPortfolio from "./CSPortfolio";
import PhotographyPortfolio from "./PhotographyPortfolio";
import DnDoWolfWiki from "./DnDoWolfWiki";
import MusicDatabase from "./MusicDatabase";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot, type Container } from "react-dom/client";

import Enter from "./Enter";
import App from "./App";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Enter />}>
            <Route path="/cs-portfolio" element={<CSPortfolio />} />
            <Route path="/photography-portfolio" element={<PhotographyPortfolio />} />
            <Route path="/dndowolf-wiki" element={<DnDoWolfWiki />} />
            <Route path="/music-database" element={<MusicDatabase />} />
        </Route>
    )
);

const DOM: Container = document.createElement("root");
const root = createRoot(DOM);

root.render(<App />);

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
