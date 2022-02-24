const baseURL = 'http://localhost:8080/';

const postBug = (payload) => {
    return fetch(baseURL + "bugs", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export default postBug;