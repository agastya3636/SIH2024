import React from "react";
import { useParams } from "react-router-dom";
import { mentorshipPrograms } from "../../utils/MockData";

const ProgramDetails = () => {
  const { id } = useParams();
  const program = mentorshipPrograms.programs.find(
    (p) => p.id === parseInt(id)
  );

  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img
          src={program.mentor.image}
          alt={program.title}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          {program.title}
        </h1>
        <p className="text-gray-600 text-center mb-2">{program.mentor.name}</p>
        <p className="text-gray-600 text-center mb-2">{program.duration}</p>
        <p className="text-gray-600 mb-4">{program.description}</p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Benefits</h2>
        <ul className="list-disc list-inside mb-4">
          {program.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-600">
              {benefit}
            </li>
          ))}
        </ul>
        <p className="text-gray-600 mb-2">
          <strong>Prerequisites:</strong> {program.prerequisites}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Application Process:</strong> {program.applicationProcess}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Fees:</strong> {program.fees}
        </p>
      </div>
    </div>
  );
};

export default ProgramDetails;
