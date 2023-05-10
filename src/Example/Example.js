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
        ...user,
        [name]: value
      });
    }
  
    const inputFields = [
      { name: 'name', label: 'Name', type: 'text' },
      { name: 'age', label: 'Age', type: 'number' },
      { name: 'email', label: 'Email', type: 'email' }
    ];
  
    return (
      <div>
        {inputFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={user[field.name]}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
    );
  }
