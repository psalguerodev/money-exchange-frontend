# Money Exchange

![alt text](https://travis-ci.org/psalguerodev/money-exchange-frontend.svg?branch=master "Logo Title Text 1")

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Trello

For contributing on this project use Trello [Public Trello Kanban](https://trello.com/b/e37QSC8C/belatrix-money-exchange).

## Code scaffolding

```
.
├── exchange
│   ├── components
│   │   └── calculator-exchange
│   │       ├── calculator-exchange.component.html
│   │       ├── calculator-exchange.component.sass
│   │       ├── calculator-exchange.component.spec.ts
│   │       └── calculator-exchange.component.ts
│   ├── container
│   │   └── currency-exchange
│   │       ├── currency-exchange.component.html
│   │       ├── currency-exchange.component.sass
│   │       ├── currency-exchange.component.spec.ts
│   │       └── currency-exchange.component.ts
│   ├── exchange-routing.module.ts
│   ├── exchange.module.ts
│   ├── exchange.service.spec.ts
│   └── exchange.service.ts
├── ui-shared
│   ├── footer
│   │   ├── footer.component.html
│   │   ├── footer.component.sass
│   │   └── footer.component.ts
│   ├── header
│   │   ├── header.component.html
│   │   └── header.component.ts
│   ├── navbar
│   │   ├── navbar.component.html
│   │   ├── navbar.component.sass
│   │   └── navbar.component.ts
│   └── ui-shared.module.ts
├── app-routing.module.ts
├── app.component.html
├── app.component.sass
├── app.component.spec.ts
├── app.component.ts
└── app.module.ts
```


Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploy to Github Pages

Run `yarn deploy:ghpages` to deploy to Github Page of this repo.
