const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


const pokedex = [ 
       {
         id:1,
         nome:"Bulbasaur ",
         descricao: "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
         tipo: "glass",
         imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
       },
 
       {
         id:2,
        nome:"Venasaur",
        descricao: "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol.",
        tipo: "glass",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
      },

      {
        id:3,
       nome:"Charmeloeon",
       descricao: "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda de fogo e corta com garras afiadas.",
       tipo: "Fire",
       imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
     }

] 




app.get("/", (req, res) => {
  res.render("index", {pokedex});
});

app.listen(3000, () =>
 console.log("servidor rodando em http://localhost:3000"));
