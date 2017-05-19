import v4 from 'uuid/v4';

import db from './db.json';

const STORAGE_KEY = 'db';

const loadDB = () => {
    try {
        const serializedState = localStorage.getItem(STORAGE_KEY);
        if (serializedState === null) {
            return db;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.error('localStorage disabled.');    // eslint-disable-line no-console
        return db;
    }
};

const saveDB = () => {
    try {
        const serializedState = JSON.stringify(loadDB());
        localStorage.setItem(STORAGE_KEY, serializedState);
    } catch (e) {
        console.error('localStorage disabled.');    // eslint-disable-line no-console
    }
};

const getMapper = {
    account: (db, userName, password) => {
        if (password) {
            return db.account.filter((ac) => (
                ac.userName === userName && ac.password === password
            ))
        }
        if (userName) {
            return db.account.filter(ac => ac.userName === userName)
        }
        return db.account;
    },
    activity: (db, userId, start, count) => {
        return db.account.filter(ac => ac.id === userId)[0].follow
            .map((uid) => {
                return db.account.filter(ac => ac.id === uid).map(u => u.activity).reduce((prev, now) => [
                    ...prev,
                    ...now
                ], [])
            })
            .reduce((prev, now) => [
                ...prev,
                ...now
            ], [])
            .slice(start, count) || [];
    },
    problem: (db, problemId) => {
        console.log("problemId", problemId)
        if (problemId) {
            return db.problem.filter(p => p.id === problemId)[0];
        }
        return db.problem;
    },
    answer: (db, problemId) => {
        if (problemId) {
            return db.answer.filter(a => a.questionId === problemId).map(a => ({
                    ...a,
                    owner: db.account.filter(ac => ac.id === a.userId)[0],
                    replayCount: a.comments.length,
                })
            );
        }
        return db.answer;
    },
    comments: (db, answerId) => {
        if (answerId) {
            return db.answer.filter(a => a.id === answerId)[0].comments.map(c => ({
                ...c,
                owner: db.account.filter(ac => ac.id === c.userId)[0],
            }));
        }
        return db.answer[0].comments.map(c => ({
            ...c,
            owner: db.account.filter(ac => ac.id === c.userId)[0],
        }));
    }
}

const get = (url = '', ...rest) => {
    return new Promise((resolve, reject) => {
        if (getMapper[url]) {
            resolve(getMapper[url](loadDB(), ...rest));
        } else {
            reject({
                msg: `can not get ${url}`
            });
        }
    }).catch((e) => {
        console.log(e);
    });
}

const putMapper = {
    account: (db, account) => {
        db.account.push(Object.assign(account, {
            id: v4(),
            follow: [],
        }));
    }
}

const put = (url = '', ...rest) => {
    return new Promise((resolve, reject) => {
        if (putMapper[url]) {
            putMapper[url](loadDB(), ...rest);
            saveDB();
            resolve();
        } else {
            reject({
                msg: `can not put ${url}`
            });
        }
    }).catch((e) => {
        console.log(e);
    });
}

export default {
    get,
    put
};