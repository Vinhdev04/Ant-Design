import {
    BellOutlined,
    MailOutlined,
    ReloadOutlined,
    UserOutlined,
    WarningOutlined,
} from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import React from "react";
import "../.././Layout/DefaultLayout/DefaultLayout.css";
function Notify(props) {
  const items = [
    {
      label: (
        <div className="notify__item">
          <div className="notify__icon">
            <MailOutlined />
          </div>
          <div className="notify__content">
            <div className="notify__title">You received a new message</div>
            <div className="notify__time">3 minutes ago</div>
          </div>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__icon notify__icon--user">
            <UserOutlined />
          </div>
          <div className="notify__content">
            <div className="notify__title">New user registered</div>
            <div className="notify__time">5 minutes ago</div>
          </div>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__icon notify__icon--warning">
            <WarningOutlined />
          </div>
          <div className="notify__content">
            <div className="notify__title">System Alert</div>
            <div className="notify__time">7 minutes ago</div>
          </div>
        </div>
      ),
      key: "3",
    },
    {
      label: (
        <div className="notify__item">
          <div className="notify__icon notify__icon--reload">
            <ReloadOutlined />
          </div>
          <div className="notify__content">
            <div className="notify__title">You have a new update</div>
            <div className="notify__time">10 minutes ago</div>
          </div>
        </div>
      ),
      key: "3",
    },
  ];

  return (
    <Dropdown
        menu={{ items }}
          trigger={["click"]}
        //   custom dropdown with function dropdownRender
        dropdownRender={(menu) => (
            <>
            <div className="notify__dropdown">
                <div className="notify__header">
                <div className="notify__header-title">
                    <BellOutlined /> Notification
                </div>
                <Button type="link">View All</Button>
                </div>
                <div className="notify__body">{menu}</div>
            </div>
            </>
        )}
        >
        <div className="header-bell">
            <BellOutlined />
        </div>
    </Dropdown>
    );
}

export default Notify;
