import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
    message as antdMessage,
    Layout,
    Menu,
    Icon
} from 'antd';

import routes from './routes';

import './style.scss';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const showMessage = ({type, msg}) => {
    if (type !== null && typeof antdMessage[type] === 'function') {
        antdMessage[type](msg);
    }
    return '';
};

class AppWrapper extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {
                        !this.props.account.isLogedIn ? routes.filter(route =>  route.auth === true)
                            .map((route, index) => (
                                <Redirect push key={index} from={route.path} to="/signin" />
                            )) : null
                    }
                    {
                        routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))
                    }
                </Switch>
            </Router>
        );
    }
    componentDidUpdate() {
        showMessage(this.props.message);
    }
}

const mapStateToProps = ({account, message}) => ({
    message,
    account
});

export default connect(mapStateToProps)(AppWrapper);
