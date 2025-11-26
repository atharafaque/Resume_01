import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-opacity-20" style={{
          backgroundImage: 'url(data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.5"/></pattern></defs><rect width="1200" height="600" fill="url(%23grid)" /></svg>)'
        }} />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Dr. Ankur Biswas</h1>
        <p className="text-xl text-blue-100">Senior Scientist</p>
        <p className="text-lg text-blue-100">Agricultural Statistics & Sample Surveys</p>
        <p className="text-base text-blue-100 mt-2">ICAR-Indian Agricultural Statistics Research Institute</p>
      </div>
    </div>
  );
};

export default Header;
