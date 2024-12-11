import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Lessons = () => {
  const lessons = useLoaderData();

  const handleEdit = (lesson) => {
    Swal.fire({
      title: 'Edit Lesson',
      html: `<input id="lessonName" class="swal2-input" placeholder="Lesson Name" value="${lesson.lessonName}" />
             <input id="lessonNumber" class="swal2-input" placeholder="Lesson Number" value="${lesson.lessonNumber}" />`,
      confirmButtonText: 'Save',
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: () => {
        const lessonName = document.getElementById('lessonName').value;
        const lessonNumber = document.getElementById('lessonNumber').value;
        if (!lessonName || !lessonNumber) {
          Swal.showValidationMessage('Both fields are required');
        } else {
          return { lessonName, lessonNumber };
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Updated Lesson:', { ...lesson, ...result.value });
        Swal.fire('Saved!', 'The lesson has been updated.', 'success');
      }
    });
  };

  const handleDelete = (lessonId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Deleted Lesson ID:', lessonId);
        Swal.fire('Deleted!', 'The lesson has been removed.', 'success');
      }
    });
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">All Lessons</h2>
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Lesson Name</th>
                <th className="px-4 py-2 text-left">Lesson Number</th>
                <th className="px-4 py-2 text-left">Vocabulary Count</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {lessons.map((lesson, index) => (
                <tr
                  key={lesson._id}
                  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className="px-4 py-2 text-sm font-medium text-gray-800">{lesson.lessonName}</td>
                  <td className="px-4 py-2 text-sm font-medium text-gray-800">{lesson.lessonNumber}</td>
                  <td className="px-4 py-2 text-sm font-medium text-gray-800">{Math.floor(Math.random() * 20) + 1}</td>
                  <td className="px-4 py-2 flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => handleEdit(lesson)}
                      className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring focus:ring-blue-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(lesson._id)}
                      className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:ring focus:ring-red-300"
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
    </div>
  );
};

export default Lessons;
