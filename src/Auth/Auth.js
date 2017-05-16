import React from 'react';
import {
    Tabs
} from 'antd';
import Particles from 'react-particles-js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, Redirect } from 'react-router-dom';

import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import * as AppActions from '../App/AppActions';

import * as AuthActions from './AuthActions';
import './style.scss';
import particles from './particles.json';

const { TabPane } = Tabs;

const Auth = ({ account, tab, onLogin, onSignup, onTabChange }) => (
    account.isLogedIn ? (
        <Redirect to="/"/>
    ) : (
            <div className="auth-wrap">
                <Particles
                    className="particles-js-canvas"
                    width="1920px"
                    params={particles}
                />
                <Tabs
                    defaultActiveKey={tab}
                    className="login-form-wrap"
                    onChange={onTabChange}
                >
                    <TabPane tab={<Link to="/signin">登录</Link>} key="signin">
                        <LoginForm onSubmit={onLogin} />
                    </TabPane>
                    <TabPane tab={<Link to="/signup">注册</Link>} key="signup">
                        <SignupForm onSubmit={onSignup} />
                    </TabPane>
                </Tabs>
            </div>
        )
);

const mapStateToProps = (state, { match }) => {
    const { account } = state;
    return {
        account,
        ...state.Auth,
        tab: match.params.tab || 'signin'
    };
};
const mapDispatchToProps = (dispatch, { match }) => {
    return {
        onLogin: (userName, password) => {
            dispatch(AppActions.login({
                userName,
                password
            }));
        },
        onSignup: (userName, password) => {
            dispatch(AppActions.register({
                userName,
                password
            }
            ));
        },
        onTabChange: (tab) => {
            dispatch(AuthActions.switchTab({ tab }));
        }
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Auth)
);
