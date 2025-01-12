import { ErrorMessage, Field, Formik, Form } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import useUpdatePassword from "./useUpdatePassword";
import { useParams } from "react-router-dom";

const UpdatePassword = (props) => {
  const [loading, setLoading] = useState(false);
  const { toastMsg } = props;
  const { token } = useParams();
  const { handleUpdatePassword } = useUpdatePassword({ setLoading, token });

  return (
    <>
      {toastMsg}
      <Formik
        initialValues={{
          newPassword: "",
          confirmNewPassword: "",
        }}
        validationSchema={Yup.object({
          newPassword: Yup.string().required("Password is required"),
          confirmNewPassword: Yup.string()
            .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
            .required("Confirm New Password is required"),
        })}
        onSubmit={handleUpdatePassword}
      >
        <Form className="bg-gray-900 h-screen flex justify-center items-center">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 w-full max-w-md">
            <div className="mb-6">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Enter New Password
              </label>
              <Field
                name="newPassword"
                type="password"
                placeholder="Enter new password"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-red-500 text-xs mt-1">
                <ErrorMessage name="newPassword" />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmNewPassword"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Confirm New Password
              </label>
              <Field
                name="confirmNewPassword"
                type="password"
                placeholder="Confirm your new password"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="text-red-500 text-xs mt-1">
                <ErrorMessage name="confirmNewPassword" />
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

export default UpdatePassword;
