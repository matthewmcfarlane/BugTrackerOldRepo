const baseURL = 'http://localhost:9090/users';

export const postUser = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const getUserByAuth0Sub = (sub) => {
        return fetch(baseURL + `/${sub}`)
        .then(res => res.json())
}