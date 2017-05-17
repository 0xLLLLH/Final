import v4 from 'uuid/v4'
import randomAvatar from 'random-avatar';
import randomParagraph from 'random-paragraph';

export const loadQuestion = ({
    questionId
}) => new Promise((resolve, reject) => {
    resolve({
        id: questionId,
        title: '碎片化阅读的危害是什么？',
        replayCount: Math.floor(Math.random() * 100),
        topics: ['阅读', '碎片时间', '知识管理'],
        followCount: Math.floor(Math.random() * 100),
        viewCount: Math.floor(Math.random() * 100),
        followed: false
    });
}) ;

export const loadAnswers = ({
    questionId
}) => new Promise((resolve, reject) => {
        resolve([
            {
                id: v4(),
                owner: {
                    userId: 123123123,
                    userName: 'answerer',
                    bio: 'write your bio here',
                    avatarLink: 'https://www.gravatar.com/avatar/64e457554ff6cfef314e729f4f61ab2d'
                },
                upvote: Math.floor(Math.random() * 100),
                time: Date.UTC(2017,5,10),
                liked: false,
                disliked: false,
                replayCount: Math.floor(Math.random() * 100),
                comments: null,
                content: '<span class="RichText CopyrightRichText-richText"><p>坐标伦敦。就在昨天，学校图书馆。<br>自习室是那种大的长桌子，对面坐着个英国女生，桌上放着一盒小熊饼。她时不时地拿一块塞进嘴里。<br>不一会来了个男生，是个中国人，坐在了她旁边开始学习。<br>过了一会，他也注意到了旁边的小熊饼。那个妹子吃起来嘎吱嘎吱地响，一边埋头做着题。大概是听馋了，这个男生突然手一伸也拿了一块塞进自己嘴里。妹子一愣，把小熊饼推了推，继续做题。</p><p>我也有点馋了，正好也有点饿，于是手一伸也拿了一块。女生也没看我，只是轻轻点了点头。八成是想图书馆吃货还不少大家期末共患难就理解一下吧。<br>然后我和那个男生又拿了几块。</p><p>腐国人民还挺客气的。</p><br><p>饭点到了。<br>对面这一男一女突然站起来，背好书包相互亲了亲，手拉手走了。</p>我拿着半块小熊饼久久不能释怀。</span>'
            },
            {
                id: v4(),
                owner: {
                    userId: 123123123,
                    userName: 'answerer',
                    bio: 'write your bio here',
                    avatarLink: 'https://www.gravatar.com/avatar/64e457554ff6cfef314e729f4f61ab2d'
                },
                upvote: Math.floor(Math.random() * 100),
                time: Date.UTC(2017, 5, 15),
                liked: false,
                disliked: false,
                replayCount: Math.floor(Math.random() * 100),
                comments: null,
                content: '<span class="RichText CopyrightRichText-richText"><p>坐标伦敦。就在昨天，学校图书馆。<br>自习室是那种大的长桌子，对面坐着个英国女生，桌上放着一盒小熊饼。她时不时地拿一块塞进嘴里。<br>不一会来了个男生，是个中国人，坐在了她旁边开始学习。<br>过了一会，他也注意到了旁边的小熊饼。那个妹子吃起来嘎吱嘎吱地响，一边埋头做着题。大概是听馋了，这个男生突然手一伸也拿了一块塞进自己嘴里。妹子一愣，把小熊饼推了推，继续做题。</p><p>我也有点馋了，正好也有点饿，于是手一伸也拿了一块。女生也没看我，只是轻轻点了点头。八成是想图书馆吃货还不少大家期末共患难就理解一下吧。<br>然后我和那个男生又拿了几块。</p><p>腐国人民还挺客气的。</p><br><p>饭点到了。<br>对面这一男一女突然站起来，背好书包相互亲了亲，手拉手走了。</p>我拿着半块小熊饼久久不能释怀。</span>'
            },
            {
                id: v4(),
                owner: {
                    userId: 123123123,
                    userName: 'answerer',
                    bio: 'write your bio here',
                    avatarLink: 'https://www.gravatar.com/avatar/64e457554ff6cfef314e729f4f61ab2d'
                },
                upvote: Math.floor(Math.random() * 100),
                time: Date.UTC(2017, 5, 16),
                liked: false,
                disliked: false,
                replayCount: Math.floor(Math.random() * 100),
                comments: null,
                content: '<span class="RichText CopyrightRichText-richText"><p>坐标伦敦。就在昨天，学校图书馆。<br>自习室是那种大的长桌子，对面坐着个英国女生，桌上放着一盒小熊饼。她时不时地拿一块塞进嘴里。<br>不一会来了个男生，是个中国人，坐在了她旁边开始学习。<br>过了一会，他也注意到了旁边的小熊饼。那个妹子吃起来嘎吱嘎吱地响，一边埋头做着题。大概是听馋了，这个男生突然手一伸也拿了一块塞进自己嘴里。妹子一愣，把小熊饼推了推，继续做题。</p><p>我也有点馋了，正好也有点饿，于是手一伸也拿了一块。女生也没看我，只是轻轻点了点头。八成是想图书馆吃货还不少大家期末共患难就理解一下吧。<br>然后我和那个男生又拿了几块。</p><p>腐国人民还挺客气的。</p><br><p>饭点到了。<br>对面这一男一女突然站起来，背好书包相互亲了亲，手拉手走了。</p>我拿着半块小熊饼久久不能释怀。</span>'
            },
        ]);
});

export const loadComments = ({
    answerId
}) => new Promise((resolve, reject) => {
    resolve([
        {
            id: v4(),
            content: '评论内容'
        },
        {
            id: v4(),
            content: '评论内容'
        },
        {
            id: v4(),
            content: '评论内容'
        }
    ])
});
