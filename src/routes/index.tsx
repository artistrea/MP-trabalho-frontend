import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginpage";
import { ContactPage } from "../pages/ContactPage";
import RestaurantMenu from "../pages/RestaurantMenu";
import RestaurantOrders from "../pages/OrdersPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RestaurantMenu />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact_us" element={<ContactPage />} />
            <Route path="/orders/create" element={<div />} />
            <Route path="/orders" element={<RestaurantOrders />} />
        </Routes>
    );
};

export default AppRoutes;

