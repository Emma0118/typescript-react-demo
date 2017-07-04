import * as React from 'react';
import {
    Route,
} from 'react-router-dom';
import App from './view/App';
import Login from './view/Login';
export default class Main extends React.Component<{}, {}> {
    render() {
        return (
            <div className="layout">
                <Route path="/" component={App as any} />
                <Route path="/login" component={Login} />
            </div>
        );
    }
}