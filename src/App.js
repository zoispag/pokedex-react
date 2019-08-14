import React, { useState } from 'react';
import Pokemon from './components/Pokemon';

function App() {
  const [maxCount, setCount] = useState(50);

  return (
    <div id="app">
      <div className="flex mx-auto max-w-full w-screen flex-wrap">
        {Array.from(Array(maxCount + 1).keys()).filter(i => i > 0).map(i => {
          return (<Pokemon key={i} pokeId={i} />)
        })}
      </div>
      <div className="flex mx-auto">
        <button 
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={() => setCount(maxCount + 50)}
        >Load more { maxCount }
        </button>
      </div>
    </div>
  );
}

export default App;
