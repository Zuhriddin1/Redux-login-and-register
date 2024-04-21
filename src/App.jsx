// import { Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import { useNavigate } from "react-router-dom";
// import Register from "./components/Register";
// import Table from "./components/Table";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// function App() {
//   const token = useSelector((state) => token.value);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   }, [navigate, token]);
//   function ProtectedRoute({
//     children,
//     isAuthentication,
//     redirectTo = "/login",
//   }) {
//     if (!isAuthentication) {
//       navigate(redirectTo);
//     }
//     return children;
//   }
//   return (
//     <div>
//       <Routes>
//         <Route path="/register" element={<Register />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute isAuthentication={token ? true : false}>
//               <Table />
//             </ProtectedRoute>
//           }
//         ></Route>
//       </Routes>
//     </div>
//   );
// }
// export default App;
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import { useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Table from "./components/Table";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const token = useSelector((state) => state.token.value);
  const navigate = useNavigate();
  const params = useLocation();
  useEffect(() => {
    if (!token && params.pathname != "/register") {
      navigate("/login");
    }
  }, [navigate, token]);
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
