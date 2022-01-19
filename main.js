function get(url) {
    return fetch(url)
        .then(function (httpBodyResponse) {
            console.log('danslefetch')
            let response = httpBodyResponse.json()
            return response
        })
}

async function controllerShowData() {
    let datas = await get('https://reqres.in/api/users')
    showData(datas.data);
    console.log(datas)
}

function showData(users) {
    const html = users
        .map(user => {
            return `<p>Nom : ${user.first_name} </p>`;
        })
        .join("");
    document
        .querySelector('#app')
        .insertAdjacentHTML('afterbegin', html);
}

controllerShowData();
