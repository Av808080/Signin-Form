import React from "react";
import Image from "next/image";

const Email = () => {
  return (
    <div className="bg-gray-500 flex justify-center items-center h-screen">
      <div className="flex max-w-5xl md:flex-row flex-col bg-slate-800 m-7 justify-center items-center rounded-xl p-4">
        <img
          src="https://loodibee.com/wp-content/uploads/Netflix-N-Symbol-logo.png"
          className="w-96  h-96"
        />
        <div className="md:flex md:flex-col">
          <h2 className="font-bold text-xl text-center text-white">
            Get diet and fitness tips in your inbox
          </h2>
          <p className="text-white font-semibold text-center">
            Eat better and exersice better.Sign up for the diet & fitness
            newsletter
          </p>
          <div className="flex flex-col mt-5 md:mt-8">
            <input
              type="email"
              className="border m-1 bg-transparent text-white p-1 px-2 rounded-md placeholder:text-center placeholder:text-white"
              placeholder="Enter your email address"
            />
            <button className="bg-red-600 text-slate-50 p-1 m-1 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
