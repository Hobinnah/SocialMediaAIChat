import dotenv from "dotenv";
import express from "express";
import { configViewEngine } from "./config/viewEngine.js";
import { initWebRoutes } from "./routes/web.js";
import bodyParser from "body-parser";

let app = express();

// config view engine
configViewEngine(app);
dotenv.config();

//use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`) ;
});