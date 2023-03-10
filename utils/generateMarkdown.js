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
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)
 - [Deployed Link](#deployed)

##  Description
${answers.description}

##  Installation
${answers.installation}

##  Usage
${answers.usage}

##  License

License under the ${answers.license} lisence. To view further documentation please click on the [link](https://opensource.org/licenses)

##  Contributing
${answers.contributing}

##  Tests
${answers.tests}

##  Questions
If any question, don't hesitate to contact me via [GitHub](https://github.com/${answers.github}) or by [email](mailto:${answers.email}) for additional questions.

##  Deployed Link
${answers.deployed}



`;
}

module.exports = generateMarkdown;
