class Model {
    static get(url) {
        return fetch(url)
            .then(function (httpBodyResponse) {
                if (httpBodyResponse.ok) {
                    return httpBodyResponse.json();
                } else {
                    return Promise.reject(httpBodyResponse);
                }
            })
            .catch(error => {
                console.log('Quelque chose s\'est mal passé.', error)
            });
    }
}