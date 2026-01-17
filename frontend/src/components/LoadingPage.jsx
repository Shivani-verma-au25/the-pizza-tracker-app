import React from "react";

const LoadingPage = ({ text = "Loading" }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Spinner */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute h-20 w-20 animate-spin rounded-full border-4 border-gray-200 border-t-black"></div>
        <div className="absolute h-10 w-10 animate-pulse rounded-full bg-black"></div>
      </div>

      {/* Text */}
      <p className="mt-6 text-lg font-semibold tracking-wide text-gray-700">
        {text}
        <span className="animate-pulse">...</span>
      </p>
    </div>
  );
};

export default LoadingPage;
