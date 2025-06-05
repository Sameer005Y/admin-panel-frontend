import React from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


function RoomCard({ room, onDelete }) {

    const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/rooms/edit/${room._id}`);
  };

//   const [rooms, setRooms] = useState([]);

   const handleDelete = async () => {
    // Confirm before deleting
    if (window.confirm("Are you sure you want to delete this room?")) {
      // Call delete API
      try {
        await axios.delete(`http://localhost:3000/api/rooms/${room._id}`);
        alert("Room deleted successfully");
        onDelete(room._id); // Notify parent to remove from UI
      } catch (error) {
        console.error("Error deleting room:", error);
        alert("Failed to delete room");
      }
    }
  };

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

        <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={handleEdit}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
      </div>
    </div>
  );
}

export default RoomCard;