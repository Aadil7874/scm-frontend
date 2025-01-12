import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/pages/login/Login.jsx";
import { useEffect } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import { ForgotPassword } from "./components/pages/login/ForgotPassword.jsx";
import UpdatePassword from "./components/pages/login/UpdatePassword.jsx";
import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import Register from "./components/pages/register/Register.jsx";
function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    if (
      !user &&
      !location.pathname.includes("/forgot-password") &&
      !location.pathname.includes("/update-password") &&
      !location.pathname.includes("/register")
    ) {
      navigate("/login");
    }
  }, [user, navigate]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/update-password/:token" element={<UpdatePassword />} />
        if(user) {<Route path="/dashboard" element={<Dashboard />} />}
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
