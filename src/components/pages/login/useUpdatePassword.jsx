import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../../api.json";
import { toast } from "react-toastify";

const useUpdatePassword = (props) => {
  const { setLoading, token } = props;
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const handleUpdatePassword = async (values) => {
    try {
      const payload = { ...values, token };
      setLoading(true);
      const response = await axios.post(baseURL + api.updatePassword, payload);
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        navigate("/login");
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
  return { handleUpdatePassword };
};
export default useUpdatePassword;
