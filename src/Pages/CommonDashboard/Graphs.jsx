import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Graphs = () => {
  // Static data for the bar chart
  const barData = {
    labels: ['Kanji', 'Hiragana', 'Katakana', 'Vocabulary'],
    datasets: [
      {
        label: 'Words Learned',
        data: [50, 80, 40, 100],
        backgroundColor: ['#1D4ED8', '#3B82F6', '#60A5FA', '#93C5FD'],
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw} words`,
        },
      },
    },
    animation: {
      duration: 1500,
    },
  };

  // Static data for the pie chart
  const pieData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        label: 'Progress',
        data: [60, 25, 15],
        backgroundColor: ['#6366F1', '#FACC15', '#EF4444'], // Indigo, Yellow, Red
        hoverOffset: 8,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
    animation: {
      duration: 1500,
    },
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center p-8 bg-gray-50 min-h-screen">
      {/* Bar Chart */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-xl font-bold text-center mb-4">Words Learned</h3>
        <Bar data={barData} options={barOptions} />
      </div>

      {/* Pie Chart */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-4">
        <h3 className="text-xl font-bold text-center mb-4">Learning Progress</h3>
        <Pie data={pieData} options={pieOptions} />
      </div>
    </div>
  );
};

export default Graphs;
