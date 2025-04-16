import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  const handleSend = async () => {
    const res = await fetch('https://hook.eu2.make.com/your-webhook-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sasha Live Chat</h1>
      <textarea
        rows='4'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '100%' }}
      />
      <button onClick={handleSend}>Send</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}

export default App;