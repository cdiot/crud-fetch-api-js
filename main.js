function fetchData() {
    fetch('https://reqres.in/api/users')
        .then(response => {
            if (!response.ok) {
                throw Error("Error");
            }
            return response.json();
        })
        .then(data => {
            const html = data.data
                .map(user => {
                    return `<p>Nom : ${user.first_name} </p>`;
                })
                .join("");
            document
                .querySelector('#app')
                .insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();
