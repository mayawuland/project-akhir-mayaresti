const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;  // Ubah port disini

const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Import the routers
const routerPengaduan = require("./routerPengaduan");

// Use the routers
app.use("/pengaduan", routerPengaduan);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});