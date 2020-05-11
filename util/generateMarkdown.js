function generateMarkdown(data) {
  return `
# ${data.title}

# ${data.description}

[![Generic badge](https://img.shields.io/badge/<Viewed>-<0>-<Blue>.svg)](https://shields.io/)

#Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions

#Installation
To install necessary dependencies, run the following command:
${data.installation}

#Usage
${data.usage}

#License
The project is licensed under the ${data.license}.

#Contributin
${data.contributin}

#Test
To run tests, run the following command:
${data.test}

#Questions '\n'
<img width="150" src="${data.avatar_url}"> '\n'
If you have any questions about the repo, please contact ${data.name} at ${data.email}.
`;
}

module.exports = generateMarkdown;
