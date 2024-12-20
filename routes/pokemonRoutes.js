const express = require("express");
const {test, catchPokemonByPokemonId,createPokemonStatus , getPokemonStatus, getPokemonByPokemonId, in_TeamPokemonByPokemonId} = require ("../controllers/pokemonControllers")
const router = express.Router()

router.get("/test",test)
router.get("/",getPokemonStatus)
router.get("/pokemonid/:pokemon_id", getPokemonByPokemonId)
router.post("/",createPokemonStatus)
router.put("/catch/:pokemon_id",catchPokemonByPokemonId)
router.put("/inteam/:pokemon_id",in_TeamPokemonByPokemonId)
module.exports = router