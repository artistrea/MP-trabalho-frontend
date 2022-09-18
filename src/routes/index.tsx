import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<div>In development...</div>} />
    </Routes>
  );
};

export default AppRoutes;
