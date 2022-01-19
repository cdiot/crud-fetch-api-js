class View {
    render(users) {
        const html = users
            .map(user => {
                return `<p>Nom : ${user.first_name} ${user.last_name}</p>`;
            })
            .join("");
        document
            .querySelector('#app')
            .insertAdjacentHTML('afterbegin', html);
    }
}