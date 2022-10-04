const okNewRepo = (response, repository) => {
    return response.status(201).json(repository);
}

module.exports = {
    okNewRepo
}