import React, { useState, useEffect } from "react";

export default function ProfileEdit() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("profile"));
    if (saved) {
      setName(saved.name || "");
      setPhone(saved.phone || "");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = { name, phone, photo: photo?.name || "" };
    localStorage.setItem("profile", JSON.stringify(updated));
    alert("Profile updated!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
          className="w-full"
        />
        {photo && <p className="text-sm text-gray-500">Selected: {photo.name}</p>}
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}
