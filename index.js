//To begin, references are called to all libraries and modules the program will be employing. Application utilizes fs, inquirer, a template.js document imported from the src folder, and three class constructors found in the lib folder
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");

// Initialize begins the programmed and is called at the bottom of this document, when the program opens. A user is prompted with the required questions to create a Manager object. Utilizing a series of promises, the Manager object is created and passed onto the generateHTML methods imported from templates.js. After writing the generated HTML to the dist folder, the final promise in the series calls the build function
function initialize() {
    inquirer
        .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your team's manager?"
        },
        {
           type: "input",
           name: "id",
           message: "What is the ID number of your team's manager?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email address of your team's manager?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number of your team's manager?"
        }
    ])
    .then((details) => {
        const manager = new Manager(details.name, details.id, details.email, details.officeNumber);
        const html = template.generateHTML(manager);
        fs.writeFile("./dist/index.html", html, (err) =>
        err ? console.error(err) : console.log("Success"));
        return manager;
    })
    .then((employee) => {
        build();
    })
}
// Question to be passed into inquirer at the beginning of the build function. A user will select to add an Engineer, an Intern, or to finish building their team.
const addEmployee = {
    type: "list",
    name: "next",
    message: "How would you like to cointinue building your team?",
    choices: [
        "Add an Engineer.",
        "Add an Intern.",
        "I'm done building my team."
    ]
}
// Questions to be passed into inquirer when a user has indicated they want to add an Engineer. Questions gather information required for creation of Engineer objects
const addEngineerQs = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this engineer?"
    },
    {
       type: "input",
       name: "id",
       message: "What is the ID number of this engineer?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email address of this engineer?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the github username of this engineer?"
    }
]
// Questions to be passed into inquirer when a user has indicated they want to add an Intern. Questions gather information required for creation of Intern objects
const addInternQs = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this intern?"
    },
    {
       type: "input",
       name: "id",
       message: "What is the ID number of your this intern?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email address of this intern?"
    },
    {
        type: "input",
        name: "school",
        message: "Where does this intern go to school?"
    }
]
// The build function allows users to continue adding members to their team or to finish building. Using a switch statement, build receives from inquirer a user's next desired actions. Based on their next desired action, the swith statement will send the user to the appropriate code block. If an employee is added, the appropriate information is gathered using inquirer, an appropriate Employee object is built, and that object is then sent to the templates.generateCards. If a user chooses to finish building, the closing html elements are appended onto the end of index.html waiting in the dist folder.
function build() {
    inquirer
        .prompt(addEmployee) 
        .then((next) => {
            switch(next.next) {
                case "Add an Engineer.":
                    inquirer
                        .prompt(addEngineerQs)
                        .then((details) => {
                            const engineer = new Engineer(details.name, details.id, details.email, details.github)
                            const html = template.generateEngineerCard(engineer);
                            fs.appendFile("./dist/index.html", html, (err) =>
                            err ? console.error(err) : console.log("Success"));
                        })
                        .then((employee) => {
                            build();
                        })
                    break;
                case "Add an Intern.":
                    inquirer
                        .prompt(addInternQs)
                        .then((details) => {
                            const intern = new Intern(details.name, details.id, details.email, details.school)
                            const html = template.generateInternCard(intern);
                            fs.appendFile("./dist/index.html", html, (err) =>
                            err ? console.error(err) : console.log("Success"))
                        })
                        .then((employee) => {
                            build();
                        })
                    break;
                default:
                    console.log("Landed at default")
                    fs.appendFile("./dist/index.html", template.completeHTML(), (err) =>
                    err ? console.error(err) : console.log("Success"))
            }
        })
}



initialize();
