const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");


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
        console.log(manager.getRole());
        const html = template.generateHTML(manager);
        fs.writeFile("./dist/index.html", html, (err) =>
        err ? console.error(err) : console.log("Success"));
        return manager;
    })
    .then((employee) => {
        build();
    })
}

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

function build() {
    inquirer
        .prompt(addEmployee) 
        .then((next) => {
            console.log(next.next)
            switch(next.next) {
                case "Add an Engineer.":
                    console.log("Made it here")
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
                    console.log("Landed at intern.")
                    inquirer
                        .prompt(addInternQs)
                        .then((details) => {
                            const intern = new Intern(details.name, details.id, details.email, details.school)
                            const html = template.generateInternCard(intern);
                            fs.appendFile("./dist/index.html", html, (err) =>
                            err ? console.error(err) : console.log("Success"))
                        })
                    break;
                default:
                    console.log("Landed at default")
            }
        })
}



initialize();
// build();