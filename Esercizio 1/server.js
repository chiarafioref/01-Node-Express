// Importo express
import express from "express";

// Creo l'app express (nasce il server)
const app = express();

// Imposto la porta 3000
const PORT = 3000;

// Creo la rotta sulla home e invio il testo al browser
app.get("/", (req, res) => {
    res.send("Benvenuto nella mia pagina!");
});

// Avvio
app.listen(PORT, () => {
    console.log("Server avviato su http://localhost:" + PORT);
});

