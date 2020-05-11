const fs = require("fs");
const axios = require("axios");
const util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./util/generateMarkdown")

function questions(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the GitHub user name?",
            name: "username",
        },
        {
            type: "input",
            message: "What is the project's title?",
            name: "title",
        },
        {
            type: "input",
            message: "Please describe the project?",
            name: "description",
        },
        {
            type: "input",
            message: "Any installations needed?",
            name: "installation",
        },
        {
            type: "input",
            message: "How is this to be used?",
            name: "usage",
        },
        {
            type: "input",
            message: "How is this project licensed?",
            name: "license",
        },
        {
            type: "input",
            message: "Anyone contributing to this project?",
            name: "contributing",
        },
        {
            type: "input",
            message: "How would you run tests on this project?",
            name: "test",
        },
    ]);
}

async function init(){
    try{
        const userInput = await questions();
        const queryURL = `https://api.github.com/users/${userInput.username}`;
        await axios.get(queryURL).then(({data}) => {
            console.log(data);
            userInput.name = data.name;
            userInput.avatar_url = data.avatar_url;
            userInput.email = data.email;
          
        });
        const markdown = generateMarkdown(userInput);
        await writeFileAsync("README.md", markdown);
        console.log("README file has been created!");
    }
    catch (err) {
        console.error(err);
    }
}

init();

