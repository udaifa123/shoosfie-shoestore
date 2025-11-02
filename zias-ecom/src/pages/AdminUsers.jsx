import React, { useEffect, useState } from "react";
import {
  getUsers,
  getUserById,
  toggleBlockUser,
  softDeleteUser,
} from "../services/userService";
import Swal from "sweetalert2";
import { FaEye, FaBan, FaTrash, FaUnlock } from "react-icons/fa";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleBlockToggle = async (id, blocked) => {
    try {
      await toggleBlockUser(id, !blocked);
      fetchUsers();
      Swal.fire({
        icon: "success",
        title: blocked ? "User Unblocked" : "User Blocked",
        showConfirmButton: false,
        timer: 1200,
      });
    } catch (error) {
      console.error("Block/unblock failed:", error);
      Swal.fire({
        icon: "error",
        title: "Action Failed",
        text: "Could not update user status. Please try again.",
        confirmButtonColor: "#6366f1",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await softDeleteUser(id);
      fetchUsers();
      Swal.fire({
        icon: "success",
        title: "User Deleted",
        showConfirmButton: false,
        timer: 1200,
      });
    } catch (error) {
      console.error("Delete failed:", error);
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: "Could not delete user. Please try again.",
        confirmButtonColor: "#e53e3e",
      });
    }
  };

  const handleView = async (id) => {
    try {
      const data = await getUserById(id);
      setSelectedUser(data);
      setModalOpen(true);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Manage Users
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          View, block, and remove users from the system
        </p>
      </div>

    
      <div className="overflow-x-auto bg-white shadow-xl border border-gray-200 rounded-2xl">
        <table className="min-w-full text-sm">
          <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="py-3 px-6 text-left font-semibold">Name</th>
              <th className="py-3 px-6 text-left font-semibold">Email</th>
              <th className="py-3 px-6 text-left font-semibold">Role</th>
              <th className="py-3 px-6 text-left font-semibold">Status</th>
              <th className="py-3 px-6 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-800">
            {users.map((u) => (
              <tr
                key={u.id}
                className="hover:bg-gray-50 transition duration-150 ease-in-out"
              >
                <td className="py-4 px-6 font-medium text-gray-900">{u.name}</td>
                <td className="py-4 px-6">{u.email}</td>
                <td className="py-4 px-6 capitalize text-gray-700">{u.role}</td>
                <td className="py-4 px-6">
                  {u.blocked ? (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-700">
                      Blocked
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                      Active
                    </span>
                  )}
                </td>
                <td className="py-4 px-6 flex justify-center gap-5 text-lg text-gray-700">
                  
                  <button
                    onClick={() => handleView(u.id)}
                    className="hover:text-indigo-600 transition"
                    title="View"
                  >
                    <FaEye />
                  </button>

                  
                  <button
                    onClick={() => handleBlockToggle(u.id, u.blocked)}
                    className="hover:text-yellow-600 transition"
                    title={u.blocked ? "Unblock" : "Block"}
                  >
                    {u.blocked ? <FaUnlock /> : <FaBan />}
                  </button>

                
                  <button
                    onClick={() => handleDelete(u.id)}
                    className="hover:text-red-600 transition"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="py-8 text-center text-gray-500">No users found.</div>
        )}
      </div>

      
      {modalOpen && selectedUser && (
        <div className="fixed inset-0 bg-white bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-black to-indigo-500 text-white rounded-2xl shadow-2xl w-96 p-6 relative animate-fadeIn">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">
              User Details
            </h3>
            <div className="space-y-2 text-sm text-white">
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Role:</strong>{" "}
                <span className="capitalize">{selectedUser.role}</span>
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {selectedUser.blocked ? "Blocked" : "Active"}
              </p>
            </div>
            <div className="mt-5 text-right">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gradient-to-r from-black to-indigo-500 text-white px-4 py-2 rounded-md text-sm transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
