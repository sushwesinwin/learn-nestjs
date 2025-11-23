### Install Nest CLI
`npm i -g @nestjs/cli`
`nest new project-name`

### Run the app
`cd project-name`
`npm run start:dev`

### Controllers
- Responsible for handling incoming requests and returning responses to the client.

`nest g co cats`  

## Routes Parameters
- Routes with parameters should be declared after any static paths.
- Import Param from the @nestjs/common package.
- In NestJS, route params always come as string by default.

### Services
- Services are used to implement the business logic of the application.
- Services are injected into controllers.
- Services are singletons.
- Services are created using the @Injectable() decorator.

`nest g s cats`

## Inject Service to Controller
- The CatsService is injected through the class constructor. 
- The private keyword, is a shorthand allows to both declare and initialize the variable at the same time.

## Interfaces
- Interfaces are used to define the shape of an object.

## Pipes
- Pipes are used to transform or validate the data.

## ParseIntPipe
- ParseIntPipe is a built-in pipe that transforms a value to a number.