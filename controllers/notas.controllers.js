const { request, response } = require("express");
const { db } = require("../cnn");


//Consultas
const getNotas = async (req, res) => {

    const consulta = "SELECT * from notas;"
    const response = await db.query(consulta)
    res.status(200).json(response)
};

const getNotasByCedula = async (req, res) => {
    const consulta = "SELECT * FROM notas WHERE not_est_cedula LIKE $1;"
    try {

        const cedula = req.params.cedula
        const response = await db.one(consulta, [cedula])
        res.status(200).json(response)

    } catch (e) {
        res.status(400).json({
            code: e.code,
            message: "No se ha encontrado notas de un estudiante con esta cédula("
            + req.params.cedula + ")"
        })
    }
};

const postNotas = async (req, res) => {

    const consulta = "INSERT INTO notas VALUES($1, $2, $3, $4, $5) RETURNING *;"
    try {
        
        const nota = req.body
        const response = await db.one(consulta,[nota.id, nota.cedula, nota.proyectos,
            nota.deberes, nota.examenes])
        res.status(201).json({
            message: "Notas ingresadas correctamente",
            body: response
        })

    } catch (e) {
        res.status(400).json({
            conde: e.code,
            message: e.message
        })
    }
   
};

const putNotas = async (req, res) => {

    const consulta = "UPDATE notas SET not_proyectos = $2, not_deberes = $3,"
    + "not_examenes = $4 WHERE not_id = $1 RETURNING *;"
    try {
        
        const notas = req.body
        const response = await db.one(consulta,[
            notas.id,
            notas.proyectos,
            notas.deberes,
            notas.examenes])
        res.status(201).json({
            message: "Notas actualizadas correctamente",
            body: response
        })

    } catch (e) {
        res.status(400).json({
            conde: e.code,
            message: e.message
        })
    }
 
};

const deleteNotas = async (req, res) => {
    const consulta = "DELETE FROM notas WHERE not_id = $1;"
    try {

        const id = req.params.id
        const response = await db.query(consulta, [id])
        res.status(200).json({
            message: "Las notas se eliminaron correctamente."
        })

    } catch (e) {
        res.status(400).json({
            code: e.code,
            message: "No se ha encontrado el siguiente ID: "
            + req.params.id + "."
        })
    }
};

module.exports = {
    getNotas, getNotasByCedula, postNotas,
    putNotas, deleteNotas
}




