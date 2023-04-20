import * as React from 'react';
import Search from './Search';
import Table from './Table';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Users table</h1>
      <Search />
      <Table />
    </div>
  );
}
