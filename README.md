# 📌 Sistema de Gestión Veterinaria

Este proyecto es una aplicación Full-Stack desarrollada como trabajo de 2º DAM, consiste en un CRUD con spring boot sobre una clinica veterinaria, el frontend esta desarrollado con Angular.

## 🚀 Tecnologías Utilizadas

*   **Frontend / Interfaz:** Angular
*   **Backend / Base de Datos:** Spring Boot y MongoDB
*   **Herramientas / Arquitectura:** Arquitectura organizada dividida en capas

## ✨ Características Principales

*   Alta de mascotas en el sistema
*   Eliminacion de mascotas del sistema
*   Modificacion de mascotas en el sistema
*   Interfaz intuitiva con todas las mascotas y su información

## 🛠️ Instalación y Ejecución local

### Requisitos Previos

Antes de arrancar la aplicación, asegúrate de tener instalado lo siguiente en tu máquina:

1. **Java Development Kit (JDK 23)** o superior.
2. **Node.js** (Versión 18 o superior) junto con `npm`.
3. **MongoDB** corriendo en local (Puerto por defecto: `27017`).

Sigue estos pasos para probar el proyecto en tu entorno local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/pablo-navia5/PacmanJava.git
   ```
2. Asegúrate de que tu servicio de MongoDB está activo. Por defecto, la aplicación buscará la base de datos llamada veterinario en la URL `mongodb://localhost:27017/veterinario`.
3. Abre el proyecto de backend y ejecuta el archivo `BackendAplication`, una vez ejecutado el servidor queda activo y escuchando en `http://localhost:8080`
4. Abre una terminal en la carpeta raíz del frontend y ejecuta los siguientes comandos:
``` bash
# 1. Instalar todas las dependencias del proyecto
npm install

# 2. Levantar el servidor de desarrollo de Angular
npm run start
```
5. Una vez que termine de compilar, abre tu navegador web y entra en: `http://localhost:4200`

## 👤 Autor
*   Pablo Navia - Desarrollador de aplicaciones multiplataforma.
*   [Linkedin](https://www.linkedin.com/in/pablo-navia5) 
