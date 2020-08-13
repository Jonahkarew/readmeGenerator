const fetch = require("node-fetch");

const api = {
    getGithubData(data) {
        fetch(`https://api.github.com/repos/${data.username}/${data.project}`)
        .then(r => r.json()
        .then(res => console.log(res)))
    }
}

var data = {
    username: 'jonahkarew',
    project: 'readmeGenerator'
}

api.getGithubUser(data)