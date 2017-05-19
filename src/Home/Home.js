import React from 'react';
import {
    Layout,
    Menu,
    Icon,
    Tabs,
    Button,
    Card
} from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, Redirect } from 'react-router-dom';

import NavBar from '../components/NavBar';

import * as AppActions from '../App/AppActions';

const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component {
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
                            <Card style={{
                                position: 'relative',
                                height: 380,
                                marginBottom: 10,
                                background: `url(${account.homeImg}) no-repeat center`
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    height: 140,
                                    background: '#fff',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                }}>
                                    <div style={{
                                        float: 'left',
                                        width: 168,
                                        height: 168,
                                        position: 'relative',
                                        top: -50,
                                        left: 30,
                                        border: '2px solid #fff'
                                    }}>
                                        <img width="164" height="164" src={account.avatarLink} />
                                    </div>
                                    <div style={{
                                        marginLeft: '200px',
                                        height: 140,
                                        paddingLeft: 30,
                                        paddingTop: 10
                                    }}>
                                        <p><span style={{
                                            fontSize: 30,
                                            fontWeight: 'bold'
                                        }}>{account.userName}</span><span style={{
                                            marginLeft: 24,
                                            fontSize: 16
                                        }}>{account.bio}</span></p>
                                        <p style={{
                                            fontSize: 16
                                        }}><Icon type="global" /> {account.location || '未知'}</p>
                                        <p>查看详细资料<Icon type="down" /></p>
                                        <Button style={{
                                            float: 'right',
                                            marginRight: 20,
                                        }}>编辑资料</Button>
                                    </div>
                                </div>
                            </Card>
                            <div style={{
                                float: 'left',
                                width: 1000
                            }}>
                                <Card title={(
                                    <Tabs defaultActiveKey="1" style={{
                                        marginTop: 12
                                    }}>
                                        <TabPane tab="动态" key="1">动态</TabPane>
                                        <TabPane tab="回答" key="2">回答</TabPane>
                                        <TabPane tab="提问" key="3">提问</TabPane>
                                    </Tabs>
                                )} style={{
                                    minHeight: 120
                                }}>
                                </Card>
                            </div>
                            <div style={{
                                marginLeft: 1005
                            }}>
                                <Card title="个人成就">
                                    <Icon type="edit" style={{marginRight: 10}} />参与{account.publicEditCount || 0}次公众编辑
                                </Card>
                            </div>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        );
    }
};

const mapStateToProps = (state, { match }) => {
    const { account } = state;
    return {
        account
    };
};
export default withRouter(
    connect(mapStateToProps)(Home)
);
