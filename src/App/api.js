export const register = ({
    userName = '',
    password = ''
}) => new Promise((resolve, reject) => {
    if (userName !== 'fake_user') {
        resolve({
            userId: '3F00000001',
            userName
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
            userName: 'fake_user'
        });
    }
    reject({
        msg: '账号或密码错误'
    });
});
