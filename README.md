# Backend manage-tool

En este repositorio encontraras el backend de un modulo para el sistema de registro de dotación de una empresa.

## Que endpoints encontraras

- **signup**: Permite el registro de usuarios administradores
- **login**: Permite el acceso a los usuarios administradores
- **createUser**: Permite la creación de usurios no administradores
- **assignDevice**: Permite asignar un dispositivo a un usuario
- **getUsers**: Devuelve todos los usuarios en el sistema con sus dispositivos asignados
- **getDevices**: Devuelve todos los dispositivos en el sistema con sus propietarios

## Como ejecutarlo

Debes tener instalado Postgres y configurar la variable de entorno como se muestra en el archivo `.env_example`

1. Clona el repositorio
2. Instala las dependecias `npm i`
3. Ejecuta `npx prisma migrate dev` para crear las tablas de la base de datos
4. Ejecuta `node src/index.js` desde la raiz del proyecto

## Con que esta hecho

Se uso NodeJS, Graphql y Prisma para la creación de este proyecto.

# Nota:

Aunque puedes probar los endpoints desde el panel de GrapqhQL, existe un proyecto de Front con el que puedes integrarlo [acá](https://github.com/TonyLuque/front_manage_tool)

# Nota 2:

En el proyecto se simula la consulta de una API externa para verificar que el serial del dispositivo exista o este registrado.
Esto se hace en el archivo `fakeApi.js`

Los seriales que se pueden registrar son:

- "1234561"

- "1234562"

- "1234563"

- "1234564"

- "1234565"

- "1234566"

- "1234567"

- "1234568"

- "1234569"

- "1234560"

- "1234571"
