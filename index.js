const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const employee = [new Employee("employee")];
const Engineer = require("./lib/Engineer");
const engineer = [new Engineer("engineer")];
const Manager = require("./lib/Manager");
const manager = [new Manager("manager")];
const Intern = require("./lib/Intern");
const intern = [new Intern("intern")];
//const newTeam = require("./util/generateHtml");


// Questions
function questions() {
    inquirer.prompt([
        {
            type: "input",
            name: "Name",
            message: 'What is your name?',
        },
        {
            type: "input",
            name: "Id",
            message: 'Enter your ID number:',
        },
        {
            type: "input",
            name: "Email",
            message: 'What is your email?',
        },
        {
            type: "list",
            name: "Role",
            message: "what is your role?",
            choices: ["Engineer", "Manager", "Intern"],
        },
    ]).then(answers => {
        switch (answers.Role) {
            case "Engineer":
                console.log("New Engineer")
                addEngineer(answers);
                break;

            case "Manager":
                console.log("New Manager")
                addManager();
                break;

            case "Intern":
                console.log("New Intern")
                addIntern();
                break;

            default:
                console.log("Choose your role again!")
                break;
        }
    })
}

questions()


// Specific questions for each role from the choice list. 

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "Github",
            message: "What is your Github?"
        },
        {
            type: "confirm",
            name: "AddEmployee",
            message: "Done! Would you like to add another employee?"
        }
    ]).then(answers => {
        console.log(answers);
        const newEgineer = new Engineer(answers);
        employee.push(newEgineer);
        if (answers.AddEmployee === true) {
            questions()
        } else {
            newTeam();
        }
        console.log(employee);
        questions();
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "Office Number",
            message: "What is your office number?"
        },
        +
        {
            type: "confirm",
            name: "AddEmployee",
            message: "Done! Would you like to add another employee?"
        }
    ]).then(({ name }) => {
        console.log(name);
        const newManager = new Manager(name);
        employee.push(newManager);
        if (answer.AddEmployee === true) {
            questions()
        } else {
            newTeam();
        }
        console.log(employee);
        questions();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "School",
            message: "What school did you attend?"
        },
        {
            type: "confirm",
            name: "AddEmployee",
            message: "Done! Would you like to add another employee?"
        }
    ]).then(({ name }) => {
        console.log(name);
        const newIntern = new Intern(name);
        employee.push(newIntern)
        console.log(employee);
        questions();
    })
}

//create team
/*function newTeam() {
    fs.writeFile('generateHtml.js', generateHtml(answers), function (err) {
        if (err) throw err;
        console.log(generateHtml);
    })
}
*/







