import express from "express";
import mongoose from "mongoose"
import cors from "cors"
import morgan from "morgan"
import userRouter from "./routes/user.js"
import tourRouter from "./routes/tour.js"
const app = express();
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter) //http://localhost:5000/users/signup
app.use("/tour", tourRouter)

const MONGODB_URL = "mongodb+srv://akash9753Reels:tExo3v5ROD1nUukE@cluster0.7cejqbb.mongodb.net/Reels_DB?retryWrites=true&w=majority"
// const MONGODB_URL = "mongodb://localhost:27017/tour_db"
// tExo3v5ROD1nUukE
const port = 5000;

mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URL).then(()=>{
    app.listen(port,()=>{
        console.log(`server running on port ${port}`);
    })
}).catch((error)=> console.log(`${error} did not connect`))

