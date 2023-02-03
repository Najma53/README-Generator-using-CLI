// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
# ${answers.title}

  ## Table of Content
 - [Installation](#Installation)  
 - [Usage](#Usage)
 - [License](#license)
 - [Contribuing](#Contributing)
 - [Tests](#Tests)
 - [Questions](#Questions)

## Description
 ${answers.description}

 ## Installation
${answers.installation}

## Usage
${answers.usage}

##  License



## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.github}
${answers.email}

`;
}

module.exports = generateMarkdown;
