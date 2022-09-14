import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ContactPage } from "../pages/ContactPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<div>In development...</div>} />
      <Route path="/ratings" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
