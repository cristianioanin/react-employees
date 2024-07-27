import { useState } from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import EmployeeList from '../components/EmployeeList';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <h1>React Employees</h1>
      <Header headline="Employees Directory" />
      <SearchBar onQueryChangeFn={onSearchQueryChange} />
      <EmployeeList searchQuery={searchQuery} />
    </>
  );
}

export default Home;
