import { Button, Cascader, Checkbox, Col, DatePicker, Input, Row, Select, Space } from "antd";
import React, { useState } from "react";
import "./Project.css";
const { Option } = Select;
const { RangePicker } = DatePicker;
function Project() {
  const [data, setData] = useState({
    fullname: "",
    position: "",
    email: ""
  });

  // lấy data cũ  nối vào data mới
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // xử lý Click
  const handleClick = () => {
    console.log("Đã gửi dữ liệu lên server", data);
    // Reset form
    setData({
      fullname: "",
      position: "",
      email: ""
    });
  };

  // xử lý onChange Checkbox
  const handleChangeCheckbox = (e) => {
    console.log(e);
    const obj = {
      ...data,
      services: e
    }
    setData(obj);
    
  }

  // xử lý onChange DatePicker
  const handleChangeDate = (dates,dateStrings) => {
    // console.log(dates);
    // console.log(dateStrings);
    const obj = {
      ...data,
      date:dateStrings
    }
    setData(obj);
  }

  // custom select sau đó truyền vào addonAfter || addonBefore
  const select = (
    <Select defaultValue="http://">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  )

  return (
    <>
      <div className="mb-10">
        <h2>Thông tin dự án</h2>
        <form>
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={8} lg={6} xl={6} className="mb-10">
              <label>Họ và Tên</label>
              <Input name="fullname" value={data.fullname} placeholder="Phạm Công Vinh" onChange={handleChangeInput} />
            </Col>
            <Col xs={24} sm={24} md={8} lg={6} xl={6}>
              <label>Vị Trí</label>
              <Input name="position" value={data.position} placeholder="Web Developer" onChange={handleChangeInput} />
            </Col>
            <Col xs={24} sm={24} md={8} lg={6} xl={6}>
              <label>Email</label>
              <Input name="email" value={data.email} placeholder="pcv.fed@gmail.com" onChange={handleChangeInput} />
            </Col>
            <Col span={24}>
              <Button type="primary" onClick={handleClick}>Submit</Button>
            </Col>
          </Row>
        </form>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <hr></hr>

      <div className="mb-10">
        <Row gutter={[20, 20]}>
          {/* allowClear: Hiển thị biểu tượng clear */}
          <Col xs={24} sm={24} md={8} lg={6} xl={6} className="mb-10">
              <Input addonBefore="http://"  allowClear="true"  defaultValue="doctorhub"/>
          </Col>
          
          {/* addonAfter: thêm vào bên ngoài sau ô input */}
          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
              <Input addonAfter=".com" allowClear="true"  defaultValue="admin"/>
          </Col>

          {/* addonBefore: thêm vào bên ngoài trước ô input */}
          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
              <Input addonBefore={select}  />
          </Col>
          
           {/* disabled: vô hiệu hóa ô input */}
          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
              <Input addonBefore={select} disabled />
          </Col>
          
           {/* showCount: hiển thị số kí tự đã điền */}
          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
              <Input addonBefore={select} maxLength={10} showCount type="number"/>
          </Col>
          
          {/* prefix: thêm vào Trong ô input - bên trái*/}
          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
              <Input  addonBefore={select} maxLength={20}  status="error" prefix="http://"/>
          </Col>

          {/* suffix: thêm vào 	Trong ô input - bên phải */}
          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
            <Input  addonBefore={select} maxLength={20}  status="warning" suffix=".vn"/>
          </Col>

          {/* Cascader: Chọn dữ liệu phân cấp */}
          <Col xs={24} sm={24} md={8} lg={6} xl={6}>
          <Input
              addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
              defaultValue="mysite"
            />
          </Col>
          </Row>
      </div>
      <hr></hr>

      <div>
        <Row gutter={[20, 20]}>
          {/* allowClear: Hiển thị biểu tượng clear */}
          <Col xs={24} sm={24} md={8} lg={6} xl={6} className="mb-10">
            <Button type="primary" loading="true">Search</Button>
          </Col>
          
        </Row>
      </div>
      <hr></hr>

      <Row gutter={[20, 20]}>
        <Col span={12}>
          <p>Dịch vụ order thêm</p>
          <Checkbox.Group
            defaultValue={["Máy sấy tóc", "Bàn là"]} // chọn mặc định
            onChange={handleChangeCheckbox}
          >
            <Space direction="vertical">
              <Checkbox value="Máy sấy tóc">Máy sấy tóc</Checkbox>
              <Checkbox value="Bàn là">Bàn là</Checkbox>
              <Checkbox value="Khăn tắm">Khăn tắm</Checkbox>
              <Checkbox value="Taxi" disabled>Taxi</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>
      </Row>

      <Row gutter={[20, 20]}>
        <Col span={12}>
          <p>Chọn thời gian</p>
          <RangePicker format="DD-MM-YYYY" onChange={handleChangeDate} placeholder={['Ngày bắt đầu',"Ngày kết thúc"]}></RangePicker>
          <DatePicker></DatePicker>
          <DatePicker picker="week"></DatePicker>
          <DatePicker picker="month"></DatePicker>
          <DatePicker picker="year"></DatePicker>
        </Col>
      </Row>
    </>
  );
}

export default Project;
