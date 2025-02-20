import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BrainCircuit, Clock, FlaskConical, Heart, History as HistoryIcon, Languages } from 'lucide-react';

const subjects = [
  {
    path: '/math',
    name: 'Математика',
    Icon: BrainCircuit,
    description: 'Формулы, теоремы и решения задач',
    color: 'bg-blue-500',
  },
  {
    path: '/informatics',
    name: 'Информатика',
    Icon: Clock,
    description: 'Алгоритмы, программирование и теория',
    color: 'bg-green-500',
  },
  {
    path: '/history',
    name: 'История',
    Icon: HistoryIcon,
    description: 'Даты, события и исторические личности',
    color: 'bg-yellow-500',
  },
  {
    path: '/russian',
    name: 'Русский язык',
    Icon: Languages,
    description: 'Правила, орфография и пунктуация',
    color: 'bg-red-500',
  },
  {
    path: '/physics',
    name: 'Физика',
    Icon: FlaskConical,
    description: 'Законы, формулы и эксперименты',
    color: 'bg-purple-500',
  },
  {
    path: '/life-safety',
    name: 'ОБЖ',
    Icon: Heart,
    description: 'Безопасность и первая помощь',
    color: 'bg-pink-500',
  },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Добро пожаловать в StudyNotes
        </h1>
        <p className="text-xl text-gray-600">
          Ваш персональный помощник в обучении
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map(({ path, name, Icon, description, color }) => (
          <Link
            key={path}
            to={path}
            className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className={`${color} h-2`} />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Icon className="h-8 w-8 text-gray-700 group-hover:text-gray-900" />
                <h2 className="ml-3 text-xl font-semibold text-gray-900">{name}</h2>
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;