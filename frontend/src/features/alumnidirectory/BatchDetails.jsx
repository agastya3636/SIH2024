import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BatchDetails = () => {
  const { year } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [batch, setBatch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBatch = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/alumni?batch=${year}`);
        if (!response.ok) {
          throw new Error("Failed to fetch batch");
        }
        const data = await response.json();
        setBatch(data.alumni);
      }
      catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBatch();

  });

  if (loading) {
    return <p className="text-gray-600">Loading batch...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStudents = batch.filter((student) =>
    student.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8">
      <div className="flex items-center justify-between w-full max-w-6xl mb-8">
        <h1 className="text-white text-3xl font-bold">Batch of {year}</h1>
        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 px-4 pr-6 rounded-lg"
        />
      </div>
      <div className="w-full max-w-6xl">
        {filteredStudents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-6 shadow-lg transform transition duration-500 hover:scale-105 min-h-[200px] flex items-center"
              >
                <img
                  src={`https://robohash.org/${student.name}.png?size=150x150`}
                  alt="Student Avatar"
                  className="w-24 h-24 rounded-full mr-6"
                />
                <div>
                  <h2 className="text-white text-2xl font-bold mb-2">
                    {student.name}
                  </h2>
                  <p className="text-white text-sm mb-1">{student.department}</p>
                  <p className="text-white text-sm mb-1">
                    {student.current_position}
                  </p>
                  <p className="text-white text-sm mb-4">
                    {student.career_path}
                  </p>
                  <a
                    href={student.linkedinlink}
                    className="text-yellow-300 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <p className="text-white text-2xl font-bold">No match found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BatchDetails;
