const express = require("express");
const router = express.Router();

//Ruta temporal (mientras desarrollamos)
router.get("/",(req, res) => {
    res.json({message:"Ruta de usuarios -En desarrollo"})
});

//Registr temporal
router.post("register",(req, res) =>{
    res.json({message: "Registro de usuarios - En desarrollo"});
});

//Login temporal
router.post("/login",(req, res)=>{
    res.json({message:"Login de usuarios- En desarrollo"});
});

module.exports = router;