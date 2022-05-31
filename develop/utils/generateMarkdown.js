
// If there is no license, return an empty string

    function renderLicenseBadge(license) {
      return `![license: ${license}](https://img.shields.io/badge/license-${license}-blue)`;
    }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string


      function renderLicenseLink(license) {
        switch(license) {
          case "Apache":
            return `[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)`;
          case "Boost":
            return `[Boost Software License 1.0](https://www.boost.org/users/license.html)`;
          case "CC0":
            return `the [Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) license`;
          case "Eclipse":
            return `[Eclipse Public License 2.0](https://www.eclipse.org/legal/epl-2.0/)`;
           case "MIT":
            return `the MIT License`;
          case "Mozilla":
            return `[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)`;
          default:
            return `the ${license} license`;
        }
      }

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if(license !== "none") {
    return `
## License
` + renderLicenseBadge(license) + `
This repository is licensed by ` + renderLicenseLink(license) + `. For more information visit this repository's "LICENSE" section.
`;
  }
  return ``;
}

//contributors
function contribsSectionLink(confirm) {
  if(confirm) {
    return `
- [Contributing](#contributing)`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  ${data.description}
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}
  ## [License](#table-of-contents)
  ${renderLicenseSection(data.license)}
  ## [Contributing](#table-of-contents)
  ${data.contribute}
  
  ## [Tests](#table-of-contents)
  ${data.test}
  ## [Questions](#table-of-contents)
  To contact or see my work, please refer to the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;