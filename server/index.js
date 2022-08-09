import express from 'express';
import path from 'path';
import axios from 'axios';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(cors({
    origin: ['http://localhost:3000']
}));

function searchCocktail(searchName, res) {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchName)
        .then(response => res.json(response.data))
        .catch(err => console.log(err));
}

function getRandomCocktail(res) {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => res.json(response.data))
        .catch(err => console.log(err));
}

// An api endpoint that returns a short list of items
app.get('/api/cocktail', (req, res) => {
    const apiMode = req.query.mode;
    const searchName = req.query.name;

    if (apiMode === 'random') {
        getRandomCocktail(res);
    } else if (apiMode === 'search' && searchName.length > 0) {
        searchCocktail(searchName, res);
    }
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Cocktail App v2 Server is listening on port ' + port);



