import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./features/landing-page/page";
import SignInPage from "./features/sign-in/page";
import URL from "./constant/url";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path={URL.HOME} element={<LandingPage />} />
        <Route path={URL.SIGNIN} element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
