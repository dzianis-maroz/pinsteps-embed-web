export const baseUrl = 'https://api.pinsteps.com';

const token = 'gtI7sq0UvaEaxO6GZrmIYxkToiY9adte'

export const defaultConfig = {
    headers: {
       Authorization: `Bearer ${token}`,
       Accept: 'application/json',
       Origin: 'https://pinsteps-embed.web.app/',
    },
}

export const API = {
    request(url, config = {}) {
        return fetch(url, {
            ...defaultConfig,
            ...config,
        });
    },
    get(path, config = {}) {
        return this.request(`${baseUrl}${path}`, config);
    },
    post(path, config = {}) {},
    put(path, config = {}) {},
    patch(path, config = {}) {},
    delete(path, config = {}) {},
};