import React from 'react';
import StudentCard from './components/StudentCard';

const students = [
  { name: 'Mujtaba Chandio', age: 20, rollNumber: '43160', studentClass: '12th Grade' },
  { name: 'Ali imran', age: 20, rollNumber: '5685', studentClass: '12th Grade' },
  { name: 'Akram', age: 15, rollNumber: '6969', studentClass: '12th Grade' },
];

const Page = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 items-center min-h-screen bg-gray-100 p-10">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          age={student.age}
          rollNumber={student.rollNumber}
          studentClass={student.studentClass}
        />
      ))}
    </div>
  );
};

export default Page;
