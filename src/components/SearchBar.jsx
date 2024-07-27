import { useEffect, useState } from 'react';

function SearchBar({ onQueryChangeFn }) {
  const [query, setQuery] = useState();

  useEffect(() => {
    onQueryChangeFn(query);
  }, [query, onQueryChangeFn]);

  return (
    <input
      className="form-control my-3 mx-5 w-50"
      type="search"
      placeholder="Search"
      aria-label="Search"
      onInput={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
