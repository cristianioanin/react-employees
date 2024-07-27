import { Link } from 'react-router-dom';
import './EmployeeCard.css';

function EmployeeCard({ employee }) {
  return (
    <Link to={'/employee/' + employee}>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{employee.name}</h2>
          <p className="card-subtitle mb-2 text-body-secondary">
            {employee.role}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default EmployeeCard;
