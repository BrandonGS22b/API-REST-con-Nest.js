<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

<img src="https://i.imgur.com/dBaSKWF.gif" height="20" width="100%"><!-- se agrega estilo css line en rgb-->

<h3>Integramos Docker al Project</h3>
<a>Vamos a usar un archivo de configuracion de docker compose con esto se va descargar una version de mysql de docker hub </a>

## Docker

<a>creamos un archivo en la carpeta local API-REST-CON-NEST.JS </a>

<h3>Nombre archivo: docker-compose.yml</h3>

```bash
version: "3.8"
services:
  mysql:
    image: mysql:8.0
    container_name: mysql_db
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: db_crud
      MYSQL_USER: user_crud
      MYSQL_PASSWORD: root
    volumes:
      - ./mysql:/var/lib/mysql
    ports:
      - "3307:3306"

```

<h3>En la Terminar de Visual Code ponemos el siguiente comando para levantar el contenedo de docker y se nos descargara la imagen de docker:image: mysql:8.0</h3>
<a>Debemos tener el docker activo o la app abierta de docker desktop </a>

```bash
 docker compose up -d
```

<h3>Ejecutado el codigo en la terminar en dockerDesktop se tendra que ver asi : </h3>

![image](https://github.com/BrandonGS22b/Front/blob/main/holaMundoConNest/dockerdekstop.png)

<h3>Vamos a eliminar los siguientes controladores : app.controller.spec.ts , app.controller.ts , app.service.ts </h3>

![image](https://github.com/BrandonGS22b/Front/blob/main/holaMundoConNest/controladores.png)

<img src="https://i.imgur.com/dBaSKWF.gif" height="20" width="100%"><!-- se agrega estilo css line en rgb-->
<h3>Vamos a Generar todo el crud: </h3>
<a>el archivo "app.module.ts" lo tenemos que dejar vacido de la siguiente manera para aplicar el comando desde la terminal y nos genere todo automaticamente</a>

![image](https://github.com/BrandonGS22b/Front/blob/main/holaMundoConNest/app.modules.png)

<h4>Aplicamos el comando</h4>
```bash
 nest g res cats --no-spec
```
<h4>PASO 1:REST API</h4>

![image](https://github.com/BrandonGS22b/Front/blob/main/holaMundoConNest/comando.png)

<h4>PASO 2:YES</h4>
<a>Como podemos ver se nos creo la carpeta de cats y se importo= imports: [CatsModule] , Se nos generara todo el Crud</a>

![image](https://github.com/BrandonGS22b/Front/blob/main/holaMundoConNest/cats.png)

<h3>en el archivo main.ts tenemos que poner lo siguiente para levantar el proyecto inicial</h3>

```bash

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api/v1");//esta es la url para validarla en el postman la ruta
  //para validar en el postman
  //levantamos el proyecto con el comando yarn run start
  //luego en el postman ponemos en la url http://localhost:3000/api/v1/cats
  //y en el body ponemos un json con el nombre y la edad de la mascota

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  await app.listen(3000);
}
bootstrap();

```
<h4>Lo probamos en postman</h4>

![image](https://github.com/BrandonGS22b/Front/blob/main/holaMundoConNest/postmanpruebainicial.png)

<h3>Instalamos las dependencia para integrar base de datos sql y no sql</h3>

```bash
yarn add @nestjs/typeorm typeorm mysql2
```