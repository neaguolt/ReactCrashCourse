import React, { useState } from 'react';

export default function Example() {
  const [user, setUser] = useState({
    name: 'John',
    age: 30,
    email: 'john@example.com'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user, // se copiaza intregul obiect de stare
      [name]: value // se actualizeaza proprietatea corespunzatoare
    });
  }

  return (
    <div>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <input type="number" name="age" value={user.age} onChange={handleInputChange} />
      <input type="email" name="email" value={user.email} onChange={handleInputChange} />
    </div>
  );
}
