import React from "react";
import { Link, Switch, useRouteMatch } from "react-router-dom";
import AdminRoute from "../Login/AdminRoute/AdminRoute";
import AddProduct from "./AddProduct/AddProduct";
import "./Dashboard.css";
import DashboardHome from "./DashboardHome/DashboardHome";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageProducts from "./ManageProducts/ManageProducts";
import ManageSiteOrder from "./ManageSiteOrder/ManageSiteOrder";
const Dashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="dashboard">
      <div className="row">
        <div className="col-md-3 dashboard-nav p-0 text-center">
          <Link to={`${url}`}>
            <div className="d-flex pt-2">
             <h4> <i className="fas fa-bars mx-3"></i></h4>
              <h5>Dashboard</h5>
            </div>
          </Link>
          <Link to={`${url}/manageAllOrder`}>
          <div className="d-flex">
          <h5><i className="fas fa-minus-square mx-3"></i></h5>
            <h5>All Orders</h5>
          </div>
          </Link>
          <Link to={`${url}/addProducts`}>
          <div className="d-flex">
          <h5><i className="fas fa-plus-square mx-3"></i></h5>
          <h5>Add a product </h5>
          </div>
          </Link>
          <Link to={`${url}/makeAdmin`}>
          <div className="d-flex">
          <h5><i className="fas fa-users mx-3"></i></h5>
          <h5>Make an Admin</h5>
          </div>
           
          </Link>
          <Link to={`${url}/manageProducts`}>
          <div className="d-flex">
          <h5><i className="fab fa-product-hunt mx-3"></i></h5>
          <h5>Manage Products</h5>
          </div>
           
          </Link>
        </div>
        <div className="col-md-9 vh-100 overflow-scroll mt-5">
          <Switch>
            <AdminRoute exact path={path}>
            <DashboardHome></DashboardHome>
            </AdminRoute>
            <AdminRoute path={`${path}/manageAllOrder`}>
              <ManageSiteOrder></ManageSiteOrder>
            </AdminRoute>
            <AdminRoute path={`${path}/addProducts`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>

            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            {/* <Route path={`${path}/manageAllOrder`}>
                  <ManageSiteOrder></ManageSiteOrder>
                </Route> */}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
