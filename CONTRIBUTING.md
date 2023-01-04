# How to contribute

We welcome contributions from the community and are pleased to have them.
Please follow this guide when logging issues or making code changes.

## Logging Issues

All issues should be created using the [new GitHub Issue form](https://github.com/siesgstarena/Arena-2.0/issues/new?assignees=&labels=&template=issue_template.md&title=).  
Use our [Issue Template](https://github.com/siesgstarena/Arena-2.0/blob/master/.github/ISSUE_TEMPLATE/issue_template.md).  
Clearly describe the issue including steps to reproduce if there are any.
Also, make sure to indicate the earliest version that has the issue being reported.

## Getting started with the project

- Fork the repository on GitHub.
- Navigate to the folder of the repository.
- To run this project, you should have node.js and npm installed on your system.
  If you don't have node.js and npm, you can visit [The official site of node.js](https://nodejs.org/en/)
  to install them on your system.
- Install NPM dependencies.
  ```
  npm install
  ```
- Create the .env file and copy the contents of .env.example into it by typing the following command:  
  For Linux or Mac (or Windows PowerShell):
  ```
  cp .env.example .env
  ```
  For Windows(cmd):
  ```
  copy .env.example .env
  ```
- Open the newly created .env file and set the values of SASS_PATH and REACT_APP_SERVER_BASE_URL.

  **Note:** There is no need to set the value of REACT_APP_SENTRY_DSN environment varaible.

  ```
  SASS_PATH=./node_modules
  REACT_APP_SERVER_BASE_URL=https://arena2backend-xnb3j.ondigitalocean.app/arenaworking2
  ```

- Run the development server to view the changes you are making by typing the following
  command:
  ```
  npm start
  ```
  ## Patching Code
  Steps to be followed:
  1.  Fork the repository.
  2.  Perform the changes.
  3.  Run eslint and prettier on the project to solve all linting and formatting issues by the following command:
  ```
  npm run format
  ```
  4.  Push the code to your forked repository on GitHub.
      Note: The commit and push may fail due to any linting errors. So make sure to fix all of them before commiting and pushing the code. Most of the linting errors can be resolved by running `npm run format` commmand but for some errors, you have to manually fix them.
  5.  Generate a pull request on Arena 2.0 repository (our repository). Use our [Pull Request Template](https://github.com/siesgstarena/Arena-2.0/blob/master/.github/PULL_REQUEST_TEMPLATE.md) for making a new pull request.
  6.  Once the code changes are thoroughly tested, they will be merged into the master of our repository.
      Code changes are welcome and should follow the guidelines given below.
  - Always make sure that your code follows this project's [eslint configuration](https://github.com/siesgstarena/Arena-2.0/blob/master/.eslintrc.js).
