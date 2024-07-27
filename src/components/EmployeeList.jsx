import { useEffect, useState } from 'react';
import server from '../server.js';
import EmployeeCard from './EmployeeCard.jsx';

function EmployeeList({ searchQuery }) {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    server.getEmployees(searchQuery).then((data) => {
      setEmployees(data);
    });
  }, [searchQuery]);

  return (
    <main>
      <ul>
        {employees.map((e) => (
          <EmployeeCard key={e.id} employee={e} />
        ))}
      </ul>
    </main>
  );
}

export default EmployeeList;
