require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

// ------------------------- Database_Connection
const connectToDb = require("./config/connectToDb");
connectToDb();

app.listen(PORT, () => {
  console.log(`Express Server: Running - Port: ${PORT}`);
});
