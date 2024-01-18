import React from 'react';

interface Params {
    message: string
}

const CustomAlertAuth = ( {message}: Params) => {
  return (
    <div className="fixed top-0 w-full flex justify-center items-center mt-10 z-100">
      <div className="bg-yellow-300 p-4 border border-gray-500 rounded-md">
        {message}
      </div>
    </div>
  );
};

export default CustomAlertAuth