import express from "express";
import path from "path";

import routes from "./routes.js";
import db from "./src/db.js";


const __dirname = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]):/, '$1:')); // Obter o diretório atual

console.log(__dirname);

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src/views/index.html'));
});


app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(PORT, () => console.log("Servidor iniciado na porta 3000"));
