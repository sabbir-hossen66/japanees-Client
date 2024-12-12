import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch users
  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosPublic.get('/users');
      return res.data;
    },
  });

  // Handle make admin
  const handleMakeAdmin = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This user will be granted admin privileges!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, make admin!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.patch(`/users/admin/${id}`);
          Swal.fire({
            icon: 'success',
            title: 'User promoted to admin successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error promoting user',
            text: error.response?.data?.message || 'Something went wrong',
            showConfirmButton: true,
          });
        }
      }
    });
  };

  // Handle delete
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.delete(`/users/${id}`);
          Swal.fire({
            icon: 'success',
            title: 'User deleted successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          refetch(); // Refetch the user list to update the UI
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error deleting user',
            text: error.response?.data?.message || 'Something went wrong',
            showConfirmButton: true,
          });
        }
      }
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h3 className="text-2xl font-bold text-center mb-6">Manage Users</h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Photo</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-center border-b hover:bg-gray-100">
                <td className="px-4 py-2">
                  <img
                    src={user.url}
                    alt={user.name}
                    className="w-12 h-12 rounded-full mx-auto"
                  />
                </td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  {user.role === 'admin' ? (
                    <span className="text-green-600 font-bold">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="bg-indigo-400 text-white px-2 py-1 rounded-lg shadow hover:bg-yellow-600 hover:scale-105 transform transition-transform duration-300"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-2 rounded-lg shadow hover:bg-blue-600 hover:scale-105 transform transition-transform duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg shadow ml-2 hover:bg-red-600 hover:scale-105 transform transition-transform duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
