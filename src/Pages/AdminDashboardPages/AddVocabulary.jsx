import axios from 'axios';
import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { AuthContext } from '../../Providers/AuthProviders';

const AddVocabulary = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    word: '',
    pronunciation: '',
    whenToUse: '',
    lessonNo: '',
    adminEmail: user?.email || '', // You might want to fetch this from authentication or store it in local storage
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://japanes-language-server.vercel.app/create-vocabulary', formData); // Replace with your backend API endpoint
      console.log(response.data);

      // Handle success using SweetAlert2
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: `"${formData.lessonNo}" - "${formData.word}" has been submitted successfully!`,
        showConfirmButton: false,
        timer: 1500
      });

      setFormData({
        word: '',
        pronunciation: '',
        whenToUse: '',
        lessonNo: '',
        adminEmail: '',
      });
    } catch (error) {
      console.error('Error creating vocabulary:', error);

      // Handle error using SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while creating vocabulary. Please try again.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="word" className="block text-gray-700 text-sm font-bold mb-2">Word:</label>
        <input
          type="text"
          id="word"
          name="word"
          value={formData.word}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="pronunciation" className="block text-gray-700 text-sm font-bold mb-2">Pronunciation:</label>
        <input
          type="text"
          id="pronunciation"
          name="pronunciation"
          value={formData.pronunciation}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="whenToUse" className="block text-gray-700 text-sm font-bold mb-2">When to Use:</label>
        <textarea
          id="whenToUse"
          name="whenToUse"
          value={formData.whenToUse}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lessonNo" className="block text-gray-700 text-sm font-bold mb-2">Lesson No:</label>
        <input
          type="number"
          id="lessonNo"
          name="lessonNo"
          value={formData.lessonNo}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create Vocabulary
      </button>
    </form>
  );
};

export default AddVocabulary;