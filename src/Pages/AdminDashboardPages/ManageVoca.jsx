import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2 for animations

const ManageVoca = () => {
  const voca = useLoaderData();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false); // Track edit mode for each vocabulary item
  const [editedItem, setEditedItem] = useState({}); // Store edited data for submit

  const handleEditClick = (item) => {
    setEditMode(true);
    setEditedItem({ ...item }); // Create a copy to avoid mutating original data
  };
  const handleDeleteClick = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://japanes-language-server.vercel.app/get-vocabulary/${id}`, {
            method: 'DELETE'
          });

          if (!response.ok) {
            throw new Error('Failed to delete vocabulary');
          }

          const data = await response.json();
          if (data.deletedCount > 0) {
            console.log('Deleted Vocabulary ID:', id);
            Swal.fire('Deleted!', 'The vocabulary item has been removed.', 'success');

            // Update UI to remove deleted vocabulary item (assuming voca is the data array)
            const filteredVoca = voca.filter((item) => item._id !== id);
            navigate('/dashboard/manage-voca', { state: { filteredVoca } }); // Refresh `/manage-voca` with filtered data
          } else {
            Swal.fire('Error!', 'An error occurred while deleting the vocabulary item.', 'error');
          }
        } catch (error) {
          console.error(error);
          Swal.fire('Error!', 'An error occurred while deleting the vocabulary item.', 'error');
        }
      }
    });
  };
  //https://japanes-language-server.vercel.app/vocabulary/${id}
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/vocabulary/${editedItem._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedItem),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Saved!',
          text: 'Vocabulary item successfully edited.',
        });
        const updatedVoca = voca?.map((item) => (item._id === editedItem._id ? editedItem : item));
        setEditMode(false);
        setEditedItem({});
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while saving. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error editing vocabulary:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred. Please try again.',
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Vocabulary List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left">Word</th>
            <th className="border border-gray-300 p-2 text-left">Pronunciation</th>
            <th className="border border-gray-300 p-2 text-left">When to Use</th>
            <th className="border border-gray-300 p-2 text-left">Lesson No</th>
            <th className="border border-gray-300 p-2 text-left">Admin Email</th>
            <th className="border border-gray-300 p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {voca?.map((item, index) => (
            <tr key={index} className="border border-gray-300">
              <td className={`p-2 ${editMode && item._id === editedItem._id ? 'bg-gray-200' : ''}`}>
                {editMode && item._id === editedItem._id ? (
                  <input
                    type="text"
                    value={editedItem.word}
                    onChange={(e) => setEditedItem({ ...editedItem, word: e.target.value })}
                    className="border rounded p-2 w-full"
                  />
                ) : (
                  item.word
                )}
              </td>
              <td className={`p-2 ${editMode && item._id === editedItem._id ? 'bg-gray-200' : ''}`}>
                {editMode && item._id === editedItem._id ? (
                  <input
                    type="text"
                    value={editedItem.pronunciation}
                    onChange={(e) => setEditedItem({ ...editedItem, pronunciation: e.target.value })}
                    className="border rounded p-2 w-full"
                  />
                ) : (
                  item.pronunciation
                )}
              </td>
              <td className={`p-2 ${editMode && item._id === editedItem._id ? 'bg-gray-200' : ''}`}>
                {editMode && item._id === editedItem._id ? (
                  <textarea
                    value={editedItem.whenToUse}
                    onChange={(e) => setEditedItem({ ...editedItem, whenToUse: e.target.value })}
                    className="border rounded p-2 w-full"
                  />
                ) : (
                  item.whenToUse
                )}
              </td>
              <td className={`p-2 ${editMode && item._id === editedItem._id ? 'bg-gray-200' : ''}`}>
                {editMode && item._id === editedItem._id ? (
                  <input
                    type="number"
                    value={editedItem.lessonNo}
                    onChange={(e) => setEditedItem({ ...editedItem, lessonNo: e.target.value })}
                    className="border rounded p-2 w-full"
                  />
                ) : (
                  item.lessonNo
                )}
              </td>
              <td className={`p-2 ${editMode && item._id === editedItem._id ? 'bg-gray-200' : ''}`}>
                {editMode && item._id === editedItem._id ? (
                  <input
                    type="text"
                    value={editedItem.adminEmail}
                    onChange={(e) => setEditedItem({ ...editedItem, adminEmail: e.target.value })}
                    className="border rounded p-2 w-full"
                  />
                ) : (
                  item.adminEmail
                )}
              </td>
              <td className="p-2 text-center">
                {editMode && item._id === editedItem._id ? (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleEditSubmit}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDeleteClick(item._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageVoca;