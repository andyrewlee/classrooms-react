import React, { useState } from 'react';

const App = () => {
  const [teachers, setTeachers] = useState([]);

  fetch('http://localhost:3000/teachers').then((res) => {
    return res.json();
  }).then((res) => {
    setTeachers(res);
  });

  const renderTeachers = () => {
    return teachers.map((teacher) => {
      return (
        <div key={teacher.id}>
          <p>{teacher.firstName} {teacher.lastName}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Hello World</h1> 
      {renderTeachers()}
    </div>
  );
}

export default App;
