import React from 'react';
import { Link, Switch, useRouteMatch } from 'react-router-dom';
import DashboardHome from '../Dashboard/DashboardHome/DashboardHome';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddProduct from './AddProduct/AddProduct';
import './Dashboard.css';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';
import ManageSiteOrder from './ManageSiteOrder/ManageSiteOrder';
const Dashboard = () => {

    let { path, url } = useRouteMatch();

    return (
        <div>
            <div className="row">
                <div className="col-md-3 text-center my-5">
                    <Link to="/">
                        <h4>Home</h4>
                    </Link>
                    <Link to={`${url}`}>
                        <h5>Dashboard</h5>
                    </Link>
                    <Link to={`${url}/manageAllOrder`}>
                        <h5>Manage All Orders</h5>
                    </Link>
                    <Link to={`${url}/addProducts`}>
                        <h5>Add a product </h5>
                    </Link>
                    <Link to={`${url}/makeAdmin`}>
                        <h5>Make an Admin</h5>
                    </Link>
                    <Link to={`${url}/manageProducts`}>
                        <h5>Manage Products</h5>
                    </Link>
                </div>
                <div className="col-md-9">

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