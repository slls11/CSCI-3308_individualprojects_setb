INSTRUCTIONS

Download "SET B" folder and run through docker, you will need to preform the following for the databate to work:

1.
In order to run the application locally you first need to run 
'npm install'
To install the node modules.

2.
Also, you need to run a postgres database instance on your computer using 
'psql -U postgres'
and then create a .env file in the root directory that contains your database credentials. An example .env file has been provided.

3.
Then you can run 'npm start'
To run the application (as long as you have a running postgres database instance linked in server.js)

Also you can run the test suite by running 
'npm run test'
