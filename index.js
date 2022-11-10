const fs = require('fs'); 
const inquirer = require('inquirer');

//Get data from the user for the readME.


  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'Write a short biography about yourself.',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'What is your Linkedin address?',
        name: 'linkedin',
      },
      {
        type: 'input',
        message: 'Now link your Github.',
        name: 'github',
      },
    ])
    .then((response) =>{
    console.log(response) 
    //Call build function.

    let buildPortfolio = buildHtml(response);

    //Writing that data to a readme.
    fs.writeFile('index.html', buildPortfolio, (err) => 
    err ? console.log(err) : console.log ('Successfully created index.html!')
  );
})

//Data to be gathered. 

const buildHtml = ({name, location, bio, linkedin, github}) =>
 `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<section id="name">${name}</section> 
<section id="location">${location}</section>
<section id="bio">${bio}</section>
<section id="linkedin">${linkedin}</section>
<section id="github">${github}</section>


</body>
</html>`


