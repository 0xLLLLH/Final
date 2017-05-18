import v4 from 'uuid/v4'
import randomAvatar from 'random-avatar';
import randomParagraph from 'random-paragraph';

const getInt = (max) => Math.floor(Math.random() * max)

export const loadQuestion = ({
    questionId
}) => new Promise((resolve, reject) => {
    resolve({
        id: questionId,
        title: '碎片化阅读的危害是什么？',
        replayCount: getInt(100),
        topics: ['阅读', '碎片时间', '知识管理'],
        followCount: getInt(100),
        viewCount: getInt(100),
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
                upvote: getInt(100),
                time: Date.UTC(2017,5,10),
                liked: false,
                disliked: false,
                replayCount: getInt(100),
                comments: null,
                content: '<span class="RichText CopyrightRichText-richText"><p>那些不同的声音，像不同方向的风，只是将你变成一株摇摆不定的草。</p><p>它们会一会儿让你向左，一会儿让你向右。一会儿让你向前，一会儿让你向后。你感觉自己一直在走，其实你在原地。并没有进步。</p><p>你会觉得他们这样说好有道理，那样说也好有道理。其实那些你觉得好有道理的道理，并没有真正引领你，它们只是在迎合你。迎合你内心原有的价值、期待，你仍是你，你并没有变好。</p><p>一个从不曾阅读过经典的人，上网阅读是一件很危险的事。因为你们会很容易相信某些似是非常的道理，很容被说服、煽动、改变。</p><p>只要作者有强大的说服力，每一个公众号都可以是一门邪教。</p><p>例如，篇篇文章众口一辞地教大家：好看女孩自带烧钱属性，男人不爱便宜的女人，你要做自己的奢侈品……几千年的文学史、从国内到国外，都没有推祟过这么拜金的价值观。然而在微信时代，应运而生，为了某种利益不停地推出来给大家洗脑，让很多傻瓜信以为真。（PS：我公众号前天转了类似广告文，不是我写的，不要怪我，我希望粉丝看了这么久的文章，有自己的辩识力。）</p><p>她们在骗你。你以为你拥有好的东西你就会很好？如果你没有真正努力去提升自己头脑，用任何东西也不会成就更好的你。你只是在成就所有把东西卖给你的人，让他们成为更有钱的他们。</p><p>碎片阅读带来的思想上的影响很可能是不正确的，经不起推敲的。</p><p>如果你要改变自己，不要寄希望于碎片阅读，它更多的是帮助你消磨时间，或许带给你一些趣闻，增加你的话题量和词汇量。</p><p>真正能指引你人生的，必须是深度阅读那些经得起时间考验的经典。希望 有一天，你在茫茫书海里找到与你灵魂碰撞的那本书。</p><p>它会让你寂静下来，让你知道你是什么人，你真正需要什么，什么是对什么是错。</p></span>'
            },
            {
                id: v4(),
                owner: {
                    userId: 123123123,
                    userName: 'answerer',
                    bio: 'write your bio here',
                    avatarLink: 'https://www.gravatar.com/avatar/64e457554ff6cfef314e729f4f61ab2d'
                },
                upvote: getInt(100),
                time: Date.UTC(2017, 5, 15),
                liked: false,
                disliked: false,
                replayCount: getInt(100),
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
                upvote: getInt(100),
                time: Date.UTC(2017, 5, 16),
                liked: false,
                disliked: false,
                replayCount: getInt(100),
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
            owner: {
                userId: v4(),
                userName: '用户名',
                avatarLink: 'https://www.gravatar.com/avatar/64e457554ff6cfef314e729f4f61ab2d'
            },
            content: '评论内容1',
            like: getInt(20)
        },
        {
            id: v4(),
            owner: {
                userId: v4(),
                userName: '用户名',
                avatarLink: 'https://www.gravatar.com/avatar/64e457554ff6cfef314e729f4f61ab2d'
            },
            content: '评论内容2',
            like: getInt(20)
        },
        {
            id: v4(),
            owner: {
                userId: v4(),
                userName: '用户名',
                avatarLink: 'https://www.gravatar.com/avatar/64e457554ff6cfef314e729f4f61ab2d'
            },
            content: '评论内容3',
            like: getInt(20)
        }
    ])
});
