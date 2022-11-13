const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 4000;

mongoose.connect(
  `mongodb+srv://9753akash:9753akash@cluster0.w5uqt.mongodb.net/userDatabase?retryWrites=true&w=majority`
);

const app = express();
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (request, response) => {
  response.send("<h1>Welcome to the Angular material backend api</h1>");
});

const routerUser = require("./routes/user");

app.use("/user", routerUser);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
