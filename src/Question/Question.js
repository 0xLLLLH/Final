import React from 'react';
import {
    Layout,
    Menu,
    Icon,
    Tabs,
    Button,
    Tag,
    Card
} from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, Redirect } from 'react-router-dom';

import NavBar from '../components/NavBar';
import AnswerList from '../components/AnswerList';
import AsyncMention from '../components/AsyncMention';

import * as QuestionActions from './QuestionActions'

const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Question extends React.Component {
    constructor(props) {
        super();
        props.onLoad({
            questionId: parseInt(props.match.params.questionId, 10)
        });
    }
    render() {
        const { account, question, questionId, onLoadMore, answerList, onSwitchSortRule, onToggleFollow, onUpvote, onDevote, onLoadComment, onHideComment } = this.props;
        return (
            <Layout className="layout">
                <Header className="header" style={{ position: 'fixed', width: '100%', zIndex: 99 }}>
                    <NavBar account={account} />
                </Header>
                <div style={{ padding: '64px 200px 0 200px', borderBottom: '1px solid #eee' }}>
                    <Layout style={{
                        background: '#fff'
                    }}>
                        <div style={{
                            padding: '16px'
                        }}>
                        {
                            question.topics.map(tp => (
                                <Tag key={tp} color="blue" style={{
                                    height: '30px',
                                    lineHeight: '30px'
                                }}>{tp}</Tag>
                            ))
                        }
                            <div style={{float: 'right'}}>
                                <div style={{
                                    display: 'inline-block',
                                    width: '100px',
                                    textAlign: 'center'
                                }}>
                                    <p>关注者</p>
                                    <p>{question.followCount}</p>
                                </div>
                                <div style={{
                                    display: 'inline-block',
                                    textAlign: 'center'
                                }}>
                                    <p>被浏览</p>
                                    <p>{question.viewCount}</p>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            padding: '16px'
                        }}>
                            <h1>{question.title}</h1>
                        </div>
                        <div className="question-actions" style={{
                            padding: '16px',
                            marginBottom: '10px'
                        }}>
                            <span style={{
                                marginRight: '10px'
                            }}><Icon type="message" /> {question.replayCount || 0} 条评论</span>
                            <span style={{
                                marginRight: '10px'
                            }}><Icon type="share-alt" /> 分享</span>
                            <span style={{
                                marginRight: '10px'
                            }}><Icon type="star" /> 邀请回答</span>
                            <span style={{
                                marginRight: '10px'
                            }}><Icon type="flag" /> 举报</span>
                            <div style={{
                                float: 'right'
                            }}>
                                <Button type={question.followed ? 'default' : 'primary'} style={{
                                    marginRight: '10px'
                                }} onClick={onToggleFollow}>
                                    {question.followed ? '取消关注' : '关注问题'}
                                </Button>
                                <Button>
                                    <a href="#write_answer">写回答</a>
                                </Button>
                            </div>
                        </div>
                    </Layout>
                </div>
                <Content style={{
                    overflow: 'initial'
                }}>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <AnswerList
                                answerList={answerList}
                                onSwitchSortRule={onSwitchSortRule.bind(this)}
                                onUpvote={onUpvote.bind(this)}
                                onDevote={onDevote.bind(this)}
                                onLoadComment={onLoadComment.bind(this)}
                                onHideComment={onHideComment.bind(this)} />
                            <Button style={{
                                width: '650px',
                                marginBottom: 10
                            }} onClick={() => { onLoadMore({ questionId }) }}>加载更多</Button>
                            <Card id="write_answer" style={{
                                width: 650
                            }}>
                                <div style={{
                                    height: 40,
                                    marginBottom: 10
                                }}>
                                    <img src={account.avatarLink} width="40" height="40" style={{
                                        float: 'left'
                                    }}/>
                                    <div style={{
                                        marginLeft: 55
                                    }}>
                                        <p><span style={{
                                            fontWeight: 'bold'
                                        }}>{account.nickName}</span> <a href="javascript:;" style={{float: 'right'}}>使用匿名回答</a></p>
                                        <p>{account.bio}</p>
                                    </div>
                                </div>
                                <AsyncMention
                                    height="100"
                                    multiLines/>
                                <div style={{
                                    height: 40,
                                    marginTop: 10
                                }}>
                                    <Button type="primary" style={{
                                        float: 'right'
                                    }}>提交回答</Button>
                                </div>
                            </Card>
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

const mapStateToProps = (state, { match }) => {
    const { account } = state;
    const {sortRule, answerList, ...rest} = state.Question;
    return {
        account,
        sortRule,
        answerList: answerList.sort((a, b) => {
            if (state.Question.sortRule === 'LIKE') {
                return b.like - a.like;
            }
            return a.time - b.time;
        }),
        ...rest,
        questionId: parseInt(match.params.questionId),
    };
};
const mapDispatchToProps = (dispatch, { match }) => {
    return {
        onLoad: ({ questionId }) => {
            dispatch(QuestionActions.loadQuestion({ questionId }));
            dispatch(QuestionActions.loadAnswers({ questionId }));
        },
        onLoadMore: ({ questionId }) => {
            dispatch(QuestionActions.loadMore({ questionId }));
        },
        onSwitchSortRule: () => {
            dispatch(QuestionActions.switchSortRule());
        },
        onToggleFollow: () => {
            dispatch(QuestionActions.toggleFollow());
        },
        onUpvote: ({ answerId }) => {
            dispatch(QuestionActions.upvote({ answerId }));
        },
        onDevote: ({ answerId }) => {
            dispatch(QuestionActions.devote({ answerId}));
        },
        onLoadComment: ({answerId}) => {
            dispatch(QuestionActions.loadComment({answerId}));
        },
        onHideComment: ({ answerId }) => {
            dispatch(QuestionActions.hideComment({ answerId }));
        }
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Question)
);
