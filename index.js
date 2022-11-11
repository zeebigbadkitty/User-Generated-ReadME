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
    message: 'Include a table of contents.', //Clickable navigation.
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
    message: 'Make a license selection.', //Need a list of options and badges need to be added. 
    name: 'license',
  },
  {
    type: 'input',
    message: 'Include an image or example of your project.',
    name: 'example',
  },
  {
    type: 'input',
    message: 'What should be included in the credits? (Contributions)', //Github and e-mail address need to be linked.
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

    let buildReadme = buildReadme(response);

    //Writing that data to a readme.
    fs.writeFile('README.md', buildReadme, (err) => 
    err ? console.log(err) : console.log ('Successfully created index.html!')
  );
})

//Data to be gathered. 

const buildReadme = ({title, description, toc, instructions, usage, license, example, credits, tests, questions}) =>
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


//Video demo needs to be included. 