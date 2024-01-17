const express = require("express");
const mysql = require("mysql");
const jwl = require("jwl");
const cors = require("cors");
const app = express();

app.use(cors());
// Crear la conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login2",
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Conexión a la base de datos establecida");
});

app.post("/login", (req, res) => {
  const {value} = req.body;
  const query = "SELECT * FROM `usuarios` WHERE usuario = ? and clave = ?";
  console.log(value);

  db.query(query, value, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al ejecutar la consulta");
    } else if (result.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

app.listen(8080, console.log(`listing en el port ${8080}....`));
