import React, { useEffect, useState } from 'react';

const App = () => {
  const [teachers, setTeachers] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/teachers').then((res) => {
      return res.json();
    }).then((res) => {
      setTeachers(res);
    });
  }, []);

  const renderTeachers = () => {
    return teachers.map((teacher) => {
      return (
        <div key={teacher.id}>
          <p>{teacher.firstName} {teacher.lastName}</p>
        </div>
      );
    });
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = () => {
    const body = { firstName, lastName };

    fetch(
      'http://localhost:3000/teachers',
      {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
    ).then((res) => {
      return res.json();
    }).then((res) => {
      setTeachers([...teachers, res]);
    })
  };

  return (
    <div>
      <h1>Hello World</h1> 
      {renderTeachers()}

      <input type="text" onChange={handleFirstNameChange} />
      <input type="text" onChange={handleLastNameChange} />
      <button onClick={handleSubmit}>Add Teacher</button>
    </div>
  );
}

export default App;
