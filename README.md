## Preparación
Crear un archivo .env en la raiz del proyecto y declarar el puerto y las credenciales mongo.

- PORT=5000
- MONGODB_URI=''

## Instalación
Antes de iniciar, se deben instalar las dependencias

```bash
$ npm install
```

## Correr la aplicación

```bash
$ npm run start
```

## Rutas
- Swagger: 

  - /api/docs

- Todos los productos: 

  - /listarTodosLosProductos

- Crear un producto: 
  
  - /crearUnProducto

- Eliminar un producto: 

  - /eliminarUnProducto/{id}

## License

  Nest is [MIT licensed](LICENSE).
