# Welcome to Comeuppance!

Are you a Parent? Do you want a point system for your children that allows the children to choose rewards or punishments based on their behavior? Well Comeuppance can help with that.

## What does Comeuppance solve?

1. Point system for children based on behavior that gives both parents and their children access to their progress.

2. Setting rewards and Punishments that children may get based on their choices in behavior. As well as randomly pick the rewards or punishments for the child so that the parent does not have to be to one to choose.

3. Track behavior trends for individual children by keeping record of previously earned points, rewards, and punishments.


## Want to use Comeuppance? Follow the instructions below to run the application.

Clone down this repository by clicking the "Clone or Download" button above, copying the SSH key, and running the following command in your terminal git clone SSH KEY GOES HERE.

cd into the root directory of the app.

Run npm install and wait for all dependencies to be installed.

cd into /src/modules and open Credentials.js.example.

Run npm start to verify that installation was successful and start the application.

cd into the /api directory, and remove the .example extention from the database.json.example file.

In the api folder, run json-server -p 5002 -w database.json.

Go to http://localhost:3000/ to view the app.

### This project was bootstrapped with Create React App.
