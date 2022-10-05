const okNewRepo = (response, repository) => {
    return response.status(201).json(repository);
}

const okListRepos = (response, repositories) => {
    return response.status(200).json(repositories);
}

module.exports = {
    okNewRepo,
    okListRepos
}