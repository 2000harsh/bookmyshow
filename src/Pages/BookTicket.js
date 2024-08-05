import { Form, Input, Select, Button } from "antd";
import React, { useState } from "react";
// import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import movieData from "../common/StaticData";

const BookTicket = ({ Booking, bookingData }) => {
  const [form] = Form.useForm();
  const { moviename } = useParams();
  const [increment, setIncrement] = useState(1);

  const Increse = () => {
    setIncrement((i) => i + 1);
  };

  const Decrese = () => {
    setIncrement((i) => i - 1);
  };

  const onFinish = (value) => {
    Booking(value);
    form.resetFields();
  };

  console.log("bookingData", bookingData);
  console.log("moviename", moviename);

  const DynamicData = movieData.filter((i) => i.moviename === moviename)[0];
  const TotalPrice = increment * DynamicData.price;
  return (
    <div>
      <>
        <Form
          form={form}
          onFinish={onFinish}
          initialValues={{ cname: "", counter: "", fprice: "" }}
        >
          <Form.Item name="cname" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="mname" label="Movie Name">
            <Select defaultValue={moviename} />
          </Form.Item>
          <Form.Item name="counter" label="Number of Tickets">
            <Button className="ticketbtn" onClick={Decrese}>
              -
            </Button>
            <span className="counter">{increment}</span>
            <Button className="ticketbtn" onClick={Increse}>
              +
            </Button>{" "}
          </Form.Item>
          <Form.Item name="fprice" label="Final Price">
            {/* <span>$ {TotalPrice}</span> */}
            <Input defaultValue={TotalPrice} />
          </Form.Item>
          <Button htmlType="submit">Book</Button>
        </Form>

        {bookingData.map((i) => (
          <>
            <p>{i.cname}</p>
            <p>{TotalPrice}</p>
          </>
        ))}
      </>
    </div>
  );
};

export default BookTicket;
