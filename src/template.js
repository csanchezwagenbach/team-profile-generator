const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const Inquirer = require("Inquirer")

const generateHTML = (Manager) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-dark bg-danger mb-2">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Team Profile</span>
        </div>
    </nav>

    <div class ="container-fluid">
        <div class ="row justify-content-evenly">
            <div class="card col-12 col-md-6 col-lg-4 mb-2 bg-secondary">
                <div class="card-header bg-primary text-white my-1">
                  ${Manager.name} <br>
                  ${Manager.getRole()}
                </div>
                <div class="card-body bg-secondary mb-1">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${Manager.id}</li>
                    <li class="list-group-item">Email: <a href= "mailto:${Manager.email}">${Manager.email}</a></li>
                    <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
                </ul>
                </div>
            </div>
`

const generateInternCard = (Intern) => `<div class="card col-12 col-md-6 col-lg-4 mb-2 bg-secondary">
<div class="card-header bg-primary text-white my-1">
  ${Intern.name} <br>
  ${Intern.getRole()}
</div>
<div class="card-body bg-secondary mb-1">
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Intern.id}</li>
    <li class="list-group-item">Email: <a href= "mailto:${Intern.email}">${Intern.email}</a></li>
    <li class="list-group-item">School: ${Intern.getSchool()}</li>
</ul>
</div>
</div>
`

const generateEngineerCard = (Engineer) => `<div class="card col-12 col-md-6 col-lg-4 mb-2 bg-secondary">
<div class="card-header bg-primary text-white my-1">
  ${Engineer.name} <br>
  ${Engineer.getRole()}
</div>
<div class="card-body bg-secondary mb-1">
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Engineer.id}</li>
    <li class="list-group-item">Email: <a href= "mailto:${Engineer.email}">${Engineer.email}</a></li>
    <li class="list-group-item">Github: <a href="https://github.com/${Engineer.getGithub()}">${Engineer.getGithub()}</a></li>
</ul>
</div>
</div>`

const completeHTML = () =>  
`
</div>
</div>
</body>
</html>
`


module.exports = {
    generateHTML,
    generateInternCard,
    generateEngineerCard,
    completeHTML
};