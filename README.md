# AngularTourOfHeroes

This is an implementation of [this tutorial](https://angular.io/tutorial/), and used as a reference and for experimentation with Angular 8.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
or `ng g c component-name`
also see

```bash
ng g c ../my-project-name/notification --flat --module=app
    # --flat puts the file in src/app instead of its own folder.
    # --module=app tells the CLI to register it in the imports array of the AppModule.
    # source: https://angular.io/tutorial/toh-pt5
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Coverage: `ng test --code-coverage`, coverage is in `/coverage/[projectname]/index.html`

also see: `ng lint`

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

To debug:

1. Add a `debugger;` statement somewhere in the code
2. do not start with `ng e2e` but with `ng serve` and in other terminal `npm run e2e:debug`
3. In Chrome, open the console and click the green "NodeJS" icon
4. A new Chrome window will open. Click the blue `continue` arrow.
5. The tests will start running. The next breakpoint will be at the `debugger;` statement.

Both "simple" protractor and cucumber are configured to be able to compare the configurations. To run cucumber e2e tests: `npm run cucumber`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# TODO

* services / data sharing
* testing
* custom /src/projectname path
* radio buttons
