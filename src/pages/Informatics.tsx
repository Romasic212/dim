import React from 'react';

const Informatics = () => {
  const topics = [
    {
      title: 'Алгоритмы',
      sections: [
        {
          name: 'Основные понятия',
          content: [
            'Алгоритм - последовательность действий',
            'Блок-схема - графическое представление алгоритма',
            'Линейный алгоритм - последовательное выполнение действий',
          ],
        },
        {
          name: 'Типы алгоритмов',
          content: [
            'Линейные алгоритмы',
            'Разветвляющиеся алгоритмы',
            'Циклические алгоритмы',
          ],
        },
      ],
    },
    {
      title: 'Программирование',
      sections: [
        {
          name: 'Основы Python',
          content: [
            'print("Hello, World!") - вывод на экран',
            'input() - ввод данных',
            'if-else - условные конструкции',
          ],
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Информатика</h1>
      
      <div className="space-y-8">
        {topics.map((topic) => (
          <div key={topic.title} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{topic.title}</h2>
            
            <div className="space-y-6">
              {topic.sections.map((section) => (
                <div key={section.name} className="border-l-4 border-green-500 pl-4">
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
};

export default Informatics;