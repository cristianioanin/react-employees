import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import server from '../server';

function EmployeePage() {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    server.getEmployee(id).then((data) => setEmployee(data));
  }, [id]);

  return (
    <>
      <Header headline="Employee" goBackLink="/home"></Header>
      {employee && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {employee.role}
            </h6>
            <a href={'mailto:' + employee.email} className="card-link">
              {employee.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default EmployeePage;
