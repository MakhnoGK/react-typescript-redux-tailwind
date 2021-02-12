import React from 'react';

export const App: React.FC = (): JSX.Element => {
  return (
    <div className="h-screen bg-blue-800 text-white flex items-center justify-center flex-col">
      <div>
        <h1 className="text-4xl font-bold uppercase mb-3">Full Bundle</h1>
        <p className="mb-2">This bundle contains following:</p>
        <ul className="list-disc ml-5">
          <li>React</li>
          <li>TypeScript</li>
          <li>Redux</li>
          <li>TailwindCSS</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
