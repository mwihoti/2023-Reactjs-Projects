import { useState, useEffect } from 'react';
import './App.css';



  function MonUse () {
    const [bclick, setClick] = useState(0);

    function handleClick1 () {
      setClick(bclick + 1);
    }

    useEffect ( () => {
      document.title = `Click me{bclick}`;
    })

  

  return (
    <div className="App">
      <h1>Today I am doing usestate</h1>

      <button onClick={handleClick1}>
        Click me {bclick}.
      </button>
    </div>
  );
}

export default MonUse;
