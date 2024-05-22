require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// ------------------------- Database_Connection
const connectToDb = require("./config/connectToDb");
connectToDb();

const Client = require("./models/client");
const Opportunity = require("./models/opportunity");
const User = require("./models/user");

const clientController = require("./controllers/clientsController.js");
const opportunityController = require("./controllers/opportunitiesController.js");
const userController = require("./controllers/usersController.js");

const requireAuth = require("./middleware/requireAuth");

//----------------------------CRUD routes

app.get("/client", clientController.allClient);
app.get("/client/:id", clientController.getClient);
app.post("/client", clientController.addClient);
app.put("/client/:id", clientController.updateClient);
app.delete("/client/:id", clientController.deleteClient);

app.get("/opportunity", opportunityController.allOpportunity);
app.get("/opportunity/:id", opportunityController.getOpportunity);
app.post("/opportunity", opportunityController.addOpportunity);
app.put("/opportunity/:id", opportunityController.updateOpportunity);
app.delete("/opportunity/:id", opportunityController.deleteOpportunity);

app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.post("/logout", userController.logout);
app.get("/check-auth", requireAuth, userController.checkAuth);

app.listen(PORT, () => {
  console.log(`Express Server: Running - Port: ${PORT}`);
});
