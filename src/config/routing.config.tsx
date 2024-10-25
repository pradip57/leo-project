import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayoutPage from "../pages/layouts/home.layout.pages";
import HomePage from "../pages/home/home.pages";
import AboutUs from "../pages/about-us/about-us.pages";
import NotFoundPage from "../pages/not-found/not-found.pages";
import ResourcesPage from "../pages/resources/resources.pages";

const RoutingConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingConfig;
