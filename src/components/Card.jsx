import React from "react";

export function Card({ children }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-80 text-center">
      {children}
    </div>
  );
}
