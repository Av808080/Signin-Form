import React, { useState } from "react";

const Signup = () => {
  const [fields, setFields] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  });
  const changeHandler = (event) => {
    event.target.id === "checkbox"
      ? setFields({
          ...fields,
          checkbox: event.target.checked,
        })
      : setFields({
          ...fields,
          [event.target.id]: event.target.value,
        });
  };
  return (
    <div className="h-screen bg-slate-200 flex justify-center items-center">
      <div className="container bg-slate-50 rounded-2xl flex flex-col px-14 py-10 mx-32 lg:mx-96 ">
        <h1 className="font-black text-center text-indigo-500 tracking-wider text-4xl">
          Login
        </h1>
        <label htmlFor="userName" className="mt-6 font-semibold">
          Username
        </label>
        <input
          className="border border-indigo-700 rounded-xl px-3 py-0.5"
          type="text"
          id="userName"
          placeholder="Enter your username"
          onChange={changeHandler}
          value={fields.userName}
        />
        <p className="text-rose-500 font-semibold">Error</p>
        <label htmlFor="email" className="mt-4 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-indigo-700 rounded-xl px-3 py-0.5"
          placeholder="Enter your email"
          onChange={changeHandler}
          value={fields.email}
        />
        <p className="text-rose-500 font-semibold">Error</p>

        <label htmlFor="password" className="mt-4 font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border border-indigo-700 rounded-xl px-3 py-0.5"
          placeholder="Enter a password"
          onChange={changeHandler}
          value={fields.password}
        />
        <p className="text-rose-500 font-semibold">Eror</p>

        <label htmlFor="confirmPassword" className="mt-4 font-semibold">
          Confirm password{" "}
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="border border-indigo-700 rounded-xl px-3 py-0.5"
          placeholder="Confirm your password"
          onChange={changeHandler}
          value={fields.confirmPassword}
        />
        <p className="text-rose-500 font-semibold">Error</p>
        <div className="mt-4">
          <label className="mt-4 font-semibold">
            I accept the Google Terms
          </label>
          <input
            id="checkbox"
            className="accent-indigo-500 ml-4"
            type="checkbox"
            onChange={changeHandler}
            value={fields.checkbox}
          />
          <p className="text-rose-500 font-semibold">Error</p>
        </div>
        <div className="flex justify-around mt-6">
          <button className="bg-slate-300 hover:text-slate-50 transition duration-200 hover:bg-indigo-700 font-semibold p-2 px-4 rounded-xl">
            Login Page
          </button>
          <button
            title="Press to Sign In"
            className="bg-indigo-700 transition duration-200 hover:bg-indigo-800 font-semibold text-slate-50 p-2 px-4 rounded-xl"
          >
            Login{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
