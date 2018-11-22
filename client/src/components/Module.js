import React, { Component } from "react";
import Collapsible from "react-collapsible";
import image1 from '../images/spaghetti.jpg';

// =================================================================================================================
// https://www.npmjs.com/package/react-collapsible
// =================================================================================================================

class Module extends Component {
  render() {
    return (
      <div>
        <hr />
        <br />
        <Collapsible trigger="Spaghetti and Meatballs [+]">
        <img width={320} height={240} alt="spaghetti and meatballs" src={image1} />
          <br />
          <a href="https://www.foodnetwork.com/recipes/rachael-ray/spaghetti-and-meatballs-recipe-1942620">https://www.foodnetwork.com/recipes/rachael-ray/spaghetti-and-meatballs-recipe-1942620</a>
        </Collapsible>
        <br />
        <Collapsible trigger="Ingredient List [+]">
          <ul>
            <li>1 pound spaghetti</li>
            <li>Salt, for pasta water</li>
          </ul>
          Meatballs:
          <ul>
            <li>1 1/4 pounds ground sirloin</li>
            <li>2 teaspoons Worcestershire sauce, eyeball it</li>
            <li>1 egg, beaten</li>
            <li>1/2 cup Italian bread crumbs, a couple of handfuls</li>
            <li>
              1/4 cup grated Parmesan, Parmigiano-Reggiano or Romano cheese
            </li>
            <li>2 cloves garlic, chopped</li>
            <li>Salt and pepper</li>
          </ul>
          Sauce:
          <ul>
            <li>2 tablespoons extra-virgin olive oil, 2 turns of the pan</li>
            <li>1/2 teaspoon crushed red pepper flakes</li>
            <li>4 cloves garlic, crushed or chopped</li>
            <li>1 small onion, finely chopped</li>
            <li>
              1 cup beef stock, available on soup aisle in market in small paper
              boxes
            </li>
            <li>1 (28-ounce) can crushed tomatoes</li>
            <li>A handful chopped flat-leaf parsley</li>
            <li>
              Grated cheese, such as Parmigiano-Reggiano or Romano, for passing
              at table
            </li>
            <li>10 leaves fresh basil leaves, torn or thinly sliced</li>
            <li>Crusty bread or garlic bread, for passing at the table</li>
          </ul>
        </Collapsible>
        <br />
        <Collapsible trigger="Instructions [+]">
          <ol>
            <li>Preheat oven to 425 degrees F.</li>
            <li>
              Place a large pot of water on to boil for spaghetti. When it
              boils, add salt and pasta and cook to al dente.
            </li>
            <li>
              Mix beef and Worcestershire, egg, bread crumbs, cheese, garlic,
              salt and pepper. Roll meat into 1 1/2 inch medium-sized meatballs
              and place on nonstick cookie sheet or a cookie sheet greased with
              extra-virgin olive oil. Bake balls 10 to 12 minutes, until no
              longer pink.
            </li>
            <li>
              Heat a deep skillet or medium pot over moderate heat. Add oil,
              crushed pepper, garlic and finely chopped onion. Saute 5 to 7
              minutes, until onion bits are soft. Add beef stock, crushed
              tomatoes, and herbs. Bring to a simmer and cook for about 10
              minutes.
            </li>
            <li>
              Toss hot, drained pasta with a few ladles of the sauce and grated
              cheese. Turn meatballs in remaining sauce. Place pasta on dinner
              plates and top with meatballs and sauce and extra grated cheese.
              Serve with bread or garlic bread (and some good chianti!)
            </li>
          </ol>
        </Collapsible>
        <br />
        <Collapsible trigger="Discussion [+]">
          <ul>
            <li>This recipe is AMAZING!!!</li>
            <li>I can eat this every night!!!</li>
            <li>I prefer pizza.</li>
          </ul>
        </Collapsible>
      </div>
    );
  }
}

export default Module;
