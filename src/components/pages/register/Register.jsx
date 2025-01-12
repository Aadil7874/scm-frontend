import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import useRegister from "./useRegister";
import { Link } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit } = useRegister({ setLoading });

  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          username: "",
          role: "",
          phone: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required("Full Name is required"),
          username: Yup.string().required("Username is required"),
          role: Yup.string(),
          phone: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
            .typeError("jjjjjjj")
            .required("Phone is required"),
          email: Yup.string()
            .email("Invalid Email!")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={handleSubmit}
      >
        <Form className="bg-gray-900 text-white max-h-max flex justify-center items-center">
          <div className="bg-gray-800 border relative border-gray-700 mt-9 rounded-lg p-8 h-auto max-h-max w-full max-w-md">
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Enter Full Name <span className="text-yellow-300">*</span>
              </label>
              <Field
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-red-400 text-xs mt-1">
                <ErrorMessage name="fullName" />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Enter Username <span className="text-yellow-300">*</span>
              </label>
              <Field
                name="username"
                type="text"
                placeholder="Enter your username"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-red-400 text-xs mt-1">
                <ErrorMessage name="username" />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Enter Role
              </label>
              <Field
                name="role"
                type="text"
                placeholder="Enter your role"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-red-400 text-xs mt-1">
                <ErrorMessage name="role" />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Enter Phone <span className="text-yellow-300">*</span>
              </label>
              <Field
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-red-400 text-xs mt-1">
                <ErrorMessage name="phone" />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Enter Email <span className="text-yellow-300">*</span>
              </label>
              <Field
                name="email"
                type="text"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-red-400 text-xs mt-1">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Enter Password <span className="text-yellow-300">*</span>
              </label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-red-400 text-xs mt-1">
                <ErrorMessage name="password" />
              </div>
            </div>
            <button
              disabled={loading}
              type="submit"
              className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Register
            </button>
            <Link
              to={
                location.pathname.includes("register") ? "/login" : "/register"
              }
              className="text-right block absolute top-3 right-8 hover:scale-105 hover:underline transition-all"
            >
              {location.pathname.includes("register") ? "Login?" : "Register"}
            </Link>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
