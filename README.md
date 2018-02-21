# Trial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

ng generate module app-routing --flat --module=app




<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to tutorial:{{ title }}!
  </h1>
  <!-- <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="> -->
</div>
<h2>Our Component List:</h2>
<ul>
  <li>
    <h2><a routerLink="/basic">Basic</a></h2>
  </li>
  <li>
    <h2><a routerLink="/login">Login</a></h2>
  </li>
</ul>
<router-outlet></router-outlet>
<div *ngIf="false">
  <button (click)="toggleDisplay()">Toggle List</button>
  <ul class="studyList" *ngIf="!displayFlag">
    <li>Expressions</li>
    <li>One way binding</li>
    <li>2 way binding</li>
    <li>Calling functions and their handling</li>
    <li>Events handing in buttons,forms etc</li>
    <li>Form Data</li>
    <li>Data Format(json reps)</li>
    <li>Adding external css and handling styles</li>
    <li>Conditional display,style,classes etc</li>
    <li>Routers</li>
    <li>Services</li>
    <li>Login page</li>
    <li>Validations error handling</li>
    <li>Http requests</li>
    <li>Good practices</li>
  </ul>
</div>

