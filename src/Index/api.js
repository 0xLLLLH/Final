import v4 from 'uuid/v4'
import randomAvatar from 'random-avatar';
import randomParagraph from 'random-paragraph';

export const loadEvents = ({
    userId
}) => new Promise((resolve, reject) => {
    resolve([
        {
            _id: v4(),
            source: {
                userId: v4(),
                userName: '用户123',
                avatarLink: randomAvatar({protocol: 'https', email: 'linlihao159@gmail.com'})
            },
            type: 'LIKE',
            question: {
                id: '3F12345678',
                title: '被自己写的代码丑哭是一种什么样的体验？',
            },
            answer: {
                id: v4(),
                owner: {
                    id: v4(),
                    userName: '回答者',
                    bio: '个人描述写在这里'
                },
                like: Math.floor(Math.random() * 1000),
                content: randomParagraph({sentences: Math.floor(Math.random() * 8 + 2)}),
            },
            time: new Date()
        },
        {
            _id: v4(),
            source: {
                userId: v4(),
                userName: '用户123',
                avatarLink: randomAvatar({protocol: 'https', email: 'linlihao159@gmail.com'})
            },
            type: 'LIKE',
            question: {
                id: v4(),
                title: '被自己写的代码丑哭是一种什么样的体验？',
            },
            answer: {
                id: v4(),
                owner: {
                    id: v4(),
                    userName: '回答者',
                    bio: '个人描述写在这里'
                },
                like: Math.floor(Math.random() * 1000),
                content: randomParagraph({sentences: Math.floor(Math.random() * 8 + 2)}),
            },
            time: new Date()
        },
        {
            _id: v4(),
            source: {
                userId: v4(),
                userName: '用户123',
                avatarLink: randomAvatar({protocol: 'https', email: 'linlihao159@gmail.com'})
            },
            type: 'LIKE',
            question: {
                id: v4(),
                title: '被自己写的代码丑哭是一种什么样的体验？',
            },
            answer: {
                id: v4(),
                owner: {
                    id: v4(),
                    userName: '回答者',
                    bio: '个人描述写在这里'
                },
                like: Math.floor(Math.random() * 1000),
                content: randomParagraph({sentences: Math.floor(Math.random() * 8 + 2)}),
            },
            time: new Date()
        },
        {
            _id: v4(),
            source: {
                userId: v4(),
                userName: '用户123',
                avatarLink: randomAvatar({protocol: 'https', email: 'linlihao159@gmail.com'})
            },
            type: 'ANSWER',
            question: {
                id: v4(),
                title: '被自己写的代码丑哭是一种什么样的体验？',
            },
            answer: {
                id: v4(),
                owner: {
                    id: v4(),
                    userName: '回答者',
                    bio: '个人描述写在这里'
                },
                like: Math.floor(Math.random() * 1000),
                content: '1、摔跤吧爸爸还没看完一半，美女记者荣姑娘就已经哭成泪人。整场电影下来，她哭的花容失色，尤其是大女儿吉塔和爸爸通电话的时候，她泪如泉涌。电影散场后，我让她去采访下门口站着的两个美女，问下她们对电影的看法，这事很匹配她的本职工作。A美女说：',
            },

            time: new Date()
        }
    ]);
});