import React from 'react';
import {
    Layout,
    Menu,
    Icon,
    Tabs,
    Button
} from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, Redirect } from 'react-router-dom';

import NavBar from '../components/NavBar';
import TimeLine from '../components/TimeLine';

import * as AppActions from '../App/AppActions';

import * as IndexActions from './IndexActions';
import './style.scss';

const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Index extends React.Component {
    componentDidMount() {
        this.props.onLoad({
            userId: this.props.account.userId
        });
    }
    render() {
        const { account, eventArray, onLoadMore } = this.props;
        return (
            <Layout className="layout">
                <Header className="header">
                    <NavBar account={account} />
                </Header>
                <Content style={{
                    overflow: 'initial'
                }}>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <TimeLine
                                eventArray={eventArray}
                            />
                            <Button style={{
                                width: '650px'
                            }} onClick={() => {onLoadMore({ userId: account.userId })}}>加载更多</Button>
                        </Content>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <div style={{ marginBottom: '10px', fontSize: '16px' }}>
                                <Link to="/" style={{ color: '#555' }}><Icon type="book" />我的收藏</Link>
                            </div>
                            <div style={{ marginBottom: '10px', fontSize: '16px' }}>
                                <Link to="/" style={{ color: '#555' }}><Icon type="select" />我关注的问题</Link>
                            </div>
                            <div className="copyright">
                                0xLLLLH<Icon type="copyright" />2017
                            </div>
                        </Sider>
                    </Layout>
                </Content>
            </Layout>
        );
    }
};

const mapStateToProps = (state, {match}) => {
    const { account } = state;
    return {
        account,
        ...state.Index,
    };
};
const mapDispatchToProps = (dispatch, {match}) => {
    return {
        onLoad: ({userId}) => {
            dispatch(IndexActions.load({userId}));
        },
        onLoadMore: ({ userId }) => {
            dispatch(IndexActions.loadMore({ userId }));
        },
        onShowComplete: ({ answerId }) => {
            dispatch(IndexActions.showComplete({ answerId }));
        },
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Index)
);
