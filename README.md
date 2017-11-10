# nodeRestAPI
RESTful API con NodeJS MySQL | @elquimeras

## Instalación
Primero que nada clona el repositorio o descarga en tu maquina:

    git clone https://github.com/elquimeras/nodeRestAPI.git

Luego debes entrar a la carpeta recien creada:

    cd nodeRest

Una vez dentro instalar las dependencias utilizando el comando:

    npm install

## Configuración de la base de datos
En este caso hemos utilizado una base de datos MySQL la cual debe ser creada en tu equipo con el nombre nodeRest o el nombre que gustes, una vez creada, importa el archivo Users.sql que se encuentra en la carpeta schemas.

Una vez creada la base de datos e importados los datos, verifica en el archivo dba.js los datos de la conexión


        host: 'localhost',
        user: 'root',
        password : '',
        database:'nodeRest', 
        port : 3306

Si se cambio algún parametro debe actualizarse en este archivo.

## Ejecutar la app Node
Una vez completada la configuración no queda más que ejecutar la APP, para ello usa el comando:

    node app.js

Una vez iniciada el API debe estar corriendo en 

    http://localhost:8080

Si se cambio el puerto debes cambiar la ruta según el puerto establecido al igual que el nombre del host

## Metodos del API
Tenemos en esta API 2 puntos de acceso (endpoints) funcionales

Usuarios

    /users
    - Método GET:
        Lista todos los usuarios guardados en la tabla mock_data.
    - Método POST:
        Agrega un nuevo usuario: se deben enviar los parametros:
            - first_name
            - last_name
            - email
            - username
            - password
    -Método DELETE:
        Eliminar un usuario de la base de datos, se debe enviar el id del usuario a eliminar.
    - Método PUT:
        Actualizar los datos de un usuario, se deben todos los datos del usuario incluyendo el id del usuario a modificar:
            - first_name
            - last_name
            - email
            - username
            - password
            - id

Autenticación

    /login
    - Método POST:
        Autenticar usuario: se deben enviar los siguientes parametros:
            - username
            - password
        Retorna un objeto JSON con la respuesta true o false y los datos del usuario si fue satisfactoria la autenticación

Cualquier otra ruta que no sea parte de las listadas anteriormente dará un mensaje de error en formato JSON.

# Otras consideraciones

- La autenticación de usuarios puede mejorarse a través del uso de tokens encriptados para mayor seguridad de los datos transmitidos.
- Podría mejorarse haciendo uso de comunicaciones basadas en sockets para mejorar la eficiencia en los procesos y actualización de los datos en los terminales.