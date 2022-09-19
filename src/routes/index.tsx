import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginpage";
import { ContactPage } from "../pages/ContactPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact_us" element={<ContactPage />} />
            <Route path="/orders/create" element={<div />} />
            <Route path="/orders" element={<div />} />
        </Routes>
    );
};

export default AppRoutes;

