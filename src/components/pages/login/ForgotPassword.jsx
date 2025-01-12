import { Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import api from "../../../../api.json";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ForgotPassword = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(baseURL + api.forgotPassword, values); // values as a payload
      if (response?.data?.success) {
        toast.success(response?.data?.message);
      } else {
        toast.error(response?.data?.message || "Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const btnClass = classNames({
    "px-4 py-2 text-white bg-blue-600 rounded mt-4": true,
    "animate-pulse": loading,
  });

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid Email!")
            .required("Email is required"),
        })}
        onSubmit={handleSubmit}
      >
        <Form className="bg-gray-900 h-screen flex justify-center items-center">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 w-full max-w-md">
            <h3 className="font-semibold text-sm text-gray-300 opacity-75 mb-6">
              Enter your user account's verified email address and we will send
              you a password reset link.
            </h3>
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
            <button
              disabled={loading}
              type="submit"
              className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
