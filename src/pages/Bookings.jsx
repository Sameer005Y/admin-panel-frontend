import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingCard from "../components/BookingCard"; // adjust path if needed

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/booking");
        setBookings(res.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">All Bookings</h1>
      {bookings.length > 0 ? (
        bookings.map((booking) => <BookingCard key={booking._id} booking={booking} />)
      ) : (
        <p className="text-gray-500">No bookings found.</p>
      )}
    </div>
  );
};

export default Booking;
