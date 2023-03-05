const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config({ path: "db_connection" });
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

mongoose.connect(process.env.db_connection, {
  useNewUrlParser: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

const descriptionRouter = require("./routes/citydesc");

app.use("/description", descriptionRouter);

app.get("/", (req, res) => res.send("Description Page !"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
