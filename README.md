
### Travis CI Build Status. [![Build Status](https://travis-ci.com/anil-kk/contacts.svg?branch=master)](https://travis-ci.com/anil-kk/contacts) 

### CI Automatic Deploy [DEMO](http://1337.surge.sh/)

***
## Features and functional requirements



design/accessibility | functionality | testing/QA
------------ | ------------- | -------------
|Fancy animations (1 pt) | ~~Sort by name and office~~ (1 pt)  | ~~Works in Chrome, Firefox, Edge~~ (1 pt) |
Keyboard only function (1 pt) 	| 	Filter by name and office (1 pt)			|	~~Works in IE11~~ (1 pt) 
~~A modern design (1 pt)~~ |	Filter by contact links (1 pt) |	End-to-end testing (with an existing framework) (2 pt)
No UI framework used (such as Bootstrap, Ant) (1 pt) | ~~Enable switch between a grid and a different view~~ (1 pt) |	Unit tests for existing functionality (reasonable coverage) (2 pt)
Screen reader function (1 pt)	|	 ~~Available on a free public url (such as Azure, Heroku)~~ (1 pt)|	...
~~Responsive design, works on mobile and tablets~~ (2 pt) 	|	~~CI/CD pipeline from your repo (e.g. Travis, GitLab, Azure)~~ (1 pt) | ... 
... |	~~Only render a set of profiles using either infinity scroll, pagination or a load more button~~ (2 pt)| 	...
...	|		Build you own API by scraping the current page and setting up a local backend server (in this case set all offices to Lund as it isn't rendered on the page) (4 pt) |	...

***

The above table indicates the status of work in this project. The features that were selected and implemented were marked with ~~strikethrough~~

#### Description

* This application helps the user to navigate through the profiles of people from an organization. This data is provided by [back end API](https://api.tretton37.com/ninjas)
* This is a single page application(SPA) built using React, usually called a Web Client. It consumes the backend API and act as a User Interface where users can interact and navigate through data. This application is configured to use State Management library Redux. This application design helps the project to scale while the complexity increases.
* As some parts of application code is written in ES6 syntax, pollyfils has been used to support Internet Explorer(IE11).
* The data that is shown to the user is sorted based on Name and Office, as it helps user to navigate through the avialable data.
* The user is given a toolbar to switch the type of view, as it helps the user see the information that they really want.
* Paging has been added to improve the performance of the application. It also helps the user navigate through the data. It seems that the paging is only at front-end as the backend API does not seems to support paging and returns all the data at once. If back-end supports paging then the application needs to adapt to that.
* The application is available via public URL. It is easily accessible for testing accross different devices.
* The application uses a modern responsive design, so that users can access the application functionality in mobiles, PC, Tablets with different screen sizes and the layout adapts to the size of device screen.
* CI has been configured, it makes the development, testing and deployment easy on each push to the Repository. For an example, there is one unit test which is running automaticlly on every push. This part can be focused so that each deploy can be done confidently after developers making their changes, as automatic tests are run on every push, this can be configured as needed.

* To summarize, this is a MVP(Minimum Viable Product) for the first release of product, selection of features is made based on providing the user with acceptable product functionality.


***

## Development Environment

### Required

[Node](https://nodejs.org/en/)
[Git](https://git-scm.com/downloads)

`git clone https://github.com/anil-kk/contacts.git`
`cd contacts`

On Windows OS, In the project directory, you can run:

### `npm install`

Installs all required node packages that this project needs

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


OR if you are On MAC OS, In the project directory, you can run: Install [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
