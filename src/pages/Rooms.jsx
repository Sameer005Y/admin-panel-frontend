import React, { useEffect, useState } from "react";
import axios from 'axios';
import RoomCard from '../components/RoomCard';
import { useNavigate } from 'react-router-dom';

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

   const handleAddRoom = () => {
    navigate('/rooms/add'); // Create this route to handle adding
  };

  const handleDeleteRoom = (deletedRoomId) => {
    setRooms((prevRooms) => prevRooms.filter((room) => room._id !== deletedRoomId));
  };

  const fetchRooms = async () => {
  const res = await axios.get("http://localhost:3000/api/rooms");
  setRooms(res.data);
};

useEffect(() => {
  fetchRooms();
}, []);

  

 

  if (loading) return <p className="p-4">Loading rooms...</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={handleAddRoom}
        >
          + Add Room
        </button>
      {rooms.map((room) => (
  <RoomCard key={room._id} room={room} onDelete={handleDelete} onEdit={handleEdit} />
))}
    </div>
  );
}

export default Rooms;