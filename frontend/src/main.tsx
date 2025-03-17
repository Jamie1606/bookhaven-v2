import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./features/public/landing-page/page";
import PublicLayout from "./features/public/layout";
import SignInPage from "./features/public/sign-in/page";
import URL from "./constant/url";
import SignUpPage from "./features/public/sign-up/page";
import SearchPage from "./features/public/search/page";
import BrowsePage from "./features/public/browse/page";
import LatestPage from "./features/public/latest/page";
import PopularPage from "./features/public/popular/page";
import FilterPage from "./features/public/filter/page";
import ProductDetailPage from "./features/public/product-detail/page";
import NotFoundPage from "./features/public/not-found";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route element={<SignInPage />} path={URL.SIGNIN} />
          <Route element={<SignUpPage />} path={URL.SIGNUP} />
          <Route element={<SearchPage />} path={URL.SEARCH} />
          <Route element={<BrowsePage />} path={URL.BROWSE} />
          <Route element={<LatestPage />} path={URL.LATEST} />
          <Route element={<PopularPage />} path={URL.POPULAR} />
          <Route element={<FilterPage />} path={URL.FILTER} />
          <Route element={<ProductDetailPage />} path={`${URL.PRODUCTDETAIL}/:productID`} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
