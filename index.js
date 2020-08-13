const inquirer = require("inquirer");
const fs = require("fs");
const createMd = require("./assets/createMd");
const api = require("./assets/api")

const questions = [
    {
        type: "input",
        name: 'username',
        message: 'what is your github username?'
    },
    {
        type: "input",
        name: 'email',
        message: 'what is your email address?'
    },
    {
        type: "input",
        name: 'project',
        message: 'what is your project name?'
    },
    {
        type: "input",
        name: 'description',
        message: 'write a short description of your project.'
    },
    
    {
        type: "list",
        name: 'license',
        message: 'what type of license does your project use?',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: 'installation',
        message: 'what command do i use to install dependencies?',
        default: 'npm i'
    },
    {
        type: "input",
        name: 'test',
        message: 'what command do i use to run tests?',
        default: 'npm test'
    },
    {
        type: "input",
        name: 'usage',
        message: 'what does a user need to know about using the repo?'
    },
    {
        type: "input",
        name: 'contribution',
        message: 'what does a user need to know about contributing to the repo?'
    },
    
    
]


const writeFile = (data, apiData) => {
    fs.writeFileSync("./output/README.md", createMd(data, apiData))
}


// move this to other file to make md formatting more reasonable
// const createMD = (response) => {
//     return (
//         `# ${response.username}`)
// }

const init = () => {
    inquirer.prompt(questions).then(response => {
        // writeFile(response)
        api.getGithubData(response)
            .then(r => writeFile(response, r))
    })
}

// init()

// git fetch test

init()