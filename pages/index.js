import React, { useState } from "react";
import * as Yup from "yup";
import { Form, ErrorMessage, Formik, Field } from "formik";
import NavMenu from "@/components/NavMenu";

const Signup = () => {
  // const [fields, setFields] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   checkbox: false,
  // });
  // const changeHandler = (event) => {
  //   event.target.id === "checkbox"
  //     ? setFields({
  //         ...fields,
  //         checkbox: event.target.checked,
  //       })
  //     : setFields({
  //         ...fields,
  //         [event.target.id]: event.target.value,
  //       });
  // };
  return (
    <>
      <NavMenu />
      <div className="h-screen bg-slate-200 flex justify-center items-center">
        <Formik
          validationSchema={Yup.object().shape({
            userName: Yup.string()
              .required("Required")
              .max(10, "Less than 10")
              .min(5, "More than 4"),
            email: Yup.string().required("Required").email(),
            password: Yup.string()
              .min(6, "At least 6 characters")
              .required("Required"),
            cPassword: Yup.string().required("Required"),
            checkbox: Yup.boolean().oneOf([true], "You must accept the terms "),
          })}
          initialValues={{
            userName: "",
            email: "",
            password: "",
            cPassword: "",
            checkbox: false,
          }}
          onSubmit={(value) => {
            console.log(value.userName, value.password);
          }}
        >
          <Form className="container bg-slate-50 rounded-2xl flex flex-col px-14 py-10 mx-32 lg:mx-96 ">
            <h1 className="font-black text-center text-indigo-500 tracking-wider text-4xl">
              Login
            </h1>
            <label htmlFor="userName" className="mt-6 font-semibold">
              Username
            </label>
            <Field
              className="border border-indigo-700 rounded-xl px-3 py-0.5"
              type="text"
              id="userName"
              placeholder="Enter your username"
              name="userName"
            />
            <ErrorMessage
              className="text-rose-500 font-semibold"
              name="userName"
            />
            <label htmlFor="email" className="mt-4 font-semibold">
              Email
            </label>
            <Field
              type="email"
              id="email"
              className="border border-indigo-700 rounded-xl px-3 py-0.5"
              placeholder="Enter your email"
              name="email"
            />
            <ErrorMessage
              className="text-rose-500 font-semibold"
              name="email"
            />

            <label htmlFor="password" className="mt-4 font-semibold">
              Password
            </label>
            <Field
              type="password"
              id="password"
              className="border border-indigo-700 rounded-xl px-3 py-0.5"
              placeholder="Enter a password"
              name="password"
            />
            <ErrorMessage
              className="text-rose-500 font-semibold"
              name="password"
            />

            <label htmlFor="confirmPassword" className="mt-4 font-semibold">
              Confirm password{" "}
            </label>
            <Field
              type="password"
              id="confirmPassword"
              className="border border-indigo-700 rounded-xl px-3 py-0.5"
              placeholder="Confirm your password"
              name="cPassword"
            />
            <ErrorMessage
              className="text-rose-500 font-semibold"
              name="cPassword"
            />
            <div className="mt-4">
              <label className="mt-4 font-semibold">
                I accept the Google Terms
              </label>
              <Field
                id="checkbox"
                className="accent-indigo-500 mx-4 "
                type="checkbox"
                name="checkbox"
              />
              <ErrorMessage
                className="text-rose-500 font-semibold"
                name="checkbox"
              />
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
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Signup;
