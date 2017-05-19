import md5 from 'md5';

import apiClient from '../apiClient';

export const login = ({
    userName = '',
    password = ''
}) =>
apiClient.get('account', userName, md5(password))
.then(
        (response) => {
            if (response.length) {
                return response[0];
            }
            throw {
                msg: '账号或密码错误'
            };
        },
        () => {
            throw {
                msg: '服务器错误'
            };
        }
);

export const register = ({
    userName = '',
    password = ''
}) =>
apiClient.get('account', userName)
.then((response) => {
    if (response.length) {
        throw {
            msg: '用户名已被占用'
        };
    }
}).then(
    () => apiClient.put('account', {userName, password: md5(password)})
    .then(
        () => login({ userName, password }).then((response) => {
            console.log(response);
            return response
        }),
        () => {
            throw {
                msg: '服务器错误'
            }
        }
    ),
    (msg) => {
        throw msg;
    }
);
