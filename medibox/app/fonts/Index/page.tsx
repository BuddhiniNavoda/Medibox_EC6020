import React from 'react';

const IndexPage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center text-black"
      style={{
        backgroundImage: `url('https://pplx-res.cloudinary.com/image/upload/v1741026630/user_uploads/fiAFbYEvXSjFFIS/image.jpg')`,
      }}
    >
      <h1 className="text-6xl font-bold mb-8">MedReminder</h1>

      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
