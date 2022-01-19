class Controller {
    async index() {
        let dataset = await Model.getList('https://reqres.in/api/users')
        let view = new View()
        view.render(dataset.data)
    }
}

