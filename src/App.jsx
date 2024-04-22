import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Table from "./components/Table";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const token = useSelector((state) => state.token.value);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!token && location.pathname !== "/register") {
      navigate("/login");
    }
  }, [navigate, token, location]);
  function ProtectedRoute({
    children,
    isAuthentication,
    redirectTo = "/login",
  }) {
    if (!isAuthentication) {
      navigate(redirectTo);
      return null;
    }
    return children;
  }
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Table />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
