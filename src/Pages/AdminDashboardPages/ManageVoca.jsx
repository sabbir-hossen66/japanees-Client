import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ManageVoca = () => {
  const voca = useLoaderData();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Vocabulary List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Word</th>
            <th className="border border-gray-300 p-2">Pronunciation</th>
            <th className="border border-gray-300 p-2">When to Use</th>
            <th className="border border-gray-300 p-2">Lesson No</th>
            <th className="border border-gray-300 p-2">Admin Email</th>
          </tr>
        </thead>
        <tbody>
          {voca.map((item, index) => (
            <tr key={index} className="border border-gray-300">
              <td className="p-2">{item.word}</td>
              <td className="p-2">{item.pronunciation}</td>
              <td className="p-2">{item.whenToUse}</td>
              <td className="p-2">{item.lessonNo}</td>
              <td className="p-2">{item.adminEmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageVoca;