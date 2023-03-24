import React, { useState, useEffect } from 'react';

function Username() {
  const [name, setName] = useState('1');
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${name}`)
      .then(response => response.json())
      .then(json => console.log(json))
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
