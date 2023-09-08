const { Router } = require("express");
const router = Router();

const { validarCampos } = require("../middlewares/validar-campos");
const { check } = require("express-validator");

const { isDate } = require("../helpers/isDate");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

// Validación de todas las rutas
router.use(validarJWT);

// Obtener eventos
router.get(
  "/",

  getEventos
);

// Crear eventos
router.post(
  "/",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

// Actualizar eventos
router.put("/:id", actualizarEvento);

// Borrar eventos
router.delete("/:id", eliminarEvento);

module.exports = router;
