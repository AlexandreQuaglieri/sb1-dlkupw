import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProspectList from './pages/ProspectList';
import ProspectDetails from './pages/ProspectDetails';
import KanbanBoard from './pages/KanbanBoard';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">CRM Application</h1>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/prospects" element={<ProspectList />} />
            <Route path="/prospects/:id" element={<ProspectDetails />} />
            <Route path="/kanban" element={<KanbanBoard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;