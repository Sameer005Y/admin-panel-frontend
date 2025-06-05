import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const [roomData, setRoomData] = useState({
    name: "",
    category: "",
    price: "",
    description: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/rooms", roomData);
      alert("Room added successfully!");
      navigate("/rooms");
    } catch (error) {
      console.error("Error adding room:", error);
      alert("Something went wrong. Check console for details.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add New Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Room Name" onChange={handleChange} className="border p-2 w-full" required />
        <input name="category" placeholder="Category" onChange={handleChange} className="border p-2 w-full" required />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} className="border p-2 w-full" required />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoom;
