import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

const App: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm sticky-top">
        <div className="container-fluid">
          {/* Brand */}
          <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <span className="me-2 fs-4">🌿</span> <span className="fs-5">Shop DUY HẢI</span>
          </NavLink>

          {/* Toggle mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link px-3 rounded-pill fw-semibold ${isActive ? "bg-light text-success shadow-sm" : "text-white"}`
                  }
                  to="/"
                >
                  📦 Danh sách
                </NavLink>
              </li>
              <li className="nav-item ms-2">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link px-3 rounded-pill fw-semibold ${isActive ? "bg-light text-success shadow-sm" : "text-white"}`
                  }
                  to="/add"
                >
                  ➕ Thêm mới
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Routes: background full width, nội dung chính căn giữa bằng site-inner */}
      <div className="bg-light min-vh-100 py-4">
        <div className="container-fluid px-0">
          <div className="site-inner mx-auto">
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="/products/:id" element={<Detail />} />
              <Route path="/add" element={<Add />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
