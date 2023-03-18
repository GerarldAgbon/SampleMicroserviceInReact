import React, { useState, useEffect } from 'react';

function Username() {
  const [name, setName] = useState('Type your name');
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch(`/username?name=${name}`)
      .then(response => response.text())
      .then(data => setUsername(data));
  }, [name]);

  return (
    <div>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <p>{username}</p>
    </div>
  );
}

export default Username;