import React, {useEffect} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {Switch} from "react-router-dom";
import Login from "../components/Login.jsx";
import Users from "../components/Users.jsx";
import Card from "../components/Card.jsx";
import {useSelector} from "react-redux";
import {getRandomCollaborator, getAllCollaborators} from "../components/random.js"

const PrivateRoute = ({component: Component, ...rest}) => {
    const [isLoading, setLoading] = useState(true);
    const [isAuth, setAuth] = useState(false);
    useEffect(() => {
        async function checkAuth() {
            try {
                const {data} = await getRandomCollaborator();
                setAuth(true);
                setLoading(false);
            } catch (error) {
                setAuth(false);
                setLoading(false);
            }
        }

        checkAuth();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: "/login"}}/>
                )
            }
        />
    );
};

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <PrivateRoute path="/users" component={Users}/>
                <PrivateRoute path="/card" component={Card}/>
                <Redirect to={{pathname: "/login"}}/>
            </Switch>
        </Router>
    );
}

export default Routes;
