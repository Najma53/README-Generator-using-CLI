// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
# ${answers.title}

![Open Source Licence](https://img.shields.io/badge/Licence-${answers.license}-ff69b4)\n
This README file was generated using this very Readme Generator

  ## Table of Content
 - [Installation](#installation)  
 - [Usage](#usage)
 - [License](#license)
 - [Contribuing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

##  License

License under the ${answers.license} lisence. To view further documentation please click on the [link](https://opensource.org/licenses)

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
