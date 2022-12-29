const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");

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
        err ? console.error(err) : console.log("Success"))
    })
    // .prompt([
    //     {
    //         type: "list",
    //         name: ""
    //     }
    // ])
