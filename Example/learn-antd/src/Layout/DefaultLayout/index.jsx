import { AppstoreAddOutlined, CloudServerOutlined, CompassOutlined, ControlOutlined, DashboardOutlined, MenuFoldOutlined, PieChartOutlined, SearchOutlined } from "@ant-design/icons/";
import { Layout, Menu } from 'antd';
import { useState } from "react";
import logoFold from "../../assets/Images/logo-fold.png";
import logo from "../../assets/Images/logo.png";
import GridLayout from '../../components/GridLayout';
import Notify from "../../components/Notify";
import "./DefaultLayout.css";
const { Sider, Content, Footer } = Layout;
function DefaultLayout(props) {
    // set trạng thái đóng mở sidebar
    const [collapsed, setCollapsed] = useState(false);
    console.log(collapsed);
    
    // khởi tạo mảng chứa các item của menu
    const items = [
        {
            key: "1",
            icon: <DashboardOutlined />,
            label:"Dashboard",
            children: [
                {
                    key: "default",
                    label: "Default"
                },
                {
                    key: "cmr",
                    label: "CMR"
                },
                {
                    key: "ecommerces",
                    label: "E-Commerce"
                },
                {
                    key: "project",
                    label: "Project"
                },
            ]
        },
        {
            key: "2",
            icon: <AppstoreAddOutlined />,
            label:"Apps",
            children: [
                {
                    key: "chat",
                    label: "Chat"
                },
                {
                    key: "manager",
                    label: "File Manager"
                },
                {
                    key: "mail",
                    label: "Mail"
                },
                {
                    key: "projects",
                    label: "Projects",
                    children: [
                        {
                            key: "pj-list",
                            label: "Projects List",
                        },{
                            key: "pj-detail",
                            label: "Projects Detail",
                        }
                    ]
                },
            ]
        },
        {
            key: "3",
            icon: <CompassOutlined />,
            label:"Components",
            children: [
                {
                    key: "general",
                    label: "General"
                },
                {
                    key: "navigation",
                    label: "Navigation"
                },
                {
                    key: "data",
                    label: "Data Entry"
                },
                {
                    key: "feedback",
                    label: "Feedback",
                    children: [
                        {
                            key: "mess",
                            label:"Message"
                        },
                        {
                            key: "alert",
                            label:"Alert"
                        },
                        {
                            key: "skeleton",
                            label:"Skeleton"
                        },
                    ]
                },
                {
                    key: "others",
                    label: "Others"
                }
            ]
        },
        {
            key: "4",
            icon: <PieChartOutlined />,
            label:"Chart"
        },
        {
            key: "5",
            icon: <ControlOutlined />,
            label:"Pages",
            children: [
                {
                    key: "profile",
                    label: "Profile"
                },
                {
                    key: "setting",
                    label: "Setting"
                },
                {
                    key: "account",
                    label: "Accounts"
                },
            ]
        },
        {
            key: "6",
            icon: <CloudServerOutlined />,
            label:"Authentication",
            children: [
                {
                    key: "login",
                    label: "Login"
                },
                {
                    key: "signup",
                    label: "Sign Up"
                },
                {
                    key: "error",
                    label: "Error"
                }
            ]
        }
    ]
    return (
        <>
            <Layout className="layout-default">
                <header className="layout-header">
                    {/* Nếu đóng thì thì false và sử dụng header-logo và ngược lại*/}
                    <div className={"header-logo " + (collapsed && "header-logo--collapsed") }>
                    {/* Nếu đóng thì hiển thị logoFold, ngược lại thì hiển thị logo */}
                        <img src={collapsed ?  logoFold : logo} alt="Logo" /> 
                    </div>
                    <div className="header-navbar">
                        <div className="header-nav--left">
                            <div className="header-collapse" onClick={()=>setCollapsed(!collapsed)}>
                                <MenuFoldOutlined />
                            </div>
                            <div className="header-search">
                                <SearchOutlined />
                        </div>
                        </div>
                        <div className="header-nav--right">
                            <Notify/>
                        </div>
                    </div>
                </header>
                <Layout >
                    {/* thuộc tính collapsed: true -> mở và ngược lại */}
                    <Sider theme="light" className="layout-sider" collapsed={collapsed}>
                        <Menu mode="inline" items={items} defaultOpenKeys={['default']} defaultSelectedKeys={['cmr']}>

                        </Menu>
                    </Sider>

                        <Content className="layout-content">
                            <GridLayout/>
                    </Content>
                    
                    </Layout>
            </Layout>
               
        </>
    );
}

export default DefaultLayout;