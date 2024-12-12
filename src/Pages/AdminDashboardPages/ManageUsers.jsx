import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProviders';

const ManageUsers = () => {
  const { user } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users/admin/${user?.email}`);
        setUsers(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/users/${userId}`);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'User Deleted',
          text: 'User deleted successfully',
        });
        const updatedUsers = users.filter((user) => user._id !== userId);
        setUsers(updatedUsers);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete user',
        });
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while deleting the user',
      });
    }
  };

  // Pagination logic
  // const indexOfLastUser = currentPage * usersPerPage;
  // const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = users?.slice(indexOfFirstUser, indexOfLastUser) || [];
  // const totalPages = Math.ceil((users?.length || 0) / usersPerPage);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Manage Users</h2>
      {isLoading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {user && user.map((singleUser) => (
                <tr key={singleUser._id}>
                  <td>{singleUser.name}</td>
                  <td>{singleUser.email}</td>
                  <td>{singleUser.role}</td>
                  <td>
                    {/* Add edit button here if needed */}
                    <button onClick={() => handleDeleteUser(singleUser._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ManageUsers;