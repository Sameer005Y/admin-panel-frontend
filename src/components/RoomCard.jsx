import React from 'react';

function RoomCard({ room }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full md:w-80">
      <img
        src={room.images[0]}
        alt={room.name}
        className="h-48 w-full object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{room.name}</h2>
      <p className="text-sm text-gray-500">{room.category} - ₹{room.price} per night</p>
      <p className="text-sm text-gray-600">{room.description}</p>
      <p className="mt-1 text-xs">Capacity: {room.capacity} persons</p>
      <p className="text-xs">Status: <span className={`font-bold ${room.bookingStatus === 'Available' ? 'text-green-600' : 'text-red-600'}`}>{room.bookingStatus}</span></p>
      <div className="mt-2">
        <h4 className="text-sm font-medium">Amenities:</h4>
        <ul className="text-xs list-disc list-inside">
          {room.amenities.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default RoomCard;