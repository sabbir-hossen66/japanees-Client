import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../../ui/Button';

const AddLessons = () => {
  const [lessonName, setLessonName] = useState('');
  const [lessonNumber, setLessonNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lessonName.trim() && lessonNumber.trim()) {
      console.log({ lessonName, lessonNumber });
      // send data to the server
      fetch('https://japanes-language-server.vercel.app/lesson', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          lessonName: lessonName,
          lessonNumber: lessonNumber,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {

            Swal.fire({
              position: "top",
              icon: "success",
              title: ` "${lessonName}" ${lessonNumber} has been submitted.`,
              showConfirmButton: false,
              timer: 1500
            });

          }
        })



      // Reset form fields
      setLessonName('');
      setLessonNumber('');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Submission',
        text: 'Please fill in both fields before submitting.',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg animate-fadeIn"
        style={{ animationDuration: '1s', animationTimingFunction: 'ease-in-out' }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Lesson</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Lesson Name */}
          <div>
            <label htmlFor="lessonName" className="block text-sm font-medium text-gray-700">
              Lesson Name:
            </label>
            <input
              type="text"
              id="lessonName"
              value={lessonName}
              onChange={(e) => setLessonName(e.target.value)}
              placeholder="e.g., Basic Greetings"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
            />
          </div>

          {/* Lesson Number */}
          <div>
            <label htmlFor="lessonNumber" className="block text-sm font-medium text-gray-700">
              Lesson Number:
            </label>
            <input
              type="number"
              id="lessonNumber"
              value={lessonNumber}
              onChange={(e) => setLessonNumber(e.target.value)}
              placeholder="e.g., 1"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-purple-400 focus:ring focus:ring-indigo-500 transition transform duration-300 ease-in-out hover:scale-105"
          >
            Submit Lesson
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddLessons;
