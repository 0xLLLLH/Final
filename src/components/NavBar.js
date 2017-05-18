import React from 'react';
import {
    Menu,
    Input,
    Button,
    Modal,
    Dropdown,
    Icon,
    Form
} from 'antd';
import { Link } from 'react-router-dom';

import SearchInput from './SearchInput';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import './NavBar.scss';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
    (props) => {
        const { form, hideModal } = props;
        const { getFieldDecorator } = form;
        return (
            <Form layout="vertical">
                <FormItem label="Title">
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please input the title of collection!' }],
                    })(
                        <Input />
                        )}
                </FormItem>
                <FormItem label="Description">
                    {getFieldDecorator('description')(<Input type="textarea" />)}
                </FormItem>
                <div style={{
                    height: 40
                }}>
                    <Button type="primary" style={{
                        float: 'right'
                    }} onClick={() => {
                        hideModal();
                    }}>创建问题</Button>
                </div>
            </Form>
        );
    }
);

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

const CreateQuestion = ({saveFormRef, hideModal}) => (
    <div style={{textAlign: 'center'}}>
        <h3 style={{fontSize: 24}}>写下你的问题</h3>
        <p style={{ fontSize: 18, color: '#888' }}>描述精确的问题更易得到解答</p>
        <CollectionCreateForm
            ref={saveFormRef} hideModal={hideModal} />
    </div>
);

const modalTitleMap = {
    signin: '登陆',
    signup: '注册',
    create: '新建提问',
}

const modalContentMap = {
    signin: LoginForm,
    signup: SignupForm,
    create: CreateQuestion,
}

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
    hideModal() {
        this.setState({
            visible: false,
        });
    }
    handleCancel() {
        this.setState({
            visible: false
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render() {
        const account = this.props.account;
        const ModalContent = modalContentMap[this.state.modalTab];
        const showModalBinded = this.showModal.bind(this);
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
                    {
                        account.isLogedIn ? (
                            <Button
                                type="primary"
                                size="large"
                                style={{
                                    marginLeft: 15,
                                    height: 32,
                                }}>
                                <a href="javascript:;"
                                    onClick={e => { showModalBinded('create') }}>提问</a>
                                </Button>
                        ): undefined
                    }
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
                                </span>
                            )
                    }
                    <Modal title={modalTitleMap[this.state.modalTab] || '登陆'}
                        visible={this.state.visible}
                        footer={null}
                        onCancel={this.handleCancel.bind(this)}
                    >
                        <ModalContent saveFormRef={this.saveFormRef} hideModal={this.hideModal.bind(this)}/>
                    </Modal>
                </Menu>
            </div>
        );
    }
};

export default NavBar;