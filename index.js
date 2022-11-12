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
    type: 'list',
    message: 'Make a license selection.', 
    name: 'license',
    choices: ['None', 'MIT', 'Apache License 2.0', 'BSD' ]
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

    let buildFile = buildReadme(response);

    //Writing that data to a readme.
    fs.writeFile('README.md', buildReadme, (err) => 
    err ? console.log(err) : console.log ('Successfully created index.html!')
  );
})

//Data to be gathered. 

const buildReadme = ({title, description, toc, instructions, usage, license, example, credits, tests, questions}) =>
 `#[Project title](#Project-title)
 ##${title}
 #[Description](#Description)
 ${description}
 #[Table of Contents](#Table-of-Contents)
 ${toc}
 #[Installation](#Installation)
 ${instructions}
 #[Usage](#Usage)
 ${usage}
 #[License](#License)
 ${license}
 #[Example](#Example)
 ![alt text](${example})
 #[Credits](#Credits)
 Clicking [this link](${credits}) will bring you to my Github.
 #[Tests](#Tests)
 ${tests}
 #[Questions](#Questions)
 Send questions to [this e-mail](${questions}).
 `

//Badges
function licenseBadge(license) {
    let badge = ''
if (license ==='MIT'){
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'}
} else if (license === 'Apache License 2.0'){
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'{
}else if (license === 'BSD'){
    badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
}else {
    badge =  ''
}
return badge;
}



//Video demo needs to be included. 