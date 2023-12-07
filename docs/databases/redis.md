Esta guía te ayudará a desplegar una imagen de Redis en Docker y usarla.

## Prerrequisitos

- Docker instalado en tu máquina.

## Pasos

1. **Descarga la imagen de Redis desde Docker Hub**
```bash
docker pull redis
```
2. **Crear una network de Docker**
```bash
docker network create my-network
```
3. **Crea un contenedor con la imagen descargada**
```bash
docker run --name my-redis --network my-network -d -p 6379:6379 redis
```
Este comando iniciará un contenedor de Redis llamado 'my-redis' y lo expondrá en el puerto 6379.

4. **Conéctate al contenedor de Redis**
```bash
docker exec -it my-redis redis-cli
```
Este comando te permitirá usar la CLI de Redis para que puedas interactuar con la base de datos.

## CRUD
A continuación se muestra cómo realizar operaciones CRUD en Redis.
1. **Crear (Create)**

Para crear un nuevo usuario, puedes usar el comando `set`. Aquí está un ejemplo:

```bash
set user:1 "Juan"
```

2. **Leer (Read)**
Para leer los datos de los usuarios, puedes usar el comando ```get```. Aquí está un ejemplo:

```bash
get user:1
```

3. **Actualizar(Update)**
Para actualizar los datos de un usuario, puedes usar el comando ```set```. Aquí está un ejemplo:

```bash
set user:1 "Pedro"
```
4. **Eliminar (Delete)** 
Para eliminar un usuario, puedes usar el comando ```del```. Aquí está un ejemplo:


```bash
del user:1
```