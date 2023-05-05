# Restful API with JWT

## Table of Contents
* [Introduction](#introduction)
* [Infrastructure](#infrastructure)
* [Installation](#installation)
* [How to Run](#how-to-run)
* [Postman Collection](#postman-collection)

### Introduction
This project is simple challenge. There are some features, such as: login, signup and userlist. In this project, I implement Express.js for developing. Express is a minimal and flexible [`Node.js`](https://nodejs.org) web application framework that provides a robust set of features for web and mobile applications. I like JavaScript, because this language is awesome.

### Infrastructure
I try making this project as a challenge for me. I use [`JavaScript`](https://www.javascript.com) as programming language. I use [`Express`](https://expressjs.com) as framework. Metode authorization which I use is [`JSON Web Tokens`](https://jwt.io). There are the dependencies specified in package.json, such as:
* `bcryptjs`
* `body-parser`
* `cors`
* `dotenv`
* `express`
* `jsonwebtoken`
* `mysql2`
* `nodemon`
* `sequelize`
* `sequelize-auto-migrations`

### Installation
1. Install `Node.js`.
    * [`Node.js`](https://nodejs.org/en/download/package-manager/)
1. Cloning this project out with the following command:
    * Using SSH URL
    ```bash
    $ git clone git@github.com:azisalvriyanto/auth-nodejs.git
    ```
    * Using HTTPS URL
    ```bash
    $ git clone https://github.com/azisalvriyanto/auth-nodejs.git
    ```
1. Do the command to install the dependencies:
    ```bash
    $ yarn install
    ```
1. Set up the database configuration at `.env`. For example:

        PORT=1337
        JWT_SECRET_KEY=azisalvriyanto

        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_DATABASE=auth_nodejs_development
        DB_USERNAME=azisalvriyanto
        DB_PASSWORD=azisalvriyanto

1. Do the command to create and migrate database:
    ```bash
    $ npx sequelize db:migrate
    ```

### How to Run
Run server:
```bash
$ yarn start
```

### Postman Collection
You can get postman collection [here](https://www.postman.com/winter-shadow-5955/workspace/tumbuh-dan-berproses/collection/6937269-18dc7d90-d39e-4a34-b605-2effb5a3e7d5?action=share&creator=6937269).
