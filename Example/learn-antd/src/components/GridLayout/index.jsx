import { Col, Row } from "antd";
import React from "react";
import CardItem from "../CardItem";
import "./GridLayout.css";
function GridLayout(props) {
    return (
    <>
        {/* <Row gutter={[10,20]}>
            <Col span={6}>
            <div className="box">Box 1</div>
            </Col>
            <Col span={6}>
            <div className="box">Box 2</div>
            </Col>
            <Col span={6}>
            <div className="box">Box 3</div>
            </Col>
            <Col span={6}>
            <div className="box">Box 4</div>
            </Col>
        </Row> */}
            

        <Row gutter={[10,20]}>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title="Box 1"></CardItem>
            </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title="Box 3"></CardItem>
            </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title="Box 3"></CardItem>
            </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem title="Box 4"></CardItem>
            </Col>
            </Row>
            
            <Row gutter={[10,20]} className = "mt-20">
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CardItem title="box 5" style={{height:"300px"}}></CardItem>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="box 6" style={{height:"300px"}}></CardItem>
                </Col>
            </Row>

            <Row gutter={[10,20]} className = "mt-20">
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="box 7" style={{height:"300px"}}></CardItem>
                </Col>
                <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
                    <CardItem title="box 8" style={{height:"300px"}}></CardItem>
                </Col>
            </Row>

            <Row gutter={[10,20]} className = "mt-20">
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="box 9" style={{height:"400px"}}></CardItem>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="box 10" style={{height:"400px"}}></CardItem>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
                    <CardItem title="box 11" style={{height:"400px"}}></CardItem>
                </Col>
            </Row>
    </>
    );
}

export default GridLayout;
