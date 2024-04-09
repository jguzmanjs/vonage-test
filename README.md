# Fastify Base [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

![Logo Emergya](assets/emergya-logo.jpg)

## Description

Example Fastify Base

## 📌 Methodologies and Guidelines

Quality Assurance Code (QAC)

* TypeScript, These projects provide templates which include TypeScript support. \
  [NPM TypeScript](https://www.npmjs.com/package/typescript) 
* ESTlint, tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. \
  [NPM ESLint](https://www.npmjs.com/package/eslint) \
  [NPM ESLint | Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
* Husky, git hooks made easy. \
  [NPM Husky](https://www.npmjs.com/package/husky)
* Jest, delightful JavaScript Testing. \
  [NPM Jest](https://www.npmjs.com/package/jest)
* SuperTest, HTTP assertions made easy via superagent. \
  [NPM SuperTest](https://www.npmjs.com/package/supertest)
* jscpd, Copy/paste is a common technical debt on a lot of projects. \
  [NPM jscpd](https://www.npmjs.com/package/jscpd)
* Mozilla, Standard HTTP response status codes. \
  [HTTP Status MOZILLA](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

## 💊 Core Node Modules Libraries

This project is based on the Fastify library as a core for the development of the project structure.
[Fastify](https://www.fastify.io/)

## 🌀 Fastify Lifecycle

```any
[0] → HTTP Request to Fastify endpoint.
[1] ↓ onRequest         (Hook)
[2] ↓ preParsing        (Hook)
[3] ↓ preHandler        (Hook)
[4] ↓ handler           (Reply)
[5] ← HTTP Reply with content and code.
[6] ↓ preSerialization  (Hook)
[7] - onResponse        (Hook)
```

Following url with the internal lifecycle of Fastify.
[Lifecycle](https://www.fastify.io/docs/latest/Lifecycle/#lifecycle)

## 📐 Infrastructure

### Add the enviroments files

Contact the responsible for the project for provide you of the .env files. Once you have them, add them to the "env" folder.

The complete list of the .env files that you should have in the "env" folder should be:

* .env.local
* .env.qa
* .env.dev
* .env.pre
* .env.pro
* .env.schema

#### Create env file with assistant

In env folder, execute: 
```
make
```
And follow the instructions to create a local, dev, qa... .env file
#### Or by using env schema
```
# Set to true or false so the logger will be enable or not
EMERGYA_SERVER_LOGGER=

# Port to deploy the Sample service
EMERGYA_SERVER_PORT=

# Control check token of header object
# If we have header control, we define a parameter for followed by what is indicated here
# Example EMERGYA_SERVER_SECURITY_CHECK_PATTERN='SERVER_TOKEN_HEADER'
# and the parameters indicated by the header to be checked should be EMERGYA_SERVER_TOKEN_HEADER_XFROM='xxx'
EMERGYA_SERVER_SECURITY_CHECK_PATTERN=
# To be filled if EMERGYA_SERVER_SECURITY_CHECK_PATTERN is not empty
# EMERGYA_SERVER_TOKEN_HEADER_XFROM=

# Health checker (to keep the service always up)
# If this variable is set to true, the service will always be listening in App Engine (health-check mode)
EMERGYA_SERVER_APPENGINE_HEALTHCHECK=
# Note: if EMERGYA_SERVER_APPENGINE_HEALTHCHECK is set to true, the following lines must be uncommented
# in app.yaml:
#######################################
#inbound_services:
#  - warmup
#automatic_scaling:
#  min_instances: 1
#  max_instances: 2
#  min_idle_instances: 1
#########################################
# If this variable is set to true, the service will always be listening in Kubernetes (health-check mode)
EMERGYA_SERVER_KUBERNETES_HEALTHCHECK=

```
Note: if health-check mode is active, the following lines must me uncommented in app.yaml:
```
inbound_services:
  - warmup
automatic_scaling:
  min_instances: 1
  max_instances: 2
  min_idle_instances: 1
```


### Adding Google Cloud credentials (if needed)

Contact the project manager and he will provide you with the file "credentials.json".

Once you have it, add it to the "env" folder.

### Install NodeJS Dependencies

```bash
$ npm i
```

### Development

To run the project locally and to develop you will have to execute the following command _(You will see a message on your terminal with the address and port of the local server)_:

```bash
# Development
$npm run start:watch
```

To run the unit tests of this project you will have to execute the following command:

```bash
# Unit Tests
$npm run test
```

## 🚀 How to deploy this project in Google Cloud

Depending on the environment we want to deploy, you will execute:

```bash
# Deploy GCP in Dev environment.
$npm run deploy:dev-principal
# Deploy GCP in QA environment.
$npm run deploy:qa-principal
# Deploy GCP in Pre environment.
$npm run deploy:pre-principal
# Deploy GCP in Pro environment.
$npm run deploy:pro-principal
```

## 📂 Code scaffolding

```
/
├── assets 🌈               # Images Sources.
|   └── ...                 # ...
|   |
├── doc
|   ├── api 🚠              # Postman Collection of Api Versions.
|   |   ├── v1              # Version 1
|   |   |   ├── *           # Postman Collections.
|   |   |   └── ...         # ...
|   |   └── ...             # ...
|   |
|   ├── qac 🔰              # Quality Assurance Code.
|   |   └── ...             # ...
|   |
|   ├── source 📖           # Source Documentation.
|   |   └── ...             # ...
|   |
├── env 🔌                  # Configure enviroments deploy.
|   |   └── ...             # ...
|   |
├── src
|   ├── config              # Generic config
|   ├── tools               # Generic tools
|   ├── types               # Generic types
|   ├── v1                  # Example Articles Module for Version 1 of API Rest
|   |   ├── __mocks__ 👻    # Mocks data for test.
|   |   ├── __tests__ 🚥    # Unit tests.
|   |   ├── config          # Custom config.
|   |   ├── middlewares     # Custom middlewares.
|   |   ├── routes          # Custom routes.
|   |   ├── services        # Custom services.
|   |   ├── tools           # Custom tools.
|   |   ├── types           # Custom types.
|   |   ├── *               # Version Initiation File.
|   |   └── ...             # ...
|   └── ...   
└── ...
```

## 🚠 API Documentation Endpoints

| Version | URL | File |
| ------- | --- | -----|
|   V1    | v1  | [Postman Collection](docs/api/v1/example_postman_collection.json) 


## ⛽️ Review and Update Dependences

For review and update all npm dependencies of this project you need install in global npm package "npm-check" npm module.

```bash
# Install and Run
$ npm i -g npm-check
$ npm-check
```

## Happy Code

Created with JavaScript, lot of ❤️ and a few ☕️

#### This README.md file has been written keeping in mind:
- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)
- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
