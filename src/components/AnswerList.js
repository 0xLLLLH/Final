import React from 'react';
import {
    Card,
    Tag,
    Button,
    Icon
} from 'antd';
import {
    Link
} from 'react-router-dom';

import AsyncMention from './AsyncMention';

const Comment = ({comment}) => (
    <div style={{
        padding: '10px 0',
        borderBottom: '1px solid #eee'
    }}>
        <div style={{
            marginBottom: '5px'
        }}>
            <img
                src={comment.owner.avatarLink}
                width="24px"
                height="24px"
                style={{
                    float: 'left'
                }}
            />
            <p style={{
                marginLeft: '30px',
                fontSize: '16px',
                lineHeight: '24px',
                color: '#333'
            }}>{comment.owner.userName}</p>
        </div>
        <div style={{
            fontSize: '16px',
        }} dangerouslySetInnerHTML={{
            __html: comment.content
        }} />
        <div className="comment-actions">
            <Icon type="like-o" /> {comment.like || ''}
        </div>
    </div>
);

const CommentList = ({comments}) => (
    <Card title={`${(comments && comments.length) || 0} 条评论`} style={{
        display: comments ? 'block' : 'none'
    }}>
        {
            comments && comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))
        }
        <div style={{
            marginBottom: 20
        }}>
            <div style={{width: 480, float: 'left' }}><AsyncMention /></div> <Button type="primary" style={{ marginLeft: 10, float: 'left'}}>评论</Button>
        </div>
    </Card>
);

const Answer = ({ answer, onUpvote, onDevote, onLoadComment, onHideComment }) => (
    <div style={{
        paddingTop: '10px',
        paddingBottom: '10px',
        borderBottom: '1px solid #eee'
    }}>
        <div style={{
            marginBottom: '10px'
        }}>
            <img src={answer.owner.avatarLink} width="40" height="40" style={{ float: 'left' }}/>
            <div style={{
                marginLeft: '55px'
            }}>
                <p style={{
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}>{answer.owner.userName}</p>
                <p style={{
                    color: '#999'
                }}>{answer.owner.bio}</p>
            </div>
        </div>
        <div style={{
            fontSize: '16px'
        }}>
            <p style={{
                color: '#888'
            }}>{answer.upvote || 0}人赞同了该回答</p>
            <div style={{
                color: '#333'
            }} dangerouslySetInnerHTML={{
                __html: answer.content
            }}></div>
            <p style={{
                color: '#888'
            }}>编辑于{`${new Date(answer.time)}`}</p>
        </div>
        <div>
            <div className="answer-actions" style={{
                marginBottom: '10px'
            }}>
                <Button type={answer.liked ? 'primary' : 'default'} style={{
                    marginRight: '10px'
                }} onClick={() => {onUpvote({ answerId: answer.id})}}><Icon type="caret-up" style={{
                    marginRight: '10px'
                    }} />{answer.upvote || 0}</Button>
                <Button type={answer.disliked ? 'primary' : 'default'} style={{
                    marginRight: '10px'
                }} onClick={() => { onDevote({ answerId: answer.id }) }}><Icon type="caret-down" /></Button>
                <span style={{
                    marginRight: '10px'
                }} onClick={
                    () => {
                        if (answer.comments === null) {
                            onLoadComment({ answerId: answer.id });
                        } else {
                            onHideComment({ answerId: answer.id });
                        }
                    }
                }><Icon type="message" /> {answer.replayCount || 0} 条评论</span>
                <span style={{
                    marginRight: '10px'
                }}><Icon type="star-o" /> 收藏</span>
                <span style={{
                    marginRight: '10px'
                }}><Icon type="heart-o" /> 感谢</span>
            </div>
        </div>
        <CommentList comments={answer.comments} />
    </div>
);

const AnswerList = ({ answerList, onSwitchSortRule, onUpvote, onDevote, onLoadComment, onHideComment }) => (
    <Card className="answer-wrap" title={`${answerList.length || 0} 个回答`} extra={<a href="javascript:;" onClick={onSwitchSortRule}>修改排序</a>} style={{ width: 650 }}>
        {
            answerList.map(answer => (
                <Answer key={answer.id} answer={answer} onUpvote={onUpvote} onDevote={onDevote} onLoadComment={onLoadComment} onHideComment={onHideComment} />
            ))
        }
    </Card>
);

export default AnswerList;