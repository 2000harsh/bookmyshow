import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Home from "./Pages/Home";
import TicketDetail from "./Pages/TicketDetail";
import BookTicket from "./Pages/BookTicket";
import { useState } from "react";

function App() {
  const [bookingData, setBookingData] = useState([]);
  const Booking = (DisplayData) => {
    setBookingData([...bookingData, DisplayData]);
  };

  return (
    <div>
      <Header />
      <div className="appstyle container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket-detail/:moviename" element={<TicketDetail />} />
          <Route
            path="/booking-tickets/:moviename"
            element={<BookTicket Booking={Booking} bookingData={bookingData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
