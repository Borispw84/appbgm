import React from "react";

export function Button({ onClick, children }) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
