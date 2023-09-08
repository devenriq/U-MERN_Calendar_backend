const { Router } = require("express");
const router = Router();

const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");

// Validación de todas las rutas
router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

// Crear eventos
router.post("/", crearEvento);

// Actualizar eventos
router.put("/:id", actualizarEvento);

// Borrar eventos
router.delete("/:id", eliminarEvento);

module.exports = router;
