import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, BrainCircuit, Clock, FlaskConical, Heart, History as HistoryIcon, Languages } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/math', name: 'Математика', Icon: BrainCircuit },
    { path: '/informatics', name: 'Информатика', Icon: Clock },
    { path: '/history', name: 'История', Icon: HistoryIcon },
    { path: '/russian', name: 'Русский язык', Icon: Languages },
    { path: '/physics', name: 'Физика', Icon: FlaskConical },
    { path: '/life-safety', name: 'ОБЖ', Icon: Heart },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">StudyNotes</span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            {navItems.map(({ path, name, Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(path)
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-4 w-4 mr-1.5" />
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;