import React from 'react';

const Physics = () => {
  const topics = [
    {
      title: 'Механика',
      sections: [
        {
          name: 'Кинематика',
          content: [
            'v = s/t - скорость',
            'a = Δv/t - ускорение',
            's = v₀t + (at²)/2 - перемещение',
          ],
        },
        {
          name: 'Динамика',
          content: [
            'F = ma - второй закон Ньютона',
            'F₁ = -F₂ - третий закон Ньютона',
            'F = G(m₁m₂)/r² - закон всемирного тяготения',
          ],
        },
      ],
    },
    {
      title: 'Молекулярная физика',
      sections: [
        {
          name: 'Основные формулы',
          content: [
            'p = nkT - основное уравнение МКТ',
            'pV = νRT - уравнение Менделеева-Клапейрона',
            'Q = cm(t₂ - t₁) - количество теплоты',
          ],
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Физика</h1>
      
      <div className="space-y-8">
        {topics.map((topic) => (
          <div key={topic.title} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{topic.title}</h2>
            
            <div className="space-y-6">
              {topic.sections.map((section) => (
                <div key={section.name} className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{section.name}</h3>
                  <ul className="space-y-2">
                    {section.content.map((item, index) => (
                      <li key={index} className="text-gray-700 font-mono bg-gray-50 p-2 rounded">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Physics;