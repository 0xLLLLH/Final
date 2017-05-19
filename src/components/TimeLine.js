import React from 'react';
import {
    Card,
    Tag,
    Icon
} from 'antd';
import {
    Link
} from 'react-router-dom';

const EventLike = ({ id, source: user, type, answer, question, time }) => (
    <Card style={{
        width: '650px',
        marginBottom: '5px'
    }}>
        <div className="avatar-wrap"
            style={{
                float: 'left',
                width: '40px',
                textAlign: 'center'
            }}>
            <img src={user.avatarLink}
                width="40"
                height="40"
            />
            <Tag
                color="#108ee9"
                style={{
                    marginRight: 0
                }}
            >{answer.upvote || 0}</Tag>
        </div>
        <div className="event-main"
            style={{
                marginLeft: '50px',
                minHeight: 80
            }}
        >
            <div className="event-source">
                {user.nickName} 赞同了回答 • {`${time}`}
            </div>
            <div className="event-content">
                <p style={{ fontSize: '16px' }}><Link to={`/question/${question.id}`}>{question.title}</Link></p>
                <p><span style={{ fontWeight: 'bold' }}>{answer.owner.userName}</span> <span style={{ color: '#999' }}>{answer.owner.bio}</span></p>
                <p style={{ color: '#333', fontSize: '14px' }}>{answer.content.slice(0, 200)}<Icon type="ellipsis" /><Tag color="blue" style={{ float: 'right' }}>显示全部</Tag></p>
            </div>
            <div className="event-action">
                <a style={{ color: '#999', marginRight: '10px' }}><Icon type="plus" />关注问题</a>
                <a style={{ color: '#999', marginRight: '10px' }}><Icon type="message" />{answer.replyCount || 0}条评论</a>
                <a style={{ color: '#999', marginRight: '10px' }}><Icon type="heart-o" />感谢</a>
                <a style={{ color: '#999', marginRight: '10px' }}><Icon type="share-alt" />分享</a>
                <a style={{ color: '#999', marginRight: '10px' }}><Icon type="book" />收藏</a>
                <a style={{ color: '#999', marginRight: '10px' }}> • 没有帮助</a>
                <a style={{ color: '#999', marginRight: '10px' }}> • 举报</a>
            </div>
        </div>
    </Card>

);

const EventAnswer = ({ id, source: user, type, answer, question, time }) => (
    <Card style={{
        width: 650
    }}>
        <div className="avatar-wrap"
            style={{
                float: 'left',
                width: '40px',
                textAlign: 'center'
            }}>
            <img src={user.avatarLink}
                width="40"
                height="40"
            />
            <Tag
                color="#108ee9"
                style={{
                    marginRight: 0
                }}
            >{answer.upvote || 0}</Tag>
        </div>
        <div className="event-main"
            style={{
                marginLeft: '50px',
                minHeight: 80
            }}
        >
            <div className="event-source">
                {user.nickName} 回答了问题 • {`${time}`}
            </div>
            <div className="event-content">
                <p style={{ fontSize: '16px' }}><Link to={`/question/${question.id}`}>{question.title}</Link></p>
                <p><span style={{ fontWeight: 'bold' }}>{answer.owner.userName}</span> {answer.owner.bio}</p>
                <p>{answer.content.slice(0, 200)}<Icon type="ellipsis" /><Tag color="blue" style={{ float: 'right' }}>显示全部</Tag></p>
            </div>
            <div className="event-action">
                <a style={{ color: '#999', marginRight: '10px' }}><Icon type="plus" />关注问题</a>
                <a style={{ color: '#999', marginRight: '10px' }}><Icon type="message" />{answer.replyCount || 0}条评论</a>
                <a style={{ color: '#999', marginRight: '10px' }}><Icon type="heart-o" />感谢</a>
                <a style={{ color: '#999', marginRight: '10px' }}><Icon type="share-alt" />分享</a>
                <a style={{ color: '#999', marginRight: '10px' }}><Icon type="book" />收藏</a>
                <a style={{ color: '#999', marginRight: '10px' }}> • 没有帮助</a>
                <a style={{ color: '#999', marginRight: '10px' }}> • 举报</a>
            </div>
        </div>
    </Card>

);

const EventViewMap = {
    LIKE: EventLike,
    ANSWER: EventAnswer
};

const UserEvent = (props) => (
    <div>
        {EventViewMap[props.type] && EventViewMap[props.type](props)}
    </div>
)

const TimeLine = ({eventArray}) => (
    <div className="time-line-wrap">
        {
            eventArray.map((ev) => (
                <UserEvent key={ev.id} {...ev} />
            ))
        }
    </div>
);

export default TimeLine;