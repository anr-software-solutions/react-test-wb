# React App for WorkBuddy
Live project is here, https://workbuddy-webapp.web.app/

## Features & Approach

 - **Used the latest version of React and latest features**. Modular architecture as recommended for React. 
    - React hooks, JSX, ES6 to make the code optimised, extendable and maintainable.
 - **Full unit tests and integration tests coverage**. 
    - Functional and component tests written using JEST & react-testing-library.
 - **Responsive web design.** 
    - Find mobile/tablet/desktop views. `screens/mobile-view.png`, `screens/tablet-view.png`, `screens/desktop-view.png`
 - **A state-of-the-art UI & UX with Material UI**
 - **Mobile first design**. 
    - Mobile first approach when adding media queries for different screen sizes.
 - **Cloud hosted project**.
    - Added the project to Github
 - **Firebase integration for deployments**. 
    - Find the project URL https://wb-test-react.web.app/
 - **Firebase Functions deliver data on demand via REST API**. 
    - Hosted Firebase function which delivers Json data. Github URL: https://github.com/anr-software-solutions/firebase-function-restapi
 - **CI/CD setup**. 
    - Whenever a commit is performed, Configured Github workflow gets executed, and a new version will be deployed in above project URL. No manual deployments are required.
 - **Code quality check with SonarQube**. https://sonarcloud.io/dashboard?id=anr-software-solutions_react-test-wb
    - Github project is integrated with SonarCloud for quality purposes. Whenever a commit is performed, SonarQube analysis will run and check for bugs, vulnerabilities, security hotspots, code smells and code duplications.
    
## Other project details
 - **Dynamic tabs and table creation** based on Json data fetched from cloud function created for this purpose.
    - If data of an additional type is added to data, just need to add display name mapping to `src/constants/tabConstants.js`
 - Sorting is provided for `Date`. Sort by ascending and descending order.
 - No errors/warnings when running the project with `npm start` and no browser console errors.
 - Tests are passing 100%. Check `screens/test-results.png`.
 - Mobile view shows `Total repayments` and `total amount` responsively. Table becomes scrollable in mobile to cater consistent table structure with descriptions.
 - Checked the project with edge cases (along with unit tests). 
     - If there is no data for a particular type, the table shows a 'No Rows' message
     - If there is a very long description, the table maintains its structure by cropping the later part. Check `screens/long-desc.png`.
     - Passing invalid date will show `invalid date` in the column.
     - & the other tests covered in unit/integration tests.

## Setup the project in Local
 
Check the latest version https://workbuddy-webapp.web.app/. If you want to run the project in local, follow the below steps. You will need to have Node >= 8.10 and npm >= 5.6 on your machine.  

 - Clone project to your local machine. https://github.com/anr-software-solutions/react-test-wb.git
 - Run `npm install && npm start`
 - Project will be running on http://localhost:3000/


## Versions
 - React Version: v17.0.1
 - UI UX: Material-UI: v4.11.0
 - Firebase: v8.13.1
 - React-testing-library: v8.0.1
 - JEST: v26.6.1
