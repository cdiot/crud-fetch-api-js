class Model {
    static getList(url) {
        return fetch(url)
            .then(function (httpBodyResponse) {
                let response = httpBodyResponse.json()
                return response
            })
            .catch(error => {
                console.log(error)
            });
    }
}