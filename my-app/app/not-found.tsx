import React from "react";
import { FaDroplet } from "react-icons/fa6";

const NotFound: React.FC = () => {
  return (
    <div className="place-content-center relative h-[85vh] place-items-center flex bg-gradient-to-r from-primary to-accent ">
      <div className="flex flex-col items-center top-50 justify-center bg-background shadow rounded p-10 w-[50%]  text-primary px-10">
        <h1 className="text-6xl font-bold flex items-center gap-4">
          <FaDroplet className="animate-bounce w-10 h-10" />
          404
        </h1>
        <p className="text-xl mt-4">
          Oops! The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;