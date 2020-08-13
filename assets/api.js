const fetch = require("node-fetch");

const api = {
    getGithubData(data) {
        let url = `https://api.github.com/repos/${data.username}/${data.project}`
        return fetch(url)
        .then(r => r.json()
        .then(res => {return res}))
        .catch(err => console.log("there was an error finding that project, please check your spellings and try again."))
    }
}



module.exports = api