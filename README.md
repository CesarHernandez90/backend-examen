## Preparación
Crear un archivo .env en la raiz del proyecto y declarar las credenciales mongo que fueron proporcionadas en el documento para el desarrollo de este examen.

- MONGODB_URI=''

Si lo desea puede configurar el puerto que usará el Backend para trabajar. Sin embargo, no olvide modificar dicho puerto en el archívo .env del Frontend

- PORT=5000

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

- Editar un producto: 

  - /editarUnProducto/{id}

## License

  Nest is [MIT licensed](LICENSE).
