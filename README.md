# QUIZZ APP

[![Travis Build Status][build-badge]][build]
[![Coverage Status][coverage-badge]][coverage]
---

**RUNNING WITH** 

[![DOCKER][docker-badge]][docker]
---

## Requirements

* [Node.js][node] >= 10
* [Angular CLI][angular-cli] >= 8
* [MongoDB][mongo-db]
* [Yarn][yarn]
* [Docker][docker] (optional)
---

## Project Structure

```shell
quizz-app/                              # → Root Application
├── docker/                             # → DockerFile images
│   └── backend/                        # → backend DockerFile
├── e2e/                                # → End to End tests Folder
├── server/                             # → backend root folder
│   ├── src/                            # → Backend Source Folder
│   │   ├── api/                        # → Backend API Folder
|   │   │   ├── controllers/            # → Controllers
|   │   │   ├── middlewares/            # → Middlewares
|   │   │   ├── models/                 # → Mongo models folder
|   │   │   ├── routes/                 # → Routes folder
|   │   │   ├── services/               # → Service layer folder
|   │   │   └── validators/             # → Payload validators
│   │   ├── config/                     # → Configuration Folder
│   │   ├── data/                       # → Seeds and Database script location
│   │   ├── docs/                       # → documentation location
│   │   └── utils/                      # → Helpers Folder
│   └── test/                           # → Backend Unit Tests
├── src/                                # → Frontend root folder
│   ├── app/                            # → Frontend source folder
│   │   └── layout/                     # → layout folder
│   ├── assets/                        
│   ├── environments/                   # → Frontend environments variables
│   └── themes/                         
├── jest.config.js                      # → node.js dependencies and scripts
├── package.json                        # → node.js dependencies and scripts
├── README.md                           # → ME :smile:
├── tsconfig.app.json                   
├── tsconfig.json                       
├── tsconfig.spec.json                 
├── tslint.json                         # → Typescript linter definition
└── yarn.lock                           
```

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

[docker-badge]: https://c7.uihere.com/icons/424/905/308/docker-logo-media-social-icon-11643f08ed30aa3544e857cc6b477212.png
[docker]: https://www.docker.com
[build-badge]: https://travis-ci.org/comitlab/quizz-app.svg?branch=master
[build]: https://travis-ci.org/comitlab/quizz-app
[coverage-badge]: https://codecov.io/gh/comitlab/quizz-app/branch/master/graph/badge.svg
[coverage]: https://codecov.io/gh/comitlab/quizz-app
[node]: http://nodejs.org/
[angular-cli]: https://github.com/angular/angular-cli
[mongo-db]: https://www.mongodb.com/download-center
[yarn]: https://yarnpkg.com/en/docs/install
[docker]: https://docs.docker.com/install/
