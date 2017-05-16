import React from 'react';
import {
    Menu,
    Input,
    Button,
    Modal,
    Dropdown,
    Icon
} from 'antd';
import { Link } from 'react-router-dom';

import SearchInput from './SearchInput';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import './NavBar.scss';

const menu = () => (
    <Menu>
        <Menu.Item key="0">
            <Link to="/home">我的主页</Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to="/inbox">私信</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to="/setting">设置</Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to="/logout">退出</Link>
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

class NavBar extends React.Component{
    state = {
        visible: false,
        modalTab: 'signup'
    }
    showModal(modalTab) {
        this.setState({
            visible: true,
            modalTab
        });
    }
    handleCancel() {
        this.setState({
            visible: false,
            modalTab: 'signup'
        });
    }
    render() {
        const account = this.props.account;

        return (
            <div>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '63px' }}
                >
                    <Menu.Item key="index">
                        <Link to="/">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="explore">
                        <Link to="/explore">发现</Link>
                    </Menu.Item>
                    <Menu.Item key="Todo">
                        <Link to="/todos">Todos</Link>
                    </Menu.Item>
                    <SearchInput width="300px" />
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            marginLeft: 15,
                            height: 32,
                            display: account.isLogedIn ? 'inline-block' : 'none'
                        }}>提问</Button>
                    {
                        account.isLogedIn ? (
                            <span className="account-wrap">
                                <UserField account={account} />
                            </span>
                        ) : (
                                <span className="auth-buttons-wrap">
                                    <Button
                                        size="large"
                                        onClick={e => this.showModal('signin')}
                                    >登陆</Button>
                                    <Button
                                        type="primary"
                                        size="large"
                                        style={{
                                            marginLeft: 15
                                        }}
                                        onClick={e =>this.showModal('signup')}
                                    >注册</Button>
                                    <Modal title={this.state.modalTab === 'signup' ? '注册' : '登陆'}
                                        visible={this.state.visible}
                                        footer={null}
                                        onCancel={this.handleCancel.bind(this)}
                                    >
                                        {
                                            this.state.modalTab === 'signup' ? (
                                                <SignupForm />
                                            ) : (
                                                <LoginForm />
                                            )
                                        }
                                    </Modal>
                                </span>
                            )
                    }
                </Menu>
            </div>
        );
    }
};

export default NavBar;