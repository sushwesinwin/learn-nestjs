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

