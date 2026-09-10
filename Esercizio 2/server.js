// Importo express
import express from "express";

// Creo l'app express (nasce il server)
const app = express();

// Imposto la porta 3000
const PORT = 3000;

// Creo l'array di libri
const libri = [
    {
        id: 1,
        titolo: "Il signore degli anelli",
        autore: "J. R. R. Tolkien"
    },
    {
        id: 2,
        titolo: "Harry Potter",
        autore: "J. K. Rowling"
    },
    {
        id: 3,
        titolo: "1984",
        autore: "George Orwell"
    }
];

// Creo la rotta sulla home
app.get("/", (req, res) => {
    res.send("Benvenuto nella mia libreria!");
});

// Creo la rotta sulla pagina HTML
app.get("/info", (req, res) => {
    res.type("html").send("<h1>Benvenuto nella mia libreria</h1> <p>Consulta liberamente tutti i libri presenti</p> <p>Troverai diversi generi.</p>");
});

// Creo la rotta sulla pagina dei libri in formato JSON
app.get("/libri", (req, res) => {
    res.json(libri);
});

// Creo la rotta per la ricerca dei libri
app.get("/cerca", (req, res) => {
    const titoloCercato = req.query.titolo;
    const libro = libri.find((libro) => {
        return libro.titolo.toLowerCase() === titoloCercato.toLowerCase();
    });
    
    if (libro) {
        res.json(libro);
    } else {
        res.status(404).send("Libro non ancora presente");
    };
});

// Avvio il server
app.listen(PORT, () => {
    console.log("Server avviato su http://localhost:" + PORT);
});