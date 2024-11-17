import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login/Login";
import AddNewAdmin from "../pages/AdminManagement/AddNewAdmin";
import AllAdmin from "../pages/AdminManagement/AllAdmin";
import ManageFood from "../pages/ManageFood/ManageFood";
import Dashoboard from "../pages/Dashboard/Dashoboard";
import AddFood from "../pages/ManageFood/AddFood";
import UpdateFood from "../pages/ManageFood/UpdateFood";
import Category from "../pages/Category/Category";

export default function Routers() {
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route path="/addAdmin" element={<AddNewAdmin />} />
        <Route path="/all-admin" element={<AllAdmin />} />
        <Route path="/" element={<Dashoboard />} />
        <Route path="/manage-food" element={<ManageFood />} />
        <Route path="/add-food" element={<AddFood />} />
        <Route path="/update-food" element={<UpdateFood />} />
        {/* Category route */}
        <Route path="/category" element={<Category />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}
