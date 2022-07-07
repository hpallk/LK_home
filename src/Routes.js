import React from "react";
import LKHome from "pages/LKHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/lkhome" element={<LKHome />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
