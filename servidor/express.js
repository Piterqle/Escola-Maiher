const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use(express.json());

// Rotas API (comente/descomente se tiver)
app.use('/api/usuarios', require('./routes/usuarios'));

// Servir React build
app.use(express.static(path.join(__dirname, "../client/dist")));

// React SPA fallback
app.get("*", (req, res) => {
    console.log("Rota SPA:", req.path);
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
    console.log(`[Express] Iniciado http://localhost:${port}`);
});
