# Proyecto de Microservicios

**Integrantes:** Alexander Guacán, Mateo Barriga.

**Curso:** Desarrollo web avanzado

**NRC:** 14956

**Github:** <https://github.com/M4t3B4rriga/Microservicios.git>

Este proyecto sirve como ejemplo de la creacion de dos microservicios que se comunican entre sí.

## Microservicio 1

El Microservicio 1 se encuentra en la carpeta `microservicio1` y se ejecuta en el puerto 3001. Este microservicio recibe solicitudes HTTP y las procesa.

El archivo principal es `servicio.js`, que inicia un servidor Express y define varias rutas. Este microservicio retorna un listado de estudiantes con la siguiente información.

- Nombre
- Apellido
- Cédula
- Materias a las que está inscrito

## Microservicio 2

El Microservicio 2 se encuentra en la carpeta `microservicio2` y se ejecuta en el puerto 3002. Este microservicio recibe solicitudes del Microservicio 1 y devuelve respuestas.

Al igual que el Microservicio 1, el archivo principal es `servicio.js`. En este microservicio se aloja la información de las materias (nombre, id).

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en tu terminal en la raiz de este proyecto y en la carpeta `./cliente-microservicios`:

```bash
npm i
```

## Ejecución

Para iniciar los microservicios, navega a sus respectivas carpetas y ejecuta el siguiente comando en tu terminal en la raíz de este proyecto:

```bash
npm run start
```

Para inicializar el cliente ejecute el siguiente comando en la carpeta `./cliente-microservicios`.

```bash
npm run dev
```

## Dependencias

Este proyecto utiliza las siguientes dependencias:

- `express`: Un marco de aplicación web para Node.js
- `axios`: Un cliente HTTP basado en promesas para el navegador y Node.js
- `nodemon`: Una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios de archivo en el directorio.
- `concurrently`: Una herramienta para ejecutar múltiples comandos npm concurrentemente. Es útil cuando se tienen múltiples servidores o tareas que se quieren ejecutar al mismo tiempo.

## Licencia

Este proyecto está licenciado bajo la licencia MIT
