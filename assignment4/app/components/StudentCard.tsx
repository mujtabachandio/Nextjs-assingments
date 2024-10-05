import React from 'react';

interface StudentCardProps {
  name: string;
  age: number;
  rollNumber: string;
  studentClass: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, age, rollNumber, studentClass }) => {
  return (
    <div className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 transform transition duration-300 hover:shadow-1xl hover:scale-105">
      {/* Avatar section */}
      <div className="flex justify-center p-6 bg-purple-500">
        <div className="bg-black rounded-full p-2">
          <img
            className="h-24 w-24 rounded-full"
            src={`https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=6B21A8&color=fff`}
            alt={name}
          />
        </div>
      </div>

      {/* Student information */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
        <p className="text-gray-600 mb-1">Age: {age}</p>
        <p className="text-gray-600 mb-1">Roll Number: {rollNumber}</p>
        <p className="text-gray-600">Class: {studentClass}</p>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 p-4 text-center">
        <button className="bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
