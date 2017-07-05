import * as React from 'react';
import {
    Route,
} from 'react-router-dom';
import App from './view/App';
export default class Main extends React.Component<{}, {}> {
    render() {
        return (
            <div className="layout">
                <Route path="/" component={App as any} />
            </div>
        );
    }
}