import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../../api.json";
const useRegister = (props) => {
  const { setLoading } = props;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post(baseURL + api.register, values);
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/login");
      } else {
        toast.error(res?.data?.message || "Failed");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed to register");
    } finally {
      setLoading(false);
    }
  };
  return { handleSubmit };
};

export default useRegister;
