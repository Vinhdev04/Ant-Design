import { BellOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import React from "react";
import "../.././Layout/DefaultLayout/DefaultLayout.css";

function Notify(props) {
  const items = [
        {
        label: (
            <a
            href="https://www.antgroup.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            1st menu item
            </a>
        ),
        key: "0",
        },
        {
        label: (
            <a
            href="https://www.aliyun.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            2nd menu item
            </a>
        ),
        key: "1",
        },
        {
        type: "divider",
        },
        {
        label: "3rd menu item",
        key: "3",
        },
    ];

    return (
        <Dropdown menu={{ items }} trigger={["click"]}>
        <div className="header-bell">
            <BellOutlined />
        </div>
        </Dropdown>
    );
}

export default Notify;
