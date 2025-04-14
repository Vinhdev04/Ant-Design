import {
    DashboardOutlined,
    ProductOutlined,
    SettingOutlined,
    UnorderedListOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

function MenuItem() {
  const location = useLocation(); // lấy đường dẫn hiện tại
  const selectedKey = location.pathname;

  const items = [
    {
      label: <Link to="/ecommerce">Ecommerce</Link>,
      key: "/ecommerce",
      icon: <DashboardOutlined />,
      children: [
        { label: <Link to="/">Dashboard</Link>, key: "/" },
        { label: <Link to="/database">Database</Link>, key: "/database" },
        { label: <Link to="/analytics">Analytics</Link>, key: "/analytics" },
      ],
    },
    {
      label: "Users",
      key: "users",
      icon: <UserOutlined />,
      children: [
        { label: <Link to="/users/list">List User</Link>, key: "/users/list" },
        { label: <Link to="/users/add">Add User</Link>, key: "/users/add" },
        { label: <Link to="/users/edit">Edit User</Link>, key: "/users/edit" },
        { label: <Link to="/users/delete">Delete User</Link>, key: "/users/delete" },
        { label: <Link to="/users/detail">Detail User</Link>, key: "/users/detail" },
      ],
    },
    {
      label: "Products",
      key: "products",
      icon: <ProductOutlined />,
      children: [
        { label: <Link to="/products/list">List Product</Link>, key: "/products/list" },
        { label: <Link to="/products/add">Add Product</Link>, key: "/products/add" },
        { label: <Link to="/products/edit">Edit Product</Link>, key: "/products/edit" },
        { label: <Link to="/products/delete">Delete Product</Link>, key: "/products/delete" },
        { label: <Link to="/products/detail">Detail Product</Link>, key: "/products/detail" },
      ],
    },
    {
      label: "Category",
      key: "category",
      icon: <UnorderedListOutlined />,
      children: [
        { label: <Link to="/categories/list">List Category</Link>, key: "/categories/list" },
        { label: <Link to="/categories/add">Add Category</Link>, key: "/categories/add" },
        { label: <Link to="/categories/edit">Edit Category</Link>, key: "/categories/edit" },
        { label: <Link to="/categories/delete">Delete Category</Link>, key: "/categories/delete" },
        { label: <Link to="/categories/detail">Detail Category</Link>, key: "/categories/detail" },
      ],
    },
    {
      label: <Link to="/authentication">Authentication</Link>,
      key: "/authentication",
      icon: <SettingOutlined />,
    },
  ];

  return (
    <Menu
      mode="inline"
      items={items}
      selectedKeys={[selectedKey]} // chọn item theo route hiện tại
      defaultOpenKeys={['/ecommerce', 'users', 'products', 'category']}
    />
  );
}

export default MenuItem;
