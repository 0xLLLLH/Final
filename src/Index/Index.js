import React from 'react';
import {
    Layout,
    Menu,
    Icon,
    Tabs
} from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, Redirect } from 'react-router-dom';

import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import TimeLine from '../components/TimeLine';

import * as AppActions from '../App/AppActions';

import * as IndexActions from './IndexActions';
import './style.scss';

const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Index = ({account, tab, onLogin, onSignup, onTabChange}) => (
    <Layout className="layout">
        <Header className="header">
            <NavBar account={account} />
        </Header>
        <Content>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <TimeLine
                        eventArray={[
                            {
                                _id: 123,
                                source: {
                                    userId: '3F12345678',
                                    avatarLink: 'https://lh3.googleusercontent.com/-Cwz4QV1MyWI/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhpU-e0ZsxYhmbY24sfx5e0xa7cMtw/s96-c-mo/photo.jpg'
                                },
                                type: 'LIKE',
                                target: {
                                    questionId: '3F12345678',
                                    title: '被自己写的代码丑哭是一种什么样的体验？',
                                },
                                time: new Date()
                            },
                            {
                                _id: 124,
                                source: {
                                    userId: '3F12345678'
                                },
                                type: 'LIKE',
                                target: {
                                    questionId: '3F12345678'
                                },
                                time: new Date()
                            }
                        ]}
                    />
                </Content>
                <Sider width={200} style={{ background: '#fff' }}>
                    Siderbar
                </Sider>
            </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
            0xLLLLH ©2016
        </Footer>
    </Layout>
);

const mapStateToProps = (state, {match}) => {
    const { account } = state;
    return {
        account,
        ...state.Index,
    };
};
const mapDispatchToProps = (dispatch, {match}) => {
    return {
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Index)
);
