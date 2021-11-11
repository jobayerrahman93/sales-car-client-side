import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function PrivateRoute({ children, ...rest }) {

    const { user, isLoading } = useAuth();

    // console.log("private user",user);

    if (isLoading) {
        return (
            <div className="text-center my-5 vh-100">
                <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
        )
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default PrivateRoute;