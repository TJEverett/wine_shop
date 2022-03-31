# Wine Shop

#### _Run a fictional wine shop, 03/31/2022_

#### By _**Tristen Everett**_

## Description

This project was to show what I have learned about creating React pages by trying to meet a set of user stories. In this project, I built a page that loads a wine shop based in the fantasy book series of Stormlight Archives by Brandon Sanderson. The page I built will start the user at a menu formed from the webpage's database and sorted by color. From there a customer can choose to either view details about a specific wine that is on the menu, or to purchase a pint. An employee will have the option to instead click the button labeled "Change to Employee View" and will there be able to see all drinks on the menu sorted primarily by stock and then by color. Employees will there be able to add a keg into the available stock of an already existing wine, delete a wine from the menu, or add a new wine to the menu. The [user stories](#basic-user-stories) that were used are included below, along with a [diagram](#diagram) of the React components.

### Basic User Stories

* As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its `name`, `brand`, `price` and `alcoholContent` (or perhaps something like `flavor` for a kombucha store).
* As a user, I want to submit a form to add a new keg to a list.
* As a user, I want to be able to click on a keg to see its detail page.
* As a user, I want to see how many pints are left in a keg. **Hint:** A full keg has roughly 124 pints.
* As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0.

### Further Exploration User Stories

* As a user, I want to be able to delete a keg.
* As a user, I want a keg to update to say "Out of Stock" once it's empty.
* As a user, I want kegs with less than 10 pints to include a message that says "Almost Empty" so I can try a pint before it's gone!
* As a user, I want to have kegs prices to be color-coded for easy readability. This could be based on their price, the style of beer or kombucha, or the amount of pints left.
* As a user, I want this application to be nicely styled. (Use stylesheets and CSS objects!)

### Diagram

* [WineShop PDF](./WineShop.pdf)

## Setup/Installation Requirements

1. Clone this Repo
2. Run `npm install` from within the root directory of the cloned project
3. Run `npm start` from within the root directory of the cloned project
4. The webpage should start automatically in your default browser. If it doesn't go to http://localhost:3000 in your preferred browser

### Known Bugs / Limitations

* If no wine color is selected before submitting a new wine to the database an alert will appear to prevent submissions

## Technologies Used

* [Create React App](https://github.com/facebook/create-react-app)

### License

This software is licensed under the MIT license

Copyright (c) 2022 **_Tristen Everett_**