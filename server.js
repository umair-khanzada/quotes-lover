require("dotenv").config();
require("./server/config/database").connect();
const express = require("express");
const next = require('next');
const cors = require('cors');
const dev = process.env.NODE_ENV !== 'production';//true false
const app = next({ dev });
const handle = app.getRequestHandler();//part of next config

const registerRoute = require('./server/routes/register');
const loginRoute = require('./server/routes/login');
const userRoute = require('./server/routes/user');
const quotesRoute = require('./server/routes/quotes');

const invalidRoutes = require('./server/controllers/invalidRoutes');

// importing user context
const User = require("./server/model/user");
const auth = require("./server/middleware/auth");

const expressApp = express();
app.prepare()
    .then(() => {
        const { API_PORT } = process.env;
        const PORT = process.env.PORT || API_PORT;

        expressApp.get('*', (req,res) => {
            return handle(req,res) // for all the react stuff
          });
      
          expressApp.listen(PORT, err => {
            if (err) throw err;
            console.log(`ready at PORT: ${PORT}`)
          })
        expressApp.use(cors());
        expressApp.use(express.json());

        // Auth Register and login
        expressApp.use('/api/register', registerRoute);
        expressApp.use('/api/login', loginRoute);
        // Welcome
        expressApp.use('/api/welcome', userRoute);
        // Quote
        expressApp.use('/api/quote', quotesRoute)
        // User
        expressApp.get("/user", auth, (req, res) => {
            res.status(200).send("Welcome 🙌 ");
        });

        // This should be the last route else any after it won't work
        expressApp.use("*", invalidRoutes);
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });


module.exports = expressApp;