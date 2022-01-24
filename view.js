class View {
    render(users, total_pages) {
        let html = users
            .map(user => {
                return `<p>Nom : ${user.first_name} ${user.last_name}</p>`;
            })
            .join("")
        for (let i = 1; i <= total_pages; i++) {
            console.log(i)
            html += `<a href="index.html?page=${i}">page ${i}</a>`
        }
        document
            .querySelector('#app')
            .insertAdjacentHTML('afterbegin', html);
    }
}