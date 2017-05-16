import React from 'react';
import {
    Card,
    Tag
} from 'antd';


const EventLike = ({ _id, source: user, type, target: answer, time }) => (
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
            >{answer.like || 0}</Tag>
        </div>
        <div className="event-content"
            style={{
                marginLeft: '50px',
                minHeight: 80
            }}
        >
        {
            `${JSON.stringify(user)} ${type} ${JSON.stringify(answer)} at ${time}`
        }
        </div>
    </Card>

);

const EventViewMap = {
    LIKE: EventLike
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
                <UserEvent key={ev._id} {...ev} />
            ))
        }
    </div>
);

export default TimeLine;