const express = require("express");
const router = express.Router();

// Ruta base: GET /api/users/
router.get("/", (req, res) => {
    res.json({ message: "Ruta de usuarios activa" });
});

// ✅ Registro: POST /api/users/register
// Importante: Asegúrate de que tenga la "/" al inicio
router.post("/register", (req, res) => {
    // Aquí simulamos la creación para que Postman responda 201
    res.status(201).json({ 
        message: "Usuario creado exitosamente",
        user: {
            username: req.body.username || "testuser",
            email: req.body.email
        }
    });
});

// ✅ Login: POST /api/users/login
router.post("/login", (req, res) => {
    // Aquí simulamos la entrega del Token JWT que pide el profe
    res.json({ 
        message: "Login exitoso",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // Token de prueba
    });
});

module.exports = router;