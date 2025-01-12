import axios from "axios";
import api from "../../../../api.json";
import { ToastContainer, Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const useLogin = (props) => {
  const { setLoading } = props;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(baseURL + api.login, values); /// values as a payload
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        localStorage.setItem("user", JSON.stringify(response?.data?.user));
        navigate("/dashboard");
      } else {
        toast.error(response?.data?.message || "Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };
  return { handleSubmit };
};

export default useLogin;
