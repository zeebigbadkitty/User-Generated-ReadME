const fs = require('fs'); 
const inquirer = require('inquirer');

//Get data from the user for the readME.


inquirer
.prompt([
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Give a brief description.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Include a table of contents.',
    name: 'toc',
  },
  {
    type: 'input',
    message: 'Are there any installation instructions?',
    name: 'instructions',
  },
  {
    type: 'input',
    message: 'Usage?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Which license?',
    name: 'license',
  },
  {
    type: 'input',
    message: 'Include an image or demo of your project.',
    name: 'image',
  },
  {
    type: 'input',
    message: 'What should be included in the credits? (Contributions)',
    name: 'credits',
  },
  {
    type: 'input',
    message: 'Which tests have been performed?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Questions?',
    name: 'questions',
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


