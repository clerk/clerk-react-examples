# Clerk Oasis Starter

![Preview](./docs/preview.png)

This React project demonstrates how to use [@clerk/clerk-react](https://docs.clerk.dev/get-started/create-react-app?utm_source=github&utm_medium=starters&utm_campaign=oasis) together with some ClerkJS JavaScript methods to build a wizard sign-up form with two-factor authentication and profile attributes.

[![Open in VS Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/clerkinc/clerk-react-form-examples)

## Get started

### Clerk Instance Setup

The Oasis example requires a few Clerk instance settings to be set. Go to your instance dashboard page under **Settings** → **User management** and set `usernames` as required and enable `passwordless` authentication strategy.

<img height="300px" src="../../docs/oasis-instance-settings.png" />

### Development Setup

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To get started with [Clerk](http://www.clerk.dev?utm_source=github&utm_medium=starters&utm_campaign=oasis) sign up, create your application and follow the [official React guide](https://docs.clerk.dev/get-started/create-react-app).

As soon as you create your clerk application, clone `.env` as `.env.local` and set the **Frontend API key** of your Clerk development instance to the `REACT_APP_CLERK_FRONTEND_API` variable.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
