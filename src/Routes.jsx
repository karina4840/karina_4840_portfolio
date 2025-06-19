import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import Header from "components/ui/Header";
import NotFound from "pages/NotFound";
import UnderMaintenance from "pages/UnderMaintenance";
import Homepage from "pages/homepage";
import ExperiencePage from "pages/experience";
import ProjectShowcaseInteractiveGallery from "pages/project-showcase";
import ConnectionHubContactSocial from "pages/contact-section";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Header />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/project-showcase" element={<UnderMaintenance />} />
          <Route
            path="/contact-section"
            element={<ConnectionHubContactSocial />}
          />

          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
