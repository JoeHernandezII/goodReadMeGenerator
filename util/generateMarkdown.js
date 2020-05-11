function generateMarkdown(data) {
  return `
# ${data.title}

# ${data.description}

[![Generic badge](https://img.shields.io/badge/<Viewed>-<0>-<Blue>.svg)](https://shields.io/)

-Table of Contents-
\n
- Installation
- Usage
- License
- Contributing
- Tests
- Questions

-Installation-
\n
To install necessary dependencies, run the following command:
${data.installation}

-Usage-
\n
${data.usage}

-License-
\n
The project is licensed under the ${data.license}.

-Contributin-
\n
${data.contributin}

-Test-
\n
To run tests, run the following command:
${data.test}

#Questions \n\n
<img width="150" src="${data.avatar_url}"> \n\n
If you have any questions about the repo, please contact ${data.name} at ${data.email}.
`;
}

module.exports = generateMarkdown;
