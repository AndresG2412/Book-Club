# Acerca del Proyecto Book Club (Libreria Online)

Proyecto sencillo con CRUD de usuarios inicial verificado con ReactHook-Form, con base de datos en MySQL, a la vez que se pueden subir libros con su CRUD aparte, sus propias rutas y de mas añadidos y toques personales

# Instalacion

## los pasos para ejecutar este proyecto son:
### Descargar y descomprimir .zip

### abrir VS Code, la carpeta descomprimida del proyecto y ubicarse en cliente mientras sigues los siguientes pasos:
* > cd cliente
* > npm i
* > npm run dev

* abrir una segunda terminal y ubicarse en servidor mientras sigues los siguientes pasos:
> cd servidor
> npm i
> npm i nodemon
> npm run dev

* ahora se debe crear la base de datos y las tablas en MySQL
> CREATE DATABASE usuarios_bc;
> USE usuarios_bc;
> CREATE TABLE clientes (id AUTO_INCREMENT PRYMARY KEY, nombre VARCHAR(100) NOT_NULL, correo VARCHAR(100) NOT_NULL, contraseña VARCHAR(25) NOT_NULL, edad INT NOT_NULL)
> CREATE TABLE libros (id AUTO_INCREMENT PRYMARY KEY, titulo VARCHAR(100) NOT_NULL, autor VARCHAR(100) NOT_NULL, genero VARCHAR(50) NOT_NULL, link VARCHAR(300) NOT_NULL)

# Perfecto! una vez seguidos estos pasos deberia estar funcionando a la perfeccion, verificando y almacenando los datos correctamente, fue un placer...
