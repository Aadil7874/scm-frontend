import { useNavigate } from "react-router-dom";
import UpdatePassword from "./UpdatePassword";

const useForgotPassword = (props) => {
  const { setLoading } = props;
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(baseURL + api.forgotPassword, values); // values as a payload
      if (response?.data?.success) {
        UpdatePassword({ toastMsg: toast.success(response?.data?.message) });
        // setGoToUpdatePassword(response?.data?.success);
      } else {
        toast.error(response?.data?.message || "Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return { handleSubmit };
};

export default useForgotPassword;
