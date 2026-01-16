const express = require("express")
require("dotenv").config()
const connectDB = require("./db/connection")
const bookRoutes = require("./routes/bookRoutes")

const app = express();

// StartnServer

const PORT = process.env.PORT || 3001

connectDB();

// Middleware

app.use(express.json())
app.use(express.urlencoded())


//Routes

app.use("/api/books", bookRoutes)


app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
});