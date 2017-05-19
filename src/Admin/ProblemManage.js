import React from 'react';
import {
    Layout,
    Menu,
    Icon,
    Tabs,
    Button,
    Breadcrumb,
    Dropdown,
    Table
} from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, Redirect } from 'react-router-dom';

import * as AppActions from '../App/AppActions';

const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const columns = [{
    title: 'ProblemId',
    dataIndex: 'id',
    key: 'id',
    render: id => <Link to={`/problem/${id}`}>{id}</Link>,
}, {
    title: 'UserName',
    dataIndex: 'userName',
    key: 'userName',
}, {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <Button type="default">Edit</Button>
            <span className="ant-divider" />
            <Button type="danger">Delete</Button>
        </span>
    ),
}];

const data = [{
    id: '3F4567891',
    userName: 'User1',
    title: 'question 1'
}, {
    id: '3F4567897',
    userName: 'User1',
    title: 'question 2'
}, {
    id: '3F3456789',
    userName: 'User1',
    title: 'question 3'
},];

const ProblemManage = ({ account }) => (
    <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>ProblemManage</Breadcrumb.Item>
        </Breadcrumb>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            <Table columns={columns} dataSource={data} />
        </Content>
    </Layout>
);

const mapStateToProps = (state, { match }) => {
    const { account } = state;
    return {
        account,
        ...state.ProblemManage,
    };
};
const mapDispatchToProps = (dispatch, { match }) => {
    return {
        onLoad: ({ userId }) => {
            dispatch(ProblemManageActions.load({ userId }));
        },
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ProblemManage)
);
