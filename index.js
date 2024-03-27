const express = require("express");
const cors = require("cors");


const authRoutes = require("./routes/auth.js");

const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/auth' , authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
