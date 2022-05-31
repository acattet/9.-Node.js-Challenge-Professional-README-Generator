// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
//title
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a project title. (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
//description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your application.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
//installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your application.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },

//usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions for this application. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your usage instructions!');
                return false;
            }
        }
    },

//contributers
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other developers to contribute?',
        default: false
    },
{
    type: 'input',
    name: 'contribute',
    message: 'Please provide contribution guidelines. (Required)',
    validate: confirmContribute => {
        if (confirmContribute) {
            return true;
        } else {
            console.log('Please enter your guidelines!');
            return false;
        }
    }
},
//test
{
    type: 'input',
    name: 'test',
    message: 'Please provide test instructions for this application. (Required)',
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log('Please enter your test instructions!');
            return false;
        }
    }
},
//license
{
    type: 'list',
    name: 'license',
    message: 'Which license will you use for your project?',
    choices: ['Apache', 'boost', 'CC0', 'Eclipse', 'MIT', 'Mozilla', 'no license']
},
//username
{
    type: 'input',
    name: 'githubUsername',
    message: 'Please provide your GitHub Username? (Required)',
    validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false;
        }
    }
},
//email
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
];


// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./README.md", fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "File created"
            });
        });
    });
}


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}


// Function call to initialize app
init()

.then(readmeData => {
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFile => {
    console.log(writeFile.message);
})
.catch(err => {
    console.log(err);
});