const baseURL = 'http://localhost:9090/';

const postBug = (payload, selectedReporter) => {
    payload.reporter = selectedReporter;
    return fetch("http://localhost:9090/bugs", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Accept': 'application/json',  'Content-Type': 'application/json'}
    })
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
        return responseData;
   });
}

export const deleteBug = (id) => {
    return fetch(baseURL + "bugs" + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
}

export default postBug;
