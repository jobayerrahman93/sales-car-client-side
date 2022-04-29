import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/Context/AuthProvider';
import CarDetails from './components/Pages/CarDetails/CarDetails';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import ExploreCar from './components/Pages/ExploreCar/ExploreCar';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login/Login';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';
import Register from './components/Pages/Login/Register/Register';
import MyOrders from './components/Pages/MyOrders/MyOrders';
import PageUnavailable from './components/Pages/PageUnavailable/PageUnavailable';
import Pay from './components/Pages/Pay/Pay';
import Review from './components/Pages/Review/Review';

function App() {
  

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/pay">
              <Pay></Pay>
            </Route>
            <Route path="/myOrder">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>

            <Route path="/explore">
              <ExploreCar></ExploreCar>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <PrivateRoute path="/carDetails/:carID">
              <CarDetails></CarDetails>
            </PrivateRoute>

            <Route path="*">
              <PageUnavailable></PageUnavailable>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
