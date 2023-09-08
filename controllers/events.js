const { response } = require("express");

const { generarJWT } = require("../helpers/jwt");

const getEventos = async (req, res = response) => {
  try {
    return res.status(200).json({
      ok: true,
      msg: "Obtener eventos",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      ok: false,
      msg: "Hubo un problema",
    });
  }
};

const crearEvento = async (req, res = response) => {
  try {
    return res.status(200).json({
      ok: true,
      msg: "Crear evento",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      ok: false,
      msg: "Hubo un problema",
    });
  }
};

const actualizarEvento = async (req, res = response) => {
  try {
    return res.status(200).json({
      ok: true,
      msg: "Actualizar evento",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      ok: false,
      msg: "Hubo un problema",
    });
  }
};

const eliminarEvento = async (req, res = response) => {
  try {
    return res.status(200).json({
      ok: true,
      msg: "Eliminar evento",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      ok: false,
      msg: "Hubo un problema",
    });
  }
};

module.exports = {
  crearEvento,
  getEventos,
  actualizarEvento,
  eliminarEvento,
};
