import axios from 'axios';
import React, { useState } from 'react';

const AddVocabulary = () => {
  const [formData, setFormData] = useState({
    word: '',
    pronunciation: '',
    whenToUse: '',
    lessonNo: '',
    adminEmail: '', // You might want to fetch this from authentication or store it in local storage
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/create-vocabulary', formData); // Replace with your backend API endpoint
      console.log(response.data);
      // Handle success, e.g., show a success message or redirect to a different page
      alert('Vocabulary created successfully!');
      setFormData({
        word: '',
        pronunciation: '',
        whenToUse: '',
        lessonNo: '',
        adminEmail: '',
      });
    } catch (error) {
      console.error('Error creating vocabulary:', error);
      // Handle error, e.g., show an error message to the user
      alert('Error creating vocabulary. Please try again.');
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