
// As a Chef, I want to store my recipes so that I can keep track of them.

// Acceptance Criteria: Given I am on the landing page, When the page loads, Then I should see a heading that reads "My Recipes" And I should see text beneath the heading that reads "There are no recipes to list".
// As a Chef, I want to be able to add recipes to my collection so that I may have a record of them.

// Acceptance Criteria: Given I am on the landing page, When the page loads, Then I should see a button that says "Add Recipe" beneath the "My Recipes" heading.

// Acceptance Criteria: Given I am on the landing page, When I click the add recipe button, Then I should see a form with fields: "Recipe Name" and "Recipe Instructions" And the "Add Recipe" button should no longer be on the screen.

// As a Chef, I want to be able to see a recipe that I have added show up under "My Recipes".

// Acceptance Criteria: Given I have clicked the add recipe button, When I enter the details of a recipe in the form And I click the submit button Then I should see that recipe's name in the list under a heading that reads "My Recipes".

import './App.css';

import React from 'react';

class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
    recipes: [],
    newRecipeName: "",
    newRecipeInstructions: ""
  }
  
  handleRecipeInstructionsChange = (event) => {
    const value = event.target.value;
  
    this.setState({newRecipeInstructions: value});
  }

  toggleAddRecipeForm = () => {
    this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
  }
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
  
    this.setState({[name]: target.value});
  }

  submitRecipe = (event) => {
    event.preventDefault()
    this.setState({recipes: [
        {
          name: this.state.newRecipeName,
          instructions :this.state.newRecipeInstructions
        }
      ]
    })
  }

render(){
  const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe} >
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text"
          id="newRecipeName"
          name="newRecipeName"
          onChange={this.handleChange}
          value={this.state.newRecipeName} />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea id="newRecipeInstructions"
          name="newRecipeInstructions"
          placeholder="write recipe instructions here..."
          onChange={this.handleChange}
          value={this.state.newRecipeInstructions} />
        <input type="submit" />
      </form>
    )
    
    return (
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        {
          this.state.isAddRecipeFormDisplayed
          ? addNewRecipeForm
          : <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
        }
        {
          this.state.recipes.length > 0 ?
          <ul>
            <li></li>
          </ul> :
          <p>There are no recipes to list.</p>
        }
      </div>
    )
  }
}

export default App;