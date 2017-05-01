export const register = () =>
    new Promise().resolve({
        isLogedIn: true,
        userId: 'fake_user'
    });

export const login = () =>
    new Promise().resolve({
        isLogedIn: true,
        userId: 'fake_user'
    });
