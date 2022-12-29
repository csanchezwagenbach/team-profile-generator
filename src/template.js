const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

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
    <nav class="navbar navbar-dark bg-danger">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Team Profile</span>
        </div>
    </nav>

    <div class ="container-fluid">
        <div class ="row justify-content-around">
            <div class="card col-12 col-md-6 col-lg-4">
                <div class="card-header">
                  ${Manager.name}
                  ${Manager.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${Manager.id}</li>
                    <li class="list-group-item">Email: ${Manager.email}</li>
                    <li class="list-group-item">Office number: ${Manager.officeNumber}</li>
                </ul>
            </div>
`

const generateInternCard = (Intern) => `<div class="card col-12 col-md-6 col-lg-4">
<div class="card-header">
  ${Intern.name}
  ${Intern.getRole()}
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Intern.id}</li>
    <li class="list-group-item">Email: ${Intern.email}</li>
    <li class="list-group-item">School: ${Intern.getSchool()}</li>
</ul>
</div>
`

const generateEngineerCard = (Engineer) => `<div class="card col-12 col-md-6 col-lg-4">
<div class="card-header">
  ${Engineer.name}
  ${Engineer.getRole()}
</div>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${Engineer.id}</li>
    <li class="list-group-item">Email: ${Engineer.email}</li>
    <li class="list-group-item">Github: ${Engineer.github}</li>
</ul>
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