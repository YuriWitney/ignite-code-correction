const { v4: uuid } = require("uuid");

const createRepository = (request, repositories) => {
    const { title, url, techs } = request.body

    const repository = {
        id: uuid(),
        title: title,
        url: url,
        techs: techs,
        likes: 0
    };

    repositories.push(repository)

    return repository
}

module.exports = {
    createRepository
}