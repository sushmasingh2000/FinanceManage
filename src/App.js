import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './authentication/Login';
import Register from './authentication/Registration';
import Dashboard from './component/Dashboard';
import Income from './component/pages/Income/Income';
import ExpenseOverview from './component/pages/Expenses/Overview';
import ExpensePage from './component/pages/Expenses/Expense';

function AppRoutes() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<ExpensePage />} />
       
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
