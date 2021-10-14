
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

Delete boilerplate files and add a schema at `cypress.json` file:
```json
{
  "$schema": "https://on.cypress.io/cypress.schema.json"
}
```
