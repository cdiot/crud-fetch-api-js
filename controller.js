class Controller {
    async index() {
        let dataset
        let searchParams = new URLSearchParams(window.location.search);
        let page = searchParams.get("page");
        let id = searchParams.get("id");
        if (page) {
            dataset = await Model.get(`https://reqres.in/api/users?page=${page}`)
        } else {
            dataset = await Model.get('https://reqres.in/api/users')
        }
        console.log(dataset);
        let view = new View()
        view.render(dataset.data, dataset.total_pages)
    }
}

