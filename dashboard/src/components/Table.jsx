import React from 'react';
import { DataGrid } from '@mui/x-data-grid'; // Note the correct import path


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 110 },
  { field: 'email', headerName: 'Email', width: 160 },
];

const rows = [
    { id: 1, name: 'John Doe', age: 35, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 28, email: 'jane.smith@example.com' },
    { id: 3, name: 'Michael Johnson', age: 42, email: 'michael.johnson@example.com' },
    { id: 4, name: 'Emily Davis', age: 31, email: 'emily.davis@example.com' },
    { id: 5, name: 'Christopher Brown', age: 39, email: 'christopher.brown@example.com' },
    { id: 6, name: 'Amanda Wilson', age: 45, email: 'amanda.wilson@example.com' },
    { id: 7, name: 'Daniel Martinez', age: 26, email: 'daniel.martinez@example.com' },
    { id: 8, name: 'Sarah Taylor', age: 34, email: 'sarah.taylor@example.com' },
    { id: 9, name: 'Kevin Anderson', age: 37, email: 'kevin.anderson@example.com' },
    { id: 10, name: 'Jessica Garcia', age: 29, email: 'jessica.garcia@example.com' },
    { id: 11, name: 'David Lopez', age: 41, email: 'david.lopez@example.com' },
    { id: 12, name: 'Michelle Hernandez', age: 33, email: 'michelle.hernandez@example.com' },
    { id: 13, name: 'James Clark', age: 38, email: 'james.clark@example.com' },
    { id: 14, name: 'Melissa Lee', age: 30, email: 'melissa.lee@example.com' },
    { id: 15, name: 'Ryan Scott', age: 32, email: 'ryan.scott@example.com' },
    { id: 16, name: 'Stephanie Adams', age: 36, email: 'stephanie.adams@example.com' },
    { id: 17, name: 'Thomas Hall', age: 27, email: 'thomas.hall@example.com' },
    { id: 18, name: 'Jennifer Wright', age: 40, email: 'jennifer.wright@example.com' },
    { id: 19, name: 'Andrew King', age: 43, email: 'andrew.king@example.com' },
    { id: 20, name: 'Lauren Baker', age: 25, email: 'lauren.baker@example.com' },
  ];

const Table = () => (
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
  </div>
);

export default Table;
