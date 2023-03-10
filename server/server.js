import express from "express";
import router from "./routes.js"
import bodyParser from "body-parser";
const app = express();
// as we are getting data in json we need to parse it so these statements are used 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

// we are telling app about router 
app.use(router);

app.get('/', (req, res) => {
     res.send("hello i am from server!");
})



app.listen(PORT, (req, res) => {
     console.log(`listening at port no ${PORT}`);
})