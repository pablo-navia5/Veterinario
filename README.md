# Sistema de Gestión Veterinaria

Este proyecto es una aplicación Full-Stack desarrollada como trabajo de **2º DAM**, consiste en un CRUD con spring boot sobre una clinica veterinaria, el frontend esta desarrollado con Angular. 

---

## Requisitos Previos

Antes de arrancar la aplicación, asegúrate de tener instalado lo siguiente en tu máquina:

1. **Java Development Kit (JDK 23)** o superior.
2. **Node.js** (Versión 18 o superior) junto con `npm`.
3. **MongoDB** corriendo en local (Puerto por defecto: `27017`).

---

## Instalación y Puesta en Marcha

Sigue estos pasos en orden para ejecutar todo el sistema en tu entorno local:

### 1. Clonar el Repositorio
```bash
git clone https://github.com/pablo-navia5/Veterinario.git
cd Veterinario
```

### 2. Base de Datos (mongoDB)
Asegúrate de que tu servicio de MongoDB está activo. Por defecto, la aplicación buscará la base de datos llamada veterinario en la URL `mongodb://localhost:27017/veterinario`.

### 3. Servidor Backend (Spring Boot)
Abre el proyecto de backend y ejecuta el archivo `BackendAplication`, una vez ejecutado el servidor queda activo y escuchando en `http://localhost:8080`

### 4. Servidor Frontend (Angular)
Abre una terminal en la carpeta raíz del frontend y ejecuta los siguientes comandos:
``` bash
# 1. Instalar todas las dependencias del proyecto
npm install

# 2. Levantar el servidor de desarrollo de Angular
npm run start
```

Una vez que termine de compilar, abre tu navegador web y entra en: `http://localhost:4200`
