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

 
Some other things this app uses:
* [browserify] (https://www.npmjs.com/package/browserify)
* [lite-server] (https://www.npmjs.com/package/lite-server)
* [jQuery] (https://www.npmjs.com/package/jquery)

### Prerequisites

**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Clone
Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/dav793/angular2-seed.git  my-proj
cd my-proj
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
* `npm run test-coverage` - compiles and runs the karma unit tests, and generates a code coverage report under `/coverage`
(currently broken)
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)

## The Sandboxes

The sandboxes are located in `/app/components/sandbox`. They demonstrate some common interactions between 
components and services. Each sandbox tries to demonstrate only one or few interactions in isolation, 
in order to keep their code simple, quick to understand and easy to modify.

The subjects demonstrated by each sandbox are:
* Sandbox1: test a component in an environment which simulates the application (using TestBed)
* Sandbox2: compile component under test which uses templateUrl (async)
* Sandbox3: component calls a synchronous function on a service
* Sandbox4: component fetches data asynchronously (through observables) from a service
* Sandbox5: component gets data from HTTP request (through a service) 
* Sandbox6: component allows navigation between child components using the Router
* Sandbox7: child component uses @Input and @Output to communicate with parent controller (also uses a basic form)
* Sandbox8: parent component interacts with child component via local variable
* reactive forms PENDING

You can use these sandboxes as templates for parts of your application, in fact that is their intended purpose.

All of the sandboxes had unit tests written for them. Run the tests and look at their output to get a better 
understanding of what each sandbox does. The next section describes how to run the unit tests.

The tests for each sandbox can be found in the files ending with '.spec.ts'. They are placed in the same
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

Test-runner output appears in both the terminal and the browser window.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it.

To debug tests with Chrome's inspector, hit the DEBUG button. This will open a new tab. Open the inspector in the new tab with 
`Ctrl-Shift-I`. 

### Code coverage (currently broken!)
Run `npm run test-coverage` to run the unit tests and generate a code coverage report using istanbul. 
The report is stored in the directory `./coverage`
