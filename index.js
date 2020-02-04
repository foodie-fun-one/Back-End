require('dotenv').config()
const cors = require("cors");
const server = require('./api/server');

const corsOptions = {
    origin: "*",
    methods: ['GET', 'PUT', 'POST', 'DELETE']
}

server.use(cors(corsOptions));

const port = process.env.PORT || 8015;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})