import { Routes, Route, NavLink } from "react-router-dom";

import AddProduct from "../admin/AddProduct";
import ManageProducts from "../admin/ManageProducts";
import Deals from "../admin/Deals";
import NewArrivals from "../admin/NewArrivals";

import "../styles/Admin.css";

export default function Admin() {
  return (
    <div className="admin-wrapper">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">

        <div className="admin-logo">
          🛒 ShopAdmin
        </div>

        <nav className="admin-menu">

          {/* 🔥 FIX: ABSOLUTE PATH (IMPORTANT) */}
          <NavLink to="/admin/add-product" className={({ isActive }) => isActive ? "active" : ""}>
            ➕ Add Product
          </NavLink>

          <NavLink to="/admin/manage-products" className={({ isActive }) => isActive ? "active" : ""}>
            📦 Manage Products
          </NavLink>

          <NavLink to="/admin/deals" className={({ isActive }) => isActive ? "active" : ""}>
            🔥 Deals
          </NavLink>

          <NavLink to="/admin/new-arrivals" className={({ isActive }) => isActive ? "active" : ""}>
            🆕 New Arrivals
          </NavLink>

        </nav>

        <div className="admin-footer">
          © 2026 ShopHub
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-content">

        <div className="admin-topbar">
          <h1>Admin Dashboard</h1>
          <p>Manage products, deals & arrivals</p>
        </div>

        <div className="admin-page">

          {/* IMPORTANT: same relative routes here */}
          <Routes>
            <Route path="add-product" element={<AddProduct />} />
            <Route path="manage-products" element={<ManageProducts />} />
            <Route path="deals" element={<Deals />} />
            <Route path="new-arrivals" element={<NewArrivals />} />
          </Routes>

        </div>

      </main>

    </div>
  );
}