import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import cookie from 'react-cookies';

import Header from './header';
import Login from './login';
export default class App extends Component {

    componentWillMount() {
        this.state =  { isSession: cookie.load('session') }
    }
    render() {
        if (this.state.isSession) {
            return (
                <div>
                    <BrowserRouter>
                        <div>
                            <Header/>
                            {/* <Route exact path="/" component={Dashboard}/> */}
                        </div>
                    </BrowserRouter>
                </div>
            );
        } else
            return (
                <div>
                    <Login />
                </div>
            );
    }
}