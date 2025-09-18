const os = require('os');
const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const cors = require('cors');

function getLocalExternalIp() {
    const interfaces = os.networkInterfaces();

    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
}
const ip = getLocalExternalIp() || 'localhost';
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para suportar dados de formulários

// Rotas API (comente/descomente se tiver)
app.use('/api/usuarios', require('./routes/usuarios'));

// Servir React build
app.use(express.static(path.join(__dirname, "../client/dist")));

// React SPA fallback
app.get("*", (req, res) => {
    console.log("Rota SPA:", req.path);
    res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

app.listen(port, '0.0.0.0',() => {
    console.log(`[Express] Iniciado http://localhost:${port}`);
    console.log(`[Express] Iniciado http://${ip}:${port}`);
});
