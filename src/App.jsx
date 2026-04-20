import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/products/Products";
import Catogories from "./pages/categories/Catogories";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Dashboard />,
                },
                {
                    path: "/products",
                    element: <Products />,
                },
                {
                    path: "/categories",
                    element: <Catogories />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
