const inquirer = require('inquirer')

const askUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub nickname?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe what does your project:',
        },
        {
            type: 'checkbox',
            name: 'license',
            choices: ["MIT", "ISC", "Apache 2.0"]
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Installation commands:',
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Add usage Information:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How to contribute?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Add test instructions:',
        },
    ])
}

module.exports = {
    askUser
}