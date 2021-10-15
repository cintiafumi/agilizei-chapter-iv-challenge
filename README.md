# Chapter IV - Challenge 02

Cypress automation testing of an [e-commerce](http://automationpractice.com) website.

## Requirements

- register a new user to the website
- user data should be different for each testing
- add assertions to the tests
- generate reports using [mochawesome](https://github.com/adamgruber/mochawesome)
- create a new repository to Github
- describe the project in a README file
- run tests in Github Actions
- report deployment at Github Pages

## Setup Cypress

Init a new Node.js project:

```bash
  npm init -y
```

Install Cypress as dev dependency:

```bash
  npm install cypress -D
```

Run Cypress:

```bash
  npx cypress open
```

Delete boilerplate files and add a schema to the `cypress.json` file:

```json
{
  "$schema": "https://on.cypress.io/cypress.schema.json"
}
```

Install Chance as dev dependency:

```bash
  npm install chance -D
```

Create a new test file `register.spec.js` to test the registration process.

Add scripts commands to the `package.json` file:

```json
{
  //...
  "scripts": {
    "cy:open": "npx cypress open",
    "cy:run": "npx cypress run"
  }
  //...
}
```

Run the headless test to record the video:

```bash
  npm run cy:run
```

<img src="./video.gif" alt="new user registration">
