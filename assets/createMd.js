function createMd(data, apiData){
    return `
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

# ${data.project}


## Description

${data.description}

## Repository
${apiData.html_url}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}


  
## Contributing

${data.contribution}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

<img src="${apiData.owner.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />

If you have any questions about the repo, open an issue or contact [${data.username}](${apiData.owner.html_url}) directly at ${data.email}.

    `;
}

module.exports = createMd;