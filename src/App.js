import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import DashboardTemplate from "./components/DashboardTemplate";
import Qoshish from "./pages/Qoshish";
import Foydalanuvchi from "./pages/Foydalanuvchilar";
import Page404 from "./pages/Page404";
import Login from "./pages/Login";
import { useState } from "react";
import { createContext } from "react";

const LoginContext = createContext({ isLogin: false, setLogin: () => {} });

function App() {
  const [isLogin, setLogin] = useState();

  return (
    <Router>
      <LoginContext.Provider value={{ isLogin, setLogin }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          {isLogin && (
            <Route path="/dashboard" element={<DashboardTemplate />}>
              <Route path="home" element={<Dashboard />} />
              <Route path="products/*" element={<Products />} />
              <Route path="statistika/*" element={<Products />} />
              <Route path="qoshish/*" element={<Qoshish />} />
              <Route path="foydalanuvchi/*" element={<Foydalanuvchi />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          )}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </LoginContext.Provider>
    </Router>
  );
}

export { LoginContext };
export default App;
