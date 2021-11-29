function generateMarkdown(data) {
  var licenseTag = data.userLicense.split(" ").join("_") 
  let readMe =
`
  # ${data.title}
  ![GitHub License](https://img.shields.io/badge/license-${licenseTag}-blue.svg)
  ## Description
  ${data.userDescription}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install necessary dependencies, run the following command:
  
  ${data.userDependencies}
  ## Usage
  
  ${data.userKnow}
  ## License
  This project is licensed under ${data.userLicense}
  ## Contributing
  ${data.userContribute}
  ## Test
  To run tests, run the following command:
  ${data.runTest}
  ## Questions
  If you have any questions about the repository, open an issue or contact me directly at ${data.userEmail}.
  You can find more of my work at www.github.com/${data.userGitHub}.
  `;
  return readMe;

  }

module.exports = generateMarkdown;