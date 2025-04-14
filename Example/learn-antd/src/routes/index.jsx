import DefaultLayout from "../Layout/DefaultLayout";
import Authentication from "../pages/Authentication";
import Dashboard from "../pages/Dashboard";
// import Ecommerce from "../pages/Ecommerce";
// import Database from "../pages/Database";
// import Analytics from "../pages/Analytics";

// User pages
// import ListUser from "../pages/users/ListUser";
// import AddUser from "../pages/users/AddUser";
// import EditUser from "../pages/users/EditUser";
// import DeleteUser from "../pages/users/DeleteUser";
// import DetailUser from "../pages/users/DetailUser";

// Product pages
// import ListProduct from "../pages/products/ListProduct";
// import AddProduct from "../pages/products/AddProduct";
// import EditProduct from "../pages/products/EditProduct";
// import DeleteProduct from "../pages/products/DeleteProduct";
// import DetailProduct from "../pages/products/DetailProduct";

// Category pages
// import ListCategory from "../pages/categories/ListCategory";
// import AddCategory from "../pages/categories/AddCategory";
// import EditCategory from "../pages/categories/EditCategory";
// import DeleteCategory from "../pages/categories/DeleteCategory";
// import DetailCategory from "../pages/categories/DetailCategory";

export const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/authentication", element: <Authentication /> },

      // Ecommerce pages
    //   { path: "/ecommerce", element: <Ecommerce /> },
    //   { path: "/database", element: <Database /> },
    //   { path: "/analytics", element: <Analytics /> },

      // Users
    //   { path: "/users/list", element: <ListUser /> },
    //   { path: "/users/add", element: <AddUser /> },
    //   { path: "/users/edit", element: <EditUser /> },
    //   { path: "/users/delete", element: <DeleteUser /> },
    //   { path: "/users/detail", element: <DetailUser /> },

      // Products
    //   { path: "/products/list", element: <ListProduct /> },
    //   { path: "/products/add", element: <AddProduct /> },
    //   { path: "/products/edit", element: <EditProduct /> },
    //   { path: "/products/delete", element: <DeleteProduct /> },
    //   { path: "/products/detail", element: <DetailProduct /> },

      // Categories
    //   { path: "/categories/list", element: <ListCategory /> },
    //   { path: "/categories/add", element: <AddCategory /> },
    //   { path: "/categories/edit", element: <EditCategory /> },
    //   { path: "/categories/delete", element: <DeleteCategory /> },
    //   { path: "/categories/detail", element: <DetailCategory /> },
    ],
  },
];
