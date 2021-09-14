import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from './components/Details';
import Posts from './components/Posts';
import PageNotFound from './pages/PageNotFound';

const App = () => {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Posts />
                    </Route>
                    <Route path="/details/:id" exact>
                        <Details />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App
