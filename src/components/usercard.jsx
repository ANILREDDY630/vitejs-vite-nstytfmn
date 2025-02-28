// write the component code here
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/100";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main St, Springfield, USA";

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 border border-gray-300">
      <div className="flex flex-col items-center">
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-24 h-24 rounded-full border border-gray-400"
        />
        <h2 className="text-xl font-semibold mt-2">{name}</h2>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-500 text-sm text-center mt-2">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;

