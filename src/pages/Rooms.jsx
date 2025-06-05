import React, { useEffect, useState } from "react";
import axios from 'axios';
import RoomCard from '../components/RoomCard';

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/rooms')
      .then(res => {
        setRooms(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch rooms:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Loading rooms...</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {rooms.map(room => (
        <RoomCard key={room._id} room={room} />
      ))}
    </div>
  );
}

export default Rooms;