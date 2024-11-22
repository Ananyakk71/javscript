const cache = {
    name: 'code Malayalam'
};

function getJson(url) {
    if(cache) {
        return Promise.reject(cache);
    }

    return fetch(url)
    .then((data) => {
        return data.json();
    })
}


