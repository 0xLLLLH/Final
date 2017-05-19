import React from 'react';
import {
    Layout,
    Menu,
    Icon,
    Tabs,
    Button,
    Breadcrumb,
    Dropdown
} from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, Redirect, Switch, Route, Router } from 'react-router-dom';

import * as AppActions from '../App/AppActions';

import * as AdminActions from './AdminActions';
import ProblemManage from './ProblemManage';
import UserManage from './UserManage';
import AdminIndex from './AdminIndex';

const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const menu = () => (
    <Menu>
        <Menu.Item key="0">
            <Link to="/setting">账号设置</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to="/">回到社区</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to="/exit">退出登陆</Link>
        </Menu.Item>
    </Menu>
);

const UserField = ({
    account
}) => (
        <span>
            <Dropdown overlay={menu()} trigger={['click']}>
                <a className="ant-dropdown-link" href="#">
                    {account.userName} <Icon type="down" />
                </a>
            </Dropdown>
        </span>
    );

class Admin extends React.Component {
    componentDidMount() {
        this.props.onLoad({
            userId: this.props.account.userId
        });
    }
    render() {
        const { account, eventArray, onLoadMore } = this.props;
        return (
            <Layout>
                <Header className="header" style={{
                    padding: '0 50px'
                }}>
                    <div style={{
                        float: 'right'
                    }}>
                        <UserField account={account} />
                    </div>
                    <div className="logo" />
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[]}
                            defaultOpenKeys={['sub0']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="sub0" title={<span><Icon type="home" />首页</span>}>
                            </SubMenu>
                            <SubMenu key="sub1" title={<span><Icon type="user" />用户体系管理</span>}>
                                <Menu.Item key="1"><Link to="/admin/userManage">用户管理</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />网站内容管理</span>}>
                                <Menu.Item key="2"><Link to="/admin/problemManage">问题管理</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/admin/answerManage">回答管理</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/admin/topicManage">话题管理</Link></Menu.Item>
                                <Menu.Item key="5"><Link to="/admin/tagManage">标签管理</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />通知管理</span>}>
                                <Menu.Item key="6">全站通知</Menu.Item>
                                <Menu.Item key="7">全站私信</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Switch>
                        <Route path="/admin/userManage" component={UserManage} />
                        <Route path="/admin/problemManage" component={ProblemManage} />
                        <Route path="/admin" component={AdminIndex} />
                    </Switch>
                </Layout>
            </Layout>
        );
    }
};

const mapStateToProps = (state, { match }) => {
    const { account } = state;
    return {
        account,
        ...state.Admin,
    };
};
const mapDispatchToProps = (dispatch, { match }) => {
    return {
        onLoad: ({ userId }) => {
            dispatch(AdminActions.load({ userId }));
        },
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Admin)
);
