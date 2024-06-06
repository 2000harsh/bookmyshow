import React from "react";
import { useParams } from "react-router-dom";
import movieimg from "../common/movieimg.jpeg";
import { Col, Row } from "react-bootstrap";
import movieData from "../common/StaticData";
import { Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

const TicketDetail = () => {
  const { moviename } = useParams();

  const DynamicData = movieData.filter((i) => i.moviename === moviename)[0];
  return (
    <div>
      <Row>
        <Col md={6}>
          <img
            src={movieimg}
            style={{ width: "100%", height: "auto", borderRadius: "15px" }}
            alt="movie"
          />
        </Col>
        <Col md={6}>
          <h1>{moviename}</h1>
          <p>{DynamicData.description}</p>
          IMDB Rating: <Rate allowHalf value={DynamicData.rating} />
          <br />
          <h3>Price: $ {DynamicData.price}</h3>
          <h3 style={{ color: "red", textDecoration: "line-through" }}>
            $ 49.00
          </h3>
          <p>Released on:- {DynamicData.releaseDate}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <h4>{moviename}'s Cast</h4>
        <Space
          direction="horizontal"
          size="large"
          wrap
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {DynamicData.cast.map((castMember, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "10px 20px 20px 0",
              }}
            >
              <Avatar size={52} icon={<UserOutlined />} />
              <span style={{ marginLeft: "10px" }}>{castMember}</span>
            </div>
          ))}
        </Space>
      </Row>
    </div>
  );
};

export default TicketDetail;
