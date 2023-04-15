// const allowedOrigins = require("./allowedOrigins")

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5000',
    'https://guvi-hackathon2-vaishak.netlify.app',
    'https://bookmyshow-frontend-ipj7.onrender.com',

]

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 