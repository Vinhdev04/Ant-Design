import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Switch,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
const Option = Select;
function CreateRoom() {
  const [data, setData] = useState({
    members: "1 member",
  });

  const files = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  };
  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push({
      value: i > 9 ? `${i} member` : `0${i} member`,
      label: i > 9 ? `${i} member` : `0${i} member`,
    });
  }

  const handleSubmit = (e) => {
    console.log(e);
    setData(e);
  };

  return (
    <>
      <h2>Create new a room</h2>
      <Form name="create-room" onFinish={handleSubmit} layout="vertical">
        <Row gutter={[10, 20]}>
          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
            <Form.Item
              label="roomName"
              name="roomName"
              rules={[
                {
                  required: true,
                  message: "Please input your roomName!",
                },
              ]}
            >
              <Input></Input>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
            <Form.Item
              label="roomID"
              name="roomID"
              rules={[
                {
                  required: true,
                  message: "Please input your roomID!",
                },
              ]}
            >
              <Input></Input>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
            <Form.Item
              label="roomBed"
              name="roomBed"
              rules={[
                {
                  required: true,
                  message: "Please input your roomBed!",
                },
              ]}
            >
              <InputNumber min={1} max={10}></InputNumber>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
            <Form.Item
              label="members"
              name="members"
              initialValue={"1 member"}
              rules={[
                {
                  required: true,
                  message: "Please input your members!",
                },
              ]}
            >
              <Select options={options}></Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
            <Form.Item label="Services" name="services">
              <Select mode="multiple" allowClear>
                <Option value="Wifi">Wifi</Option>
                <Option value="Taxi">Taxi</Option>
                <Option value="Television">Television</Option>
                <Option value="Breakfirst">Breakfirst</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
            <Form.Item label="Description" name="description">
              <TextArea rows={4} showCount maxLength={100}></TextArea>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
            <Form.Item label="Upload">
              <Upload {...files}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
            <Form.Item label="Status" name="status" valuePropName="checked">
              <Switch></Switch>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
            {" "}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Room
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default CreateRoom;
