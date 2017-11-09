# nodeRestAPI
RESTful API con NodeJS MySQL | @elquimeras

## Instalación
Clona el repositorio en tu maquina:

    git clone https://github.com/elquimeras/nodeRestAPI.git

Entra en la carpeta creada:

    cd nodeRest

Instala las dependencias con:

    npm install

## Configuración de la base de datos
Debes crear una base de datos MYSQL en tu equipo con el nombre nodeRest o el nombre que gustes e importar users.sql a la misma.

app.js

        host: 'localhost',
        user: 'root',
        password : '',
        port : 3306, //port mysql
        database:'nodeRest'	
	
## Ejecutar la app Node
Usa el comando

    node app.js

## EndPoints 
http://localhost:8080/users
http://localhost:8080/login