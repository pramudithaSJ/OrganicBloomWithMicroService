const express = require("express"); //using the json file dependencies(node_modules)
const mongoose = require("mongoose");
const bodyParser = require('body-parser'); 
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
const morgan = require("morgan")

//declare a constant variable
const app = express();
//require  for read variables(MONGODB_URL)
require("dotenv").config();

app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(morgan("dev"));

//database link
const URL = "mongodb+srv://kushan:J8EXMSRNpPTSU0l4@cluster0.mbzff4m.mongodb.net/test"
// 

const PORT = 8020;
//create mongo configurations

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//user
const authRouter = require("./routes/userRoute");
app.use("/user",authRouter)

// const { notFound, errorHandler } = require("./middlewares/errorHandler");
// app.use(notFound);
// app.use(errorHandler);

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("mongoDB connection successful !!!");
})


//run the app using portd
app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`);

})

   