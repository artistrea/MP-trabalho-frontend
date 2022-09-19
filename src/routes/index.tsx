import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginpage";
import { ContactPage } from "../pages/ContactPage";
import RestaurantMenu from "../pages/RestaurantMenu";
import RestaurantOrders from "../pages/OrdersPage";
import { Admin } from "../pages/Admin";
import { AdminProducts } from "../pages/Admin/Products";
import { CreateProductPage } from "../pages/Admin/Products/create";
import { EditProductPage } from "../pages/Admin/Products/edit";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RestaurantMenu />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact_us" element={<ContactPage />} />
            <Route path="/orders/create" element={<div />} />
            <Route path="/orders" element={<RestaurantOrders />} />
            <Route path="/admin" element={<Admin />}>
                <Route path="products" element={<AdminProducts />} />
                <Route path="products/create" element={<CreateProductPage />} />
                <Route path="products/edit" element={<EditProductPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;

