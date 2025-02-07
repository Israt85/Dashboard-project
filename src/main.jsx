import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayouts from './Layouts/DashboardLayouts.jsx';
import AllUsers from './Pages/AllUsers.jsx';
import UserProfile from './Pages/UserProfile.jsx';
import AllProducts from './Pages/AllProducts.jsx';
import AddProduct from './Components/AddProduct.jsx';
import Login from './Pages/Login.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
   
    <Route path="dashboard" element={<DashboardLayouts />}>
  <Route path="allusers" element={<AllUsers />} />
  <Route path="user/:id" element={<UserProfile />} />
  <Route path="allproducts" element={<AllProducts />} />
  <Route path="addproduct" element={<AddProduct />} />

</Route>

</Routes>
  </BrowserRouter>,
)
