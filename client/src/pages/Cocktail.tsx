import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NoCocktailsFound from '../components/NoCocktailsFound';

interface ICocktail {
  drinks: IDrink[];
}

interface IDrink {
  [key: string]: string | undefined;
}

function Cocktail() {
  const hostUrl = 'http://localhost:5000';
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [value, setValue] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  }, []);

  const search = useCallback((): void => {
    fetch(`${hostUrl}/api/cocktail?mode=search&name=${value}`)
    .then(res => res.json())
    .then(cocktail => {
      setCocktail(cocktail);
    });
  }, [value]);

  const random = useCallback((): void => {
    fetch(`${hostUrl}/api/cocktail?mode=random`)
    .then(res => res.json())
    .then(cocktail => {
      setCocktail(cocktail);
    });
  }, []);

  useEffect(() => {
    random();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="inputs">
          <div className="random">
            <button onClick={random}>New random</button>
          </div>
          <div className="search">
            <input className="search-text" type="text" value={value} onChange={handleChange} />
            <button onClick={search}>Search</button>
          </div>
        </div>
        <div className="cocktail-result-container">
          {cocktail?.drinks ? (
            <div>
              <h2 className="cocktail-title">{cocktail.drinks[0].strDrink}</h2>
              <figure className="cocktail-container"><img className="cocktail-img" alt={cocktail.drinks[0].strDrink} src={cocktail.drinks[0].strDrinkThumb} /></figure>
              <div>
                <table className="cocktail-table">
                  <thead>
                    <tr>
                      <th>Measure</th>
                      <th>Ingredient</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{cocktail.drinks[0].strMeasure1}</td>
                      <td>{cocktail.drinks[0].strIngredient1}</td>
                    </tr>
                    <tr>
                      <td>{cocktail.drinks[0].strMeasure2}</td>
                      <td>{cocktail.drinks[0].strIngredient2}</td>
                    </tr>
                    <tr>
                      <td>{cocktail.drinks[0].strMeasure3}</td>
                      <td>{cocktail.drinks[0].strIngredient3}</td>
                    </tr>
                    <tr>
                      <td>{cocktail.drinks[0].strMeasure4}</td>
                      <td>{cocktail.drinks[0].strIngredient4}</td>
                    </tr>
                    <tr>
                      <td>{cocktail.drinks[0].strMeasure5}</td>
                      <td>{cocktail.drinks[0].strIngredient5}</td>
                    </tr>
                    <tr>
                      <td>{cocktail.drinks[0].strMeasure6}</td>
                      <td>{cocktail.drinks[0].strIngredient6}</td>
                    </tr>
                    <tr>
                      <td>{cocktail.drinks[0].strMeasure7}</td>
                      <td>{cocktail.drinks[0].strIngredient7}</td>
                    </tr>
                    <tr>
                      <td>{cocktail.drinks[0].strMeasure8}</td>
                      <td>{cocktail.drinks[0].strIngredient8}</td>
                    </tr>
                    <tr>
                      <td>{cocktail.drinks[0].strMeasure9}</td>
                      <td>{cocktail.drinks[0].strIngredient9}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h2>Instructions</h2>
              <p className="instructions">{cocktail.drinks[0].strInstructions}</p>
            </div>
            ) : (
              <NoCocktailsFound />
            )
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Cocktail;