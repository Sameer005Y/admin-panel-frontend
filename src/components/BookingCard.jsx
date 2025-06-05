import React from "react";

const BookingCard = ({ booking }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-800">{booking.guestName}</h2>
        <span
          className={`px-3 py-1 text-sm rounded-full ${
            booking.bookingStatus === "Confirmed"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {booking.bookingStatus}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-1">Email: {booking.guestEmail}</p>
      <p className="text-sm text-gray-500 mb-1">Phone: {booking.guestPhoneNumber}</p>
      <p className="text-sm text-gray-500 mb-1">
        Room ID: <span className="font-mono text-gray-700">{booking.room}</span>
      </p>

      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <div>
          <p className="font-medium text-gray-600">Check-In</p>
          <p>{new Date(booking.checkInDate).toLocaleString()}</p>
        </div>
        <div>
          <p className="font-medium text-gray-600">Check-Out</p>
          <p>{new Date(booking.checkOutDate).toLocaleString()}</p>
        </div>
        <div>
          <p className="font-medium text-gray-600">Total Amount</p>
          <p>₹{booking.totalAmount}</p>
        </div>
        <div>
          <p className="font-medium text-gray-600">Paid Amount</p>
          <p>₹{booking.paidAmount}</p>
        </div>
        <div>
          <p className="font-medium text-gray-600">Payment Status</p>
          <p>{booking.paymentStatus}</p>
        </div>
      </div>

      {booking.notes && (
        <div className="mt-4">
          <p className="font-medium text-gray-600">Notes:</p>
          <p className="text-sm text-gray-700">{booking.notes}</p>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
