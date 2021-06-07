/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent } from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    RouteComponentProps,
    Redirect,
} from 'react-router-dom';

import { routes } from './routes';

const Router: FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                {routes.map(route => {
                    return (
                        <Route
                            key={route.name}
                            path={route.path}
                            exact={route.exact}
                            render={(props: RouteComponentProps) => (
                                <route.component
                                    name={route.name}
                                    {...props}
                                    {...route.props}
                                />
                            )}
                        />
                    );
                })}
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
