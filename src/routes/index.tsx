import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginpage";
import { ContactPage } from "../pages/ContactPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/ratings" element={<ContactPage />} />
        </Routes>
    );
};

export default AppRoutes;

