import { Form, Input, Select, Button } from "antd";
import React, { useState } from "react";
// import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import movieData from "../common/StaticData";
import PrintButton from "./PrintButton";

const BookTicket = ({ Booking, bookingData }) => {
  const [form] = Form.useForm();
  const { moviename } = useParams();
  const [increment, setIncrement] = useState(1);
  const [bookings, setBookings] = useState([]);

  const Increse = () => {
    setIncrement((i) => i + 1);
  };

  const Decrese = () => {
    setIncrement((i) => i - 1);
  };

  const onFinish = (value) => {
    const bookingDetail = {
      ...value,
      movieName: moviename,
      totalPrice: increment * DynamicData.price,
      counter: increment,
    };
    Booking(value);
    form.resetFields();
    setBookings([...bookings, bookingDetail]);
  };

  console.log("bookingData", bookingData);
  console.log("moviename", moviename);

  const DynamicData = movieData.filter((i) => i.moviename === moviename)[0];
  const TotalPrice = increment * DynamicData.price;

  const columns = [
    {
      title: "Name",
      dataIndex: "cname",
      key: "cname",
    },
    {
      title: "Movie Name",
      dataIndex: "movieName",
      key: "movieName",
    },
    {
      title: "Number of Tickets",
      dataIndex: "counter",
      key: "counter",
      render: (increment) => <span>{increment}</span>,
    },
    {
      title: "Final Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (price) => <span>$ {price}</span>,
    },
  ];

  return (
    <div>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{ cname: "", fprice: "" }}
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
          <span>$ {TotalPrice}</span>
        </Form.Item>
        <Button className="bookingtbtn" htmlType="submit">
          Book
        </Button>
      </Form>

      <div className="mt-5">
        <PrintButton columns={columns} dataSource={bookings} />
      </div>
    </div>
  );
};

export default BookTicket;
