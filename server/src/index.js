const express = require("express");
const mysql = require("mysql");
const jwl = require("jwl");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json()); // Aquí está la corrección

// conexion a la base de datos

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
  } else {
    console.log("the conexion is true");
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM usuarios WHERE Usuario = ? AND Clave = ?";

  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error al ejecutar la consulta");
    } else {
      res.json(result);
    }
  });
});

app.listen(3000, () => console.log(`Escuchando en el puerto ${3000}....`)); // También corregí este console.log
