# Angular 2 QuickStart with working example tests

This project was made on top of the Angular 2 QuickStart project on [github](https://github.com/angular/quickstart)

It contains a basic Angular 2 TypeScript application with working unit tests (karma-jasmine). It demonstrates 
some usages of components and services. The tested scenarios include:
* Syncrhonous component-service communication
* Asynchronous component-service communication using RxJS Observables
* Router navigation
* Services sending HTTP requests
* Use of @Input and @Output for inter-component communication
* Forms
* Injection of stubbed/mocked dependencies in test environments
* Use of [sinon](https://www.npmjs.com/package/karma-sinon) test doubles (stubs, mocks, spies)

 


### Prerequisites

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Clone
Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/dav793/et-escrow.erp.git  your-dir-name
cd your-dir-name
```

## Install npm package dependencies

> See npm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

The `npm start` command first compiles the application, then runs the `lite-server`. 
Afterwards, it simultaneously re-compiles and re-runs whenever file change is detected.
Both the compiler and the server watch for file changes. `npm start` does not run any backend server.

To compile the app, run `lite-server` and also a test backend server, use `npm start-s`.

Shut it down manually with `Ctrl-C`.

### npm scripts

Some useful commands defined in `package.json`:

* `npm start` - runs the compiler and a server (to serve the app) at the same time, both in "watch mode". does not run any backend server.
* `npm start-s` - runs the compiler, a testing backed server and another server for serving the app, all at the same time and in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once. It runs on all the .ts files in the project.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run test-coverage` - compiles and runs the karma unit tests, and generates a code coverage report under `/coverage`
(currently broken)
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Testing

This project uses both karma/jasmine unit test and protractor end-to-end testing support.

### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.

Add more `.spec.ts` files as you wish; karma was configured to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and karma watch for file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in both the terminal and the browser window.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it.

To debug tests with Chrome's inspector, hit the DEBUG button. This will open a new tab. Open the inspector in the new tab with 
`Ctrl-Shift-I`. 

### Code coverage (currently broken!)
Run `npm run test-coverage` to run the unit tests and generate a code coverage report using istanbul. 
The report is stored in the directory `./coverage`

## Configuration
### Enable Production Mode
This must be done whenever a build is passed into production.
* In `/app/shared/config.service.ts` change the value of `isDev` to true:
```typescript
export class ConfigService {

  isDev = true;   // set to false to turn on production mode
  
  ...
```
* in `/app/app.module.ts`, call `enableProdMode()` somewhere before the bootstrap near the end of the file

## Extra
Some other things this app uses:
* SystemJS
* [browserify] (https://www.npmjs.com/package/browserify)
* [lite-server] (https://www.npmjs.com/package/lite-server)
* [jQuery] (https://www.npmjs.com/package/jquery)
