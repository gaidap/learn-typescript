import { strict } from 'node:assert';
import { stringify } from 'node:querystring';
import React, { useState } from 'react';

const users = [
  { name: 'Paul', age: 23 },
  { name: 'Frederik', age: 27 },
  { name: 'Robin', age: 27 },
  { name: 'Julia', age: 32 }
];

const USerSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    if (foundUser) {
      setName('');
    } else {
      console.log(`User ${name} not found.`);
    }
    setUser(foundUser);
  };

  return <div>
    User Search
    <input value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={onClick}>Find User</button>
    <div>
      {user?.name}
      <br />
      {user?.age}
    </div>
  </div>;
};

export default USerSearch;