import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Trello, BarChart } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-700">CRM</div>
          <div className="flex space-x-4">
            <NavLink to="/" icon={<Home size={20} />} text="Dashboard" />
            <NavLink to="/prospects" icon={<Users size={20} />} text="Prospects" />
            <NavLink to="/kanban" icon={<Trello size={20} />} text="Kanban" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <Link to={to} className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
    {icon}
    <span className="ml-2">{text}</span>
  </Link>
);

export default Navbar;