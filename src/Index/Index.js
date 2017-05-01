import React from 'react';
import {Tabs} from 'antd';
import Particles from 'react-particles-js';
import {connect} from 'react-redux';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import * as IndexAction from './IndexActions';

import './style.scss';
import particles from './particles.json';

const {TabPane} = Tabs;

const Index = ({onLogin, onSignup, onError}) => (
    <div className="index-wrap">
        <Tabs defaultActiveKey="signin" className="login-form-wrap" >
            <TabPane tab="登录" key="signin">
                <LoginForm onSubmit={onLogin} onError={onError} />
            </TabPane>
            <TabPane tab="注册" key="signup">
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

const mapStateToProps = (state) => {
    return {
        isLogedIn: false
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (userName, password) => {
            dispatch(IndexAction.loginAccount(userName, password));
        },
        onSignup: (userName, password) => {
            dispatch(IndexAction.registerAccount(userName, password));
        },
        onError: (error) => {
            dispatch(IndexAction.showError(error));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
