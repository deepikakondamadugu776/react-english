import { StrictMode } from "react";
import { Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import About from "./Components/About/About.jsx";
import Home from "./Components/Home/Home.jsx";
import App from "./App.jsx";
import Company from "./Components/Company/Company.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Github from "./Components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about/" element={<About />} />
      <Route path="company/" element={<Company />} />
      <Route path="github/" element={<Github />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
