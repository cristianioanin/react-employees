import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmployeePage from './pages/EmployeePage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route index path="home" element={<Home />} />
        <Route path="employee/:id" element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
