import React, { useState } from 'react';

const App = () => {
  const [teachers, setTeachers] = useState([]);

  fetch('http://localhost:3000/teachers').then((res) => {
    return res.json();
  }).then((res) => {
    setTeachers(res);
  });

  const renderTeachers = () => {
    const renderedTeachers = [];

    for (let i = 0; i < teachers.length; i++) {
      const currentTeacher = teachers[i];
      const renderedTeacher = (
        <div key={currentTeacher.id}>
          <p>{currentTeacher.firstName} {currentTeacher.lastName}</p>
        </div>
      );

      renderedTeachers.push(renderedTeacher);
    }

    return renderedTeachers;
  };

  return (
    <div>
      <h1>Hello World</h1> 
      {renderTeachers()}
    </div>
  );
}

export default App;
