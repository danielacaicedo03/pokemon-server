    const express = require ("express");
    const mongoose = require ("mongoose");
    require ("dotenv").config();
    const pokemonRouter = require("./routes/pokemonRoutes")
    const app = express();
    const PORT = 3000;

    app.set("port",PORT);
    //MIDELWARES
    app.use (express.json());

        //ROUTES ()
        app.use("/api/pokemon",pokemonRouter)

        //db CONNECTIONS
        mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("Connect to DB"))
        .catch((error)=>console.error(error));


    //port listening
    app.listen(PORT,()=>{
            console.log('Listening in port`${PORT}');

            })
