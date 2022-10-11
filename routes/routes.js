//Importaciones
const { Router } = require("express");
const { getEstudiantes, postEstudiante, getEstudianteByCedula, putEstudiante, deleteEstudiante } = require("../controllers/estudiantes.contoller");
const { getNotas, getNotasByCedula, postNotas, putNotas, deleteNotas } = require("../controllers/notas.controllers");
const router = Router();

const URLV1 = "/v1";

//Rutas Notas V1
router.get(URLV1 + "/notas", getNotas);
router.get(URLV1 + "/notas/:cedula", getNotasByCedula);
router.post(URLV1 + "/notas", postNotas);
router.put(URLV1 + "/notas", putNotas);
router.delete(URLV1 + "/notas/:id", deleteNotas);


//Rutas Estudiantes V1
router.get(URLV1 + "/estudiantes", getEstudiantes);
router.get(URLV1 + "/estudiantes/:cedula", getEstudianteByCedula);
router.post(URLV1 + "/estudiantes", postEstudiante);
router.put(URLV1 + "/estudiantes", putEstudiante);
router.delete(URLV1 + "/estudiantes/:cedula", deleteEstudiante);

//Exportaciones
module.exports = router;