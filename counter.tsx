import { useState } from 'react';

function Counter() {
  // State to track the count
  const [count, setCount] = useState(0);
  
  // Function to increment
  const increment = () => {
    setCount(count + 1);
  };
  
  // Function to decrement
  const decrement = () => {
    setCount(count - 1);
  };
  
  // Function to reset
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div style={{ 
      textAlign: 'center', 
      marginTop: '50px',
      padding: '20px' 
    }}>
      <h1>My First Counter App 🎯</h1>
      
      <div style={{ 
        fontSize: '48px', 
        margin: '20px',
        color: count > 0 ? 'green' : count < 0 ? 'red' : 'black'
      }}>
        {count}
      </div>
      
      <div>
        <button 
          onClick={increment}
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          ➕ Add 1
        </button>
        
        <button 
          onClick={decrement}
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          ➖ Minus 1
        </button>
        
        <button 
          onClick={reset}
          style={{
            padding: '10px 20px',
            margin: '5px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;