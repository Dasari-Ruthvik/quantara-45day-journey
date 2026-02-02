import { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');
  
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px',
      margin: '20px' 
    }}>
      <h2>What's your name? 👋</h2>
      
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name..."
        style={{
          padding: '10px',
          fontSize: '16px',
          margin: '10px'
        }}
      />
      
      {name && (
        <h1 style={{ color: 'purple' }}>
          Hello, {name}! 🎉
        </h1>
      )}
    </div>
  );
}

export default Greeting;