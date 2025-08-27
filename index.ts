import express, {Express } from "express"
import dotenv from "dotenv"
import clientRoutes from "./routes/client/index.router";

dotenv.config();

const app : Express = express();
const port : String | number =  process.env.PORT || 3306;

app.set("views", "./views")
app.set("view engine","pug");


app.use(express.static("public"))

//client Route
clientRoutes(app)

app.listen(port ,()=>{
  console.log(`App listening on port ${port}`)
})