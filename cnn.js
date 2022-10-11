const pgProimise = require("pg-promise");

const credenciales ={
    host: "dpg-ccqvhopgp3jm9a5sdou0-a.oregon-postgres.render.com",
    port: "5432",
    database: "notas_ejemplo",
    user:  "anthony",
    password: "dFv5lkjioYoPidO1tdoxAAB9VaAjMSxo",
    ssl: true
};

const credencialesLocales ={
    host: "localhost",
    port: "5432",
    database: "notas_ejemplo",
    user:  "postgres",
    password: "123"
};

const pgP = pgProimise({});
const db = pgP(credenciales);

exports.db = db;




