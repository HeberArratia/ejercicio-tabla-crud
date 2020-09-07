# Test builder.cl 🛠

## Ejercicio de tabla crud

### Crear una tabla CRUD con vue y vuex.

- Utilizar json-server para la api. https://github.com/typicode/json-server con el archivo db.json de este repositorio.
Para obtener los datos debes hacer una llamada a la api.

Ejemplo:

| id     | Nombre        | Apellido    | Email                  |
| -------|---------------| ------------|------------------------|
| 1      |Earlie         |Upstell      |eupstell0@aboutads.info |
| 2      |Neely          |Giovannini   |ngiovannini1@naver.com  |
| 3      |Adelice        |Driver       |adriver2@europa.eu      |

- La idea es que puedas agregar una fila con esos campos,
editarlos y eliminarlos.
- Los datos deben estar en una store con vuex.
- Debe tener una paginación de 10 items por página (usar páginacion del json-server).

- Aplica tu propio estilo en css o algún otro preprocesador como sass o less si prefieres.
- No utilizar jquery.

## Instruciones despliegue

### Instalar depedencias
```
npm install
```

### Iniciar API
```
json-server db.json
```

### Iniciar para dearrollo
```
npm run serve
```

### Compilar y minificar para producción
```
npm run build
```

Desarrollado por @HeberArratia para builder.cl 🎉

