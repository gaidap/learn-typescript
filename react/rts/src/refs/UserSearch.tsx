// You can use this style of component writing for quick prototyping
import { useState, useRef, useEffect } from 'react';

const users = [
  { name: 'Paul', age: 23 },
  { name: 'Frederik', age: 27 },
  { name: 'Robin', age: 27 },
  { name: 'Julia', age: 32 }
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
    inputRef.current?.focus();
  };

  return <div>
    User Search
    <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={onClick}>Find User</button>
    <div>
      {user?.name} {user && `(${user.age})`}
    </div>
  </div>;
};

export default UserSearch;