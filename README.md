# Backend manage-tool

En este repositorio encontraras el backend de un modulo para el sistema de registro de dotación de una empresa.

## Que endpoints encontraras

- **signup**: Permite el registro de usuarios administradores
- **login**: Permite el acceso a los usuarios administradores
- **createUser**: Permite la creación de usurios no administradores
- **assignDevice**: Permite asignar un dispositivo a un usuario
- **getUsers**: Devuelve todos los usuarios en el sistema con sus dispositivos asignados
- **getDevices**: Devulve todos los dispositivos en el sistema con sus propietarios

## Como ejecutarlo

Debes tener instalado Postgres y configurar la variable de entorno como se muestra en el archivo `.env_example`

1. Clona el repositorio
2. Instala las dependecias `npm i`
3. Ejecuta `npx prisma migrate dev` para crear las tablas de la base de datos
4. Ejecuta `node src/index.js` desde la raiz del proyecto

## Con que esta hecho

Se uso NodeJS, Graphql y Prisma para la creación de este proyecto.
