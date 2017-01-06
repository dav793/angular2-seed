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

The `npm start` command first compiles the application, then runs the `lite-server`. 
Afterwards, it simultaneously re-compiles and re-runs when file change is detected.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

### npm scripts

Some useful commands defined in `package.json`:

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
(currently broken)
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## The Sandboxes

The sandboxes were placed in `app/components/sandbox`. They demonstrate some common interactions between 
components and services. Each sandbox tries to demonstrate one or few interactions in isolation, to keep their 
code as simple and quick-to-understand as possible.

The subjects demonstrated by each sandbox are:
* Sandbox1: test a component in a test environment which simulates the application (using TestBed)
* Sandbox2: compile component under test which uses templateUrl (async)
* Sandbox3: component calls a synchronous function on a service
* Sandbox4: component fetches data from a service through observables
* Sandbox5: component gets data from HTTP request (through a service) 
* Sandbox6: component allows routing between sub-components Sandbox7 and Sandbox8

Run the unit tests to gain a better understanding of what each sandbox component does. The the next section describes 
how to run the unit tests.

You can use these sandboxes as templates for your application, in fact that is their intended purpose.

The tests for each component/service may be found in the files ending with '.spec.ts'. They are placed in the same
directory as the rest of files related to that component (.html, .css, .ts), as per the 
[Angular 2 Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

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
restart it.

### Code coverage (currently broken!)
Run `npm run test-coverage` to run the unit tests and generate a comprehensive code coverage report using Istanbul. The report is stored in the directory `./coverage`
