import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Carousel } from "antd";
import { Grid } from "antd";
import { Col, Divider, Row } from "antd";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

import axios from "axios";
import { Card } from "antd";
const { Meta } = Card;
import "./index.scss";
import { BASE_URL } from "../../services/constant";
const contentStyle = {
  margin: 0,
  height: "100vh",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  objectFit: "cover ",
};

const HomePage = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setProduct(res.data.data);
    });
  }, []);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section id="banner">
        <div className="banner">
          <Carousel afterChange={onChange}>
            <div>
              <img
                style={contentStyle}
                src="https://preview.colorlib.com/theme/foundation/images/hero_1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                style={contentStyle}
                src="https://preview.colorlib.com/theme/foundation/images/hero_2.jpg"
                alt=""
              />
            </div>
          </Carousel>
          <div className="components">
            <div className="left-component">
              <div className="boxes1">
                <h1>RESCUE AN ORPHAN</h1>
                <p>
                  Accusantium dignissimos voluptas rem consequatur blanditiis
                  error ratione illo sit quasi ut praesentium magnam
                </p>
              </div>
            </div>
            <div className="middle-component">
              <div className="boxes2">
                <h1>RESCUE AN ORPHAN</h1>
                <p>
                  Accusantium dignissimos voluptas rem consequatur blanditiis
                  error ratione illo sit quasi ut praesentium magnam
                </p>
              </div>
            </div>
            <div className="right-component">
              <div className="boxes3">
                <h1>RESCUE AN ORPHAN</h1>
                <p>
                  Accusantium dignissimos voluptas rem consequatur blanditiis
                  error ratione illo sit quasi ut praesentium magnam
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cards">
        <div className="container">
          <div className="cards">
            <Row gutter={16}>
              {product &&
                product.map((p) => {
                  return (
                    <Col
                      className="gutter-row"
                      span={6}
                      xs={24}
                      md={12}
                      lg={8}
                      key={p._id}
                    >
                      <Card
                        hoverable
                        cover={
                          <img
                            style={{ height: "250px" }}
                            alt="example"
                            src={p.imageUrl}
                          />
                        }
                        style={{ height: "400px", marginBottom: "3rem" }}
                      >
                        <Meta title={p.title} description={p.description} />
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </div>
      </section>
      <section id="ourleadership">
        <div className="container">
          <div className="ourleadership">
            <h1>OUR LEADERSHIP</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              corporis, eius, eos <br />
              consectetur consequuntur sit. Aut, perspiciatis, reprehenderit.
            </p>
            <div className="salam">
              <Row gutter={16}>
                <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                  <Card
                    hoverable
                    // style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg"
                      />
                    }
                  >
                    <Meta
                      title="Mining Expert"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. Repellendus vero, consequuntur!"
                    />

                    <RiFacebookCircleFill className="icons" />

                    <RiTwitterFill className="icons" />
                    <RiInstagramFill className="icons" />
                  </Card>
                  <Card
                    hoverable
                    // style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://preview.colorlib.com/theme/foundation/images/person_2.jpg"
                      />
                    }
                  >
                    <Meta
                      title="PROJECT MANAGER"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. Repellendus vero, consequuntur!"
                    />

                    <RiFacebookCircleFill className="icons" />

                    <RiTwitterFill className="icons" />
                    <RiInstagramFill className="icons" />
                  </Card>
                  <Card
                    hoverable
                    // style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src="https://preview.colorlib.com/theme/foundation/images/person_3.jpg"
                      />
                    }
                    style={{ marginBottom: "3rem" }}
                  >
                    <Meta
                      title="ENGINEER"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. Repellendus vero, consequuntur!"
                    />

                    <RiFacebookCircleFill className="icons" />

                    <RiTwitterFill className="icons" />
                    <RiInstagramFill className="icons" />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
