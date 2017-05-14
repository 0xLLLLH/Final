import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
    message as antdMessage,
    Layout,
    Menu,
    Icon
} from 'antd';

import routes from './routes';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const showMessage = ({type, msg}) => {
    if (type !== null && typeof antdMessage[type] === 'function') {
        antdMessage[type](msg);
    }
    return '';
};

const App = () => (
    <Layout>
        <Header className="header">
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
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
                </Content>
            </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
        </Footer>
    </Layout>
);

class AppWrapper extends Component {
    render() {
        return (
            <Router>
                <Route
                    path="/"
                    render={() => (
                        (
                            this.props.account.isLogedIn === false
                            && window.location.pathname !== '/signin'
                            && window.location.pathname !== '/signup'
                        ) ? (
                            <Redirect
                                to={{
                                    pathname: '/signin'
                                }}
                            />
                        ) : (
                            App()
                        )
                    )}
                />
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
