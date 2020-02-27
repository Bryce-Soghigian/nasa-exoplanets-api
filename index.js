const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const exoplanet_kepler_router = require("./routers/exoplanet-router/exoplanet-router")


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
server.use("/api/exoplanet",exoplanet_kepler_router)


//===========Server UP endpoint========================//
server.get("/",(req,res) => {
    res.json({is_server_up:"true"})
})

