import React from 'react';

const Russian = () => {
  const topics = [
    {
      title: 'Орфография',
      sections: [
        {
          name: 'Правописание приставок',
          content: [
            'пре-/при- (прибежать - приближение, преграда - превосходство)',
            'з-/с- (здать, здесь, здание, но: здоровье, здравствуй)',
            'раз-/рас-, воз-/вос- (разбить - распилить)',
          ],
        },
        {
          name: 'Правописание корней',
          content: [
            'гар-/гор- (загар - загореть)',
            'клан-/клон- (поклон - кланяться)',
            'лаг-/лож- (положить - полагать)',
          ],
        },
      ],
    },
    {
      title: 'Пунктуация',
      sections: [
        {
          name: 'Знаки препинания в простом предложении',
          content: [
            'Тире между подлежащим и сказуемым',
            'Знаки при однородных членах',
            'Обособление определений и приложений',
          ],
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Русский язык</h1>
      
      <div className="space-y-8">
        {topics.map((topic) => (
          <div key={topic.title} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{topic.title}</h2>
            
            <div className="space-y-6">
              {topic.sections.map((section) => (
                <div key={section.name} className="border-l-4 border-red-500 pl-4">
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

export default Russian;