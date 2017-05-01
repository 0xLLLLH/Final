import React from 'react';
import { Tabs } from 'antd';
import Particles from 'react-particles-js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import * as IndexAction from './IndexActions';

import './style.scss';
import particles from './particles.json';

const {TabPane} = Tabs;

const Index = ({tab, onLogin, onSignup, onError}) => (
    <div className="index-wrap">
        <Tabs defaultActiveKey={tab} className="login-form-wrap" >
            <TabPane tab={<Link to="/signin">登录</Link>} key="signin">
                <LoginForm onSubmit={onLogin} onError={onError} />
            </TabPane>
            <TabPane tab={<Link to="/signup">注册</Link>} key="signup">
                <SignupForm onSubmit={onSignup} onError={onError} />
            </TabPane>
        </Tabs>
        <Particles
            className="particles-js-canvas"
            width="1920px"
            params={particles}
        />
    </div>
);

const mapStateToProps = (state, {match}) => {
    return {
        isLogedIn: false,
        tab: match.params.tab || 'signin'
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (userName, password) => {
            dispatch(IndexAction.login(userName, password));
        },
        onSignup: (userName, password) => {
            dispatch(IndexAction.register(userName, password));
        },
        onError: (error) => {
            dispatch(IndexAction.showError(error));
        }
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Index)
);
