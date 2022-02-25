const baseURL = 'http://localhost:9090/';

const postBug = (payload) => {
    return fetch(baseURL + "bugs", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteBug = (id) => {
    return fetch(baseURL + "bugs" + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
}

export default postBug;
