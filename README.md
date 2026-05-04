# ENTREGABLES-DEL-PROYECTO-

Descripción
Este proyecto es una API RESTful robusta diseñada para gestionar el inventario y las operaciones de una tienda virtual. Permite administrar productos, categorías y usuarios mediante un sistema seguro de autenticación, facilitando la integración con aplicaciones frontend o móviles.

🛠 Tecnologías Utilizadas
Entorno de ejecución: Node.js

Framework de servidor: Express.js

Base de datos: MongoDB (NoSQL)

Modelado de datos: Mongoose

Seguridad: JSON Web Tokens (JWT) para autenticación y bcryptjs para el cifrado de contraseñas.

Contenerización: Docker y Docker Compose.

Otros: Dotenv (variables de entorno), CORS, Nodemon (desarrollo) y Postman (pruebas).

⚙️ Instrucciones de Instalación
Sigue estos pasos para ejecutar el proyecto localmente:

Clonar el repositorio:

Bash
git clone https://github.com/Donocuica/ENTREGABLES-DEL-PROYECTO-.git
cd senati-store-api
Instalar dependencias:

Bash
npm install
Configurar variables de entorno:
Crea un archivo .env en la raíz (ver sección de variables de entorno).

Iniciar el servidor:

Modo desarrollo: npm run dev

Modo producción: npm start

Uso con Docker (Opcional)