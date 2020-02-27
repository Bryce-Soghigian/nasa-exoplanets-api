const express = require("express")
const cors = require("cors")
const helmet = require("helmet")



//=============Server Init=======================//
const server = express();
const PORT = process.env.PORT || 5555;
server.listen(PORT, () => {
  console.log(`//================Server is running on ${PORT}... =================//`);
});
//============Server Routers and Middleware=========//
server.use(cors())
server.use(express.json())
server.use(helmet());



//===========Server UP endpoint========================//
server.get("/",(req,res) => {
    res.json({is_server_up:"true"})
})