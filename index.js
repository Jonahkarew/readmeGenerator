const inquirer = require("inquirer");
const fs = require("fs");
const fetch = require("node-fetch");


const questions = [
    {
        type: "input",
        name: 'userName',
        message: 'what is your github username?'
    },
    {
        type: "input",
        name: 'projectName',
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


const writeFile = (data) => {
    fs.writeFileSync("readmetest.md", createMD(data))
}


// move this to other file to make md formatting more reasonable
const createMD = (response) => {
    return (
        `# ${response.userName}`)
}

const init = () => {
    inquirer.prompt(questions).then(response => {
        writeFile(response)
    })
}

// init()

// git fetch test
const gitFetch = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
    .then(r => r.json()
    .then(res => console.log(res)))
}
gitFetch("jonahkarew")