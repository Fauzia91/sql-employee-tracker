const inquirer = require("inquirer");
//importing the library to use
const fs = require('fs');
const mysql = require('mysql2');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'employee_tracker'
}) 



const questions = [{
    type: "list",
    name: "selected",
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
    message: "What would you like to do?"
}]




// TODO: Create a function to initialize app
function init() {
    
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log("these are my answers", answers.selected)

    switch(answers.selected){


        case "view all departments": getDepartments();  break;
        case "view all roles": getRoles(); break;
        case "view all employees": getEmployee(); break;
        case "add a department": addDepartment(); break;
        case "add a role": addRole(); break;
        case "add an employee": addEmployee(); break;
        case "update an employee role": updateEmployee(); break;

    }



   


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




}

// Function call to initialize app
init();

function getDepartments(){
    connection.query("SELECT * FROM department", function(err, results){     const table = cTable.getTable(results);
          
          console.log(table);

        init();
    });

}

function getEmployee(){
    connection.query("SELECT * FROM employee", function(err, results){     const table = cTable.getTable(results);
          
        console.log(table);

      init();
  });
    
}

function getRoles(){
    connection.query("SELECT * FROM role;", function(err, results){     const table = cTable.getTable(results);
          
        console.log(table);

      init();
  });

}

function addEmployee(){

    // first name, last name, role, and manager, and that

    inquirer
    .prompt([{
        type: "input",
        name: "fn",
        message: "What is your first name?"
    },{
        type: "input",
        name: "ln",
        message: "What is your last name?"
    },{
        type: "input",
        name: "role_id",
        message: "What is your role id?"
    },{
        type: "input",
        name: "manager_id",
        message: "What is your manager_id?"
    }])
    .then((answers) => {
        connection.query(`INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (NULL, '${answers.fn}', '${answers.ln}', ${answers.role_id}, ${answers.manager_id} );`, function(err, result){
            console.log("employee added");
            console.log(err)

            init(); 
        });

    })
}

function addDepartment(){
    inquirer
    .prompt([{
        type: "input",
        name: "department_name",
        message: "What is the name of the department"
    }])
    .then((answers) => {
        connection.query("INSERT INTO `department` (`id`, `name`) VALUES (NULL, '" + answers.department_name +"');", function(err, result){
        console.log("department added")

            init(); 
        });

        

    })
}

function addRole(){
   
    inquirer
    .prompt([{
        type: "input",
        name: "title",
        message: "What is the job title?"
    },{
        type: "input",
        name: "salary",
        message: "What is the salary?"
    },{
        type: "input",
        name: "department_id",
        message: "What is department ID?"
    }])
    .then((answers) => {


        connection.query("INSERT INTO `role` (`id`, `title`, `salary`, `department_id`) VALUES (NULL, '"+ answers.title + "', '"+ answers.salary +"', " + answers.department_id + ");", function(err, result){
            console.log("employee added")
            init(); 
        });

    })
}

function updateEmployee(){

    inquirer
    .prompt([{
        type: "input",
        name: "employee_id",
        message: "What is the employee id?"
    },{
        type: "input",
        name: "role_id",
        message: "What is the new role_id?"
    }])
    .then((answers) => {

        connection.query(`UPDATE employee SET role_id=${answers.role_id} WHERE id = ${answers.employee_id}`, function(err, result){
            console.log("employee added", err)
            init(); 
        });

    });


}