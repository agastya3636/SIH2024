// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// const ProfileCard = () => {
//   const [profile, setProfile] = useState(null);  // Local profile state
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:8000/alumni");
//         if (!response.ok) {
//           throw new Error("Failed to fetch profile");
//         }
//         const data = await response.json();
//         console.log(data);
//         setProfile(data.events[0]);  // Assuming data contains an array
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     profile && (
//       <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg p-8 max-w-7xl mx-auto text-white flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-14">
//         {/* Profile Picture */}
//         <div className="flex-shrink-0">
//           <img
//             src={profile?.image}
//             alt="Profile"
//             className="w-64 h-64 rounded-full border-4 border-white shadow-lg"
//           />
//         </div>

//         {/* Profile Details */}
//         <div className="flex-grow space-y-6">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold">{profile.name}</h2>
//             <p className="text-lg">{profile.email}</p>
//             <span
//               className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
//                 profile.role
//                   ? "bg-green-200 text-green-800"
//                   : "bg-blue-200 text-blue-800"
//               }`}
//             >
//               {profile.role ? "Student" : "Alumnus"}
//             </span>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <h3 className="text-xl font-semibold">Bio</h3>
//               <p className="text-sm mt-2">{profile.bio}</p>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold">Education</h3>
//               <p className="text-sm mt-2">{profile.education}</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <h3 className="text-xl font-semibold">Skills</h3>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {profile.skills.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold">Interests</h3>
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {profile.interests.map((interest, index) => (
//                   <span
//                     key={index}
//                     className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
//                   >
//                     {interest}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold">Batch</h3>
//             <p className="text-sm mt-2">{profile.batch}</p>
//           </div>
//         </div>

//         {/* Social Links */}
//         <div className="flex flex-col items-center space-y-4">
//           {profile.socialLinks.github && (
//             <a
//               href={profile.socialLinks.github}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaGithub className="text-3xl hover:text-gray-300" />
//             </a>
//           )}
//           {profile.socialLinks.linkedin && (
//             <a
//               href={profile.socialLinks.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin className="text-3xl hover:text-gray-300" />
//             </a>
//           )}
//           {profile.socialLinks.twitter && (
//             <a
//               href={profile.socialLinks.twitter}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaTwitter className="text-3xl hover:text-gray-300" />
//             </a>
//           )}
//         </div>
//       </div>
//     )
//   );
// };

// export default ProfileCard;

import React from "react";
import { useSelector } from "react-redux";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ProfileCard = () => {
  const profile = useSelector((state) => state.profile);
  // Replace with a valid anime image URL

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg p-8 max-w-7xl mx-auto text-white flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-14">
      {/* Profile Picture */}
      <div className="flex-shrink-0">
        <img
          src={profile?.image}
          alt="Profile"
          className="w-64 h-64 rounded-full border-4 border-white shadow-lg"
        />
      </div>

      {/* Profile Details */}
      <div className="flex-grow space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{profile.name}</h2>
          <p className="text-lg">{profile.email}</p>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              profile.role
                ? "bg-green-200 text-green-800"
                : "bg-blue-200 text-blue-800"
            }`}
          >
            {profile.role ? "Student" : "Alumnus"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">Bio</h3>
            <p className="text-sm mt-2">{profile.bio}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Education</h3>
            <p className="text-sm mt-2">{profile.education}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Interests</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {profile.interests.map((interest, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Batch</h3>
          <p className="text-sm mt-2">{profile.batch}</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex flex-col items-center space-y-4">
        {profile.socialLinks.github && (
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl hover:text-gray-300" />
          </a>
        )}
        {profile.socialLinks.linkedin && (
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl hover:text-gray-300" />
          </a>
        )}
        {profile.socialLinks.twitter && (
          <a
            href={profile.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-3xl hover:text-gray-300" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
