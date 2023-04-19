const express = require("express");
const app = express();
const morgan = require("morgan");
const countriesRoutes = require("./routes/countries");
const path = require('path');


// settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './views'));


//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// routes
app.use(require("./routes/index"))
app.use("/api/movies", require("./routes/movies"));
app.use("/api/users", require("./routes/users"));
app.use("/countries", countriesRoutes)

//starting servver
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
})