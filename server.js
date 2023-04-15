const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors")
const corsOptions = require("./config/corsOptions")

app.use(express.json());

const connectDB = require("./config/dbConfig")
app.use(cors(corsOptions))

app.use(express.json());

const usersRoute = require("./routes/usersRoute");
const moviesRoute = require("./routes/moviesRoute");
const theatresRoute = require("./routes/theatresRoute")
const bookingsRoute = require("./routes/bookingsRoute");

app.use("/api/users", usersRoute)
app.use("/api/movies", moviesRoute)
app.use("/api/theatres", theatresRoute)
app.use("/api/bookings", bookingsRoute);

const port = process.env.PORT || 5000;


app.listen(port, () =>
    console.log(`Node JS Server is running on port ${port}`)
);