import { MenuFoldOutlined, SearchOutlined } from "@ant-design/icons/";
import { Layout } from 'antd';
import { useState } from "react";
import logoFold from "../../assets/Images/logo-fold.png";
import logo from "../../assets/Images/logo.png";
import GridLayout from '../../components/GridLayout';
import MenuItem from "../../components/MenuItem";
import Notify from "../../components/Notify";
import "./DefaultLayout.css";
const { Sider, Content, Footer } = Layout;
function DefaultLayout(props) {
    // set trạng thái đóng mở sidebar
    const [collapsed, setCollapsed] = useState(false);
    console.log(collapsed);
    
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
                      <MenuItem></MenuItem>
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