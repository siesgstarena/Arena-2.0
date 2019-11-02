# How to contribute

We welcome contributions from the community and are pleased to have them. 
Please follow this guide when logging issues or making code changes.

## Logging Issues

All issues should be created using the [new GitHub Issue form](https://github.com/siesgstarena/Arena-2.0/issues/new?assignees=&labels=&template=issue_template.md&title=).  
Use our [Issue Template](https://github.com/siesgstarena/Arena-2.0/blob/master/.github/ISSUE_TEMPLATE/issue_template.md).  
Clearly describe the issue including steps to reproduce if there are any.
Also, make sure to indicate the earliest version that has the issue being reported.

## Getting started with the project

* Fork the repository on GitHub.
* Navigate to the folder of the repository.
* To run this project, you should have node.js and npm installed on your system.
If you don't have node.js and npm, you can visit [The official site of node.js](https://nodejs.org/en/)
to install them on your system.
* Install NPM dependencies.  
  ```
  npm install
  ```
* Create the .env file and copy the contents of .env.example into it by typing the following command:  
  For Linux or Mac (or Windows PowerShell):
  ``` 
  cp .env.example .env
  ```
  For Windows(cmd):
  ``` 
  copy .env.example .env
  ```
* Open the newly created .env file and set the value of SASS_PATH environment variable
  ``` 
  SASS_PATH=./node_modules
  ```
* Run the development server to view the changes you are making by typing the following
command:
  ```
  npm start
  ```
  
  ## Patching Code
  
   Steps to be followed:
   1. Fork the repository.
   2. Perform the changes.
   3. Run eslint on the project by the following command:
   ```
   npm run lint
   ```
   4. Fix the linting issues by running the following command:
   ```
   npx run lint-fix
   ```
   5. Generate a pull request on Arena 2.0 repository (our repository). Use our [Pull Request Template](https://github.com/siesgstarena/Arena-2.0/blob/master/.github/PULL_REQUEST_TEMPLATE.md) for making a new pull request.
   6. Once the code changes are thoroughly tested, they will be merged into the master of our repository.
  
  Code changes are welcome and should follow the guidelines given below.
  
  * Always make sure that your code follows this project's [eslint configuration](https://github.com/siesgstarena/Arena-2.0/blob/master/.eslintrc.js).
  
