import React from 'react';

const Math = () => {
  const topics = [
    {
      title: 'Тригонометрия',
      sections: [
        {
          name: 'Основные формулы',
          content: [
            'sin²α + cos²α = 1',
            'tgα = sinα / cosα',
            'ctgα = cosα / sinα',
          ],
        },
        {
          name: 'Формулы сложения',
          content: [
            'sin(α ± β) = sinα·cosβ ± cosα·sinβ',
            'cos(α ± β) = cosα·cosβ ∓ sinα·sinβ',
          ],
        },
      ],
    },
    {
      title: 'Алгебра',
      sections: [
        {
          name: 'Квадратные уравнения',
          content: [
            'ax² + bx + c = 0',
            'D = b² - 4ac',
            'x = (-b ± √D) / (2a)',
          ],
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Математика</h1>
      
      <div className="space-y-8">
        {topics.map((topic) => (
          <div key={topic.title} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{topic.title}</h2>
            
            <div className="space-y-6">
              {topic.sections.map((section) => (
                <div key={section.name} className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{section.name}</h3>
                  <ul className="space-y-2">
                    {section.content.map((formula, index) => (
                      <li key={index} className="text-gray-700 font-mono bg-gray-50 p-2 rounded">
                        {formula}
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
};

export default Math;