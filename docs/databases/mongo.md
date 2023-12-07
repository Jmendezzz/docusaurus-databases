
Esta guía te ayudará a desplegar una imagen de MongoDB en Docker y usarla y crear un CRUD.

## Prerrequisitos

- Docker instalado en tu máquina.

## Pasos
Video Ilustrativo:
[![asciicast](https://asciinema.org/a/pWkqHfJ3zp7gz2WCQ2bG0R2Ri.svg)](https://asciinema.org/a/pWkqHfJ3zp7gz2WCQ2bG0R2Ri)


1. **Descarga la imagen de MongoDB desde Docker Hub**

```bash
docker pull mongo
```

2. **Crea un contenedor con la imagen descargada**
 
```bash
docker run --name my-mongodb -d -p 27017:27017 mongo
```
Este comando iniciará un contenedor de MongoDB llamado 'my-mongodb' y lo expondrá en el puerto 27017.

3. **Conéctate al contenedor de MongoDB**
```bash
docker exec -it my-mongodb mongosh
```
Este comando te permitira usar el bash de mongo para que puedas interactuar con las colecciones.

## CRUD
A continuación se muestra cómo realizar operaciones CRUD en MongoDB.

Video ilustrativo
[![asciicast](https://asciinema.org/a/JWv5aseZQAc2uCYatKkz5gvWn.svg)](https://asciinema.org/a/JWv5aseZQAc2uCYatKkz5gvWn)

1. **Crear (Create)**

Para crear un nuevo usuario, puedes usar el comando `insert`. Aquí está un ejemplo:

```bash
db.users.insert({ name: "Juan", age: 30, email: "juan@example.com" })
```

2. **Leer (Read)**
Para leer los datos de los usuarios, puedes usar el comando ```find```. Aquí está un ejemplo:

```bash
db.users.find({ name: "Juan"})
```

3. **Actualizar(Update)**
Para actualizar los datos de un usuario, puedes usar el comando ```update```. Aquí está un ejemplo:

```bash
db.users.update({ name: "Juan" }, { $set: { email: "nuevojuan@example.com" } })```
```
4. **Eliminar (Delete)** 
Para eliminar un usuario, puedes usar el comando ```remove```. Aquí está un ejemplo:


```bash
db.users.remove({ name: "Juan" })
```