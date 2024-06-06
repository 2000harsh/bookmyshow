import React from "react";
import movieData from "../common/StaticData";
import { Button, Card, Col, Row } from "react-bootstrap";
import movieimg from "../common/movieimg.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (moviename) => {
    navigate(`/ticket-detail/${moviename}`);
  };

  const handleClick2 = (moviename) => {
    navigate(`/booking-tickets/${moviename}`);
  };

  return (
    <Row>
      {movieData.map((i, index) => (
        <Col md={4}>
          <Card
            key={index}
            style={{
              width: "22rem",
              height: "30rem",
              marginBottom: "10px",
              borderRadius: "16px",
            }}
          >
            <Card.Img
              variant="top"
              src={movieimg}
              style={{
                borderTopRightRadius: "16px",
                borderTopLeftRadius: "16px",
              }}
            />
            <Card.Body>
              <Card.Title>{i.moviename}</Card.Title>
              <Card.Text>{i.description}</Card.Text>
              <div className="cardbtn">
                <Button
                  variant="primary"
                  onClick={() => handleClick(i.moviename)}
                >
                  View Details
                </Button>
                <Button
                  variant="success"
                  onClick={() => handleClick2(i.moviename)}
                >
                  Book Tickets
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Home;
