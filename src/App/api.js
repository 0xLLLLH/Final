export const register = ({
    userName = '',
    password = ''
}) => new Promise((resolve, reject) => {
    if (userName !== 'fake_user') {
        resolve({
            userId: '3F00000001',
            userName,
            bio: 'write your bio here',
            avatarLink: 'https://www.gravatar.com/avatar/64e457554ff6cfef314e729f4f61ab2d',
            homeImg: 'https://lh3.googleusercontent.com/c5dqxl-2uHZ82ah9p7yxrVF1ZssrJNSV_15Nu0TUZwzCWqmtoLxCUJgEzLGtxsrJ6-v6R6rKU_-FYm881TTiMCJ_=s1600'
        });
    }
    reject({
        msg: '用户名已被占用'
    });
});

export const login = ({
    userName = '',
    password = ''
}) => new Promise((resolve, reject) => {
    if (userName === 'fake_user' && password === '123') {
        resolve({
            userId: '3F00000000',
            userName: 'fake_user',
            bio: 'write your bio here',
            avatarLink: 'https://www.gravatar.com/avatar/64e457554ff6cfef314e729f4f61ab2d',
            homeImg: 'https://lh3.googleusercontent.com/c5dqxl-2uHZ82ah9p7yxrVF1ZssrJNSV_15Nu0TUZwzCWqmtoLxCUJgEzLGtxsrJ6-v6R6rKU_-FYm881TTiMCJ_=s1600'
        });
    }
    reject({
        msg: '账号或密码错误'
    });
});
