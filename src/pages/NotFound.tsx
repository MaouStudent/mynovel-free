// Not Found Page
import React from "react";

export default function NotFound(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg text-gray-500 mb-8">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go back to homepage
      </a>
    </div>
  );
}
