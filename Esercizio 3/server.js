// Importo express
import express from "express";

// Creo l'app express
const app = express();

// Imposto la porta
const PORT = 3000;

// Creo l'array delle città
const citta = [
    {
        nome: "Roma",
        regione: "Lazio",
        descrizione: "Capitale d'Italia"
    },
    {
        nome: "Milano",
        regione: "Lombardia",
        descrizione: "Famosa per il duomo di Milano"
    },
    {
        nome: "Firenze",
        regione: "Toscana",
        descrizione: " Città ricca d'arte"
    },
    {
        nome: "Napoli",
        regione: "Campania",
        descrizione: "Città famosa per la pizza e il mare"
    }
];

// Creo rotta home
app.get("/", (req, res) => {
    res.send("Benvenuto nella guida turistica dell'Italia");
});

// Creo rotta info
app.get("/info", (req, res) => {
    res.type(html).send("<h1>Guida turistica dell'Italia</h1> <p>Scopri le principali località italiane</p> <p>Cerca una città per ottenere maggiori descrizioni</p>");
});

// Creo rotta citta
app.get("/citta", (req, res) => {
    res.json(citta);
});

// Creo rotta ricerca 
app.get("/ricerca", (req, res) => {
    const nomeCitta = req.query.citta;
    const cittaTrovata = citta.find((citta) => {
        return citta.nome.toLowerCase() === nomeCitta.toLowerCase();
    });
});

if (cittaTrovata) {
    res.json(cittaTrovata);
} else {
    res.status(404).send("Città non trovata");
};

// Avvio il server
app.listen(PORT, () => {
    console.log("Server avviato su http://localhost:" + PORT);

});

