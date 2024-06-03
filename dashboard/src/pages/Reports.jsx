import React from 'react';
const reportData = [
    { id: 1, category: 'Sales', value: 5000 },
    { id: 2, category: 'Marketing', value: 3000 },
    { id: 3, category: 'Operations', value: 4000 },
    { id: 4, category: 'Finance', value: 6000 },
  ];

const Reports = () => (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-4"> Report Page</h1>
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">ID</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Value</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-600">
        {reportData.map(item => (
          <tr key={item.id}>
            <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">${item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Reports;
