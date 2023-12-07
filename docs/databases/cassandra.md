Esta guía te ayudará a desplegar una imagen de Cassandra en Docker y usarla.

## Prerrequisitos

- Docker instalado en tu máquina.

## Pasos

1. **Descarga la imagen de Cassandra desde Docker Hub**
```bash
docker pull cassandra

```
2. **Crea un contenedor con la imagen descargada**
```bash
docker run --name my-cassandra -d -p 7000:7000 cassandra
```
Este comando iniciará un contenedor de Redis llamado 'my-cassandra' y lo expondrá en el puerto 7000.

3. **Conéctate al contenedor de Casssandra**
```bash
docker exec -it my-redis cqlsh
```
Este comando te permitirá usar la bash de Cassandra para que puedas interactuar con la base de datos.

Para esto vamos a necesitar crear un **Keyspace** y acceder a este
```bash
CREATE KEYSPACE my_keyspace WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 3};
```
```bash
USE my_keyspace;
```
## CRUD
A continuación se muestra cómo realizar operaciones CRUD en cassandra.
1. **Crear (Create)**

Primero, necesitamos crear una tabla para almacenar nuestros usuarios. Aquí está un ejemplo:
```bash
CREATE TABLE users (
    name text PRIMARY KEY,
    age int,
    email text
);
```
Para crear un nuevo usuario, puedes usar el comando ```INSERT```. Aquí está un ejemplo:
```bash
INSERT INTO users (name, age, email) VALUES ('Juan', 18, 'juan@example.com');
```
2. **Leer (Read)**
Para leer los datos de los usuarios, puedes usar el comando ```SELECT```. Aquí está un ejemplo:

```bash
SELECT * FROM users WHERE name = 'Juan';
```

3. **Actualizar(Update)**
Para actualizar los datos de un usuario, puedes usar el comando ```UPDATE```. Aquí está un ejemplo:

```bash
UPDATE users SET email = 'nuevojuan@example.com' WHERE name = 'Juan';
```
4. **Eliminar (Delete)** 
Para eliminar un usuario, puedes usar el comando ```DELETE```. Aquí está un ejemplo:

```bash
DELETE FROM users WHERE name = 'Juan';
```