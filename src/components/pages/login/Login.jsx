import { Formik, Form, ErrorMessage, Field } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import useLogin from "./useLogin";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  const [loading, setLoading] = useState(false);
  const { handleSubmit } = useLogin({ setLoading });
  const btnClass = classNames({
    "px-4 py-2 text-white bg-blue-600 rounded mt-4": true,
    "animate-pulse": loading,
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid Email!")
          .required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={handleSubmit}
    >
      <Form className="bg-gray-900  text-white h-screen flex justify-center items-center">
        <div className="bg-gray-800 border relative border-gray-700 rounded-lg p-8 w-full max-w-md">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Enter Email
            </label>
            <Field
              name="email"
              type="text"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-red-500 text-xs mt-1">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Enter Password
            </label>
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-red-500 text-xs mt-1">
              <ErrorMessage name="password" />
            </div>
            <Link
              to="/forgot-password"
              className="text-xs text-blue-500 hover:underline mt-2 inline-block"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            disabled={loading}
            type="submit"
            className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Login
          </button>
          <Link
            to={
              !location.pathname.includes("register") ? "/register" : "/login"
            }
            className="text-right block absolute top-3 right-8 hover:scale-105 hover:underline transition-all"
          >
            {!location.pathname.includes("register") ? "Register" : "Login"}
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
