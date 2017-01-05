# Angular 2 QuickStart with working example tests

This project was made on top of the Angular 2 QuickStart project on [github](https://github.com/angular/quickstart)

It contains a basic Angular 2 TypeScript application with working unit tests (karma-jasmine). It demonstrates 
some usages of components and services. The tested scenarios include:
* Services sending HTTP requests
* Injection of stubbed/mocked dependencies
* Syncrhonous component-service communication
* Asynchronous component-service communication
* Use of mock and spy test doubles
* Use of [sinon](https://www.npmjs.com/package/karma-sinon) test doubles (stubs, mocks, spies)

 
This app also uses:
* [browserify] (https://www.npmjs.com/package/browserify)
* [lite-server] (https://www.npmjs.com/package/lite-server)
* [materialize-css] (https://www.npmjs.com/package/materialize-css)
* jQuery

### Prerequisites

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/dav793/angular2-seed.git  my-proj
cd my-proj
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run test-coverage` - compiles and runs the karma unit tests, and generates code a coverage report under `./coverage`
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## Testing

This repo adds both karma/jasmine unit test and protractor end-to-end testing support.



### Unit Tests
TypeScript unit-tests are usually in the `app` folder. Their filenames must end in `.spec`.

Add more `.spec.ts` files as you wish; karma was configured to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and karma watch for file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears both in the terminal window and the browser window by using the jasmine html reporter.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

### Code coverage (currently broken!)
Run `npm run test-coverage` to run the unit tests normally in Karma, and generate a comprehensive code coverage report using Istanbul. The generated report is stored in the directory `./coverage`
