import React from 'react';
import { mealAttKeys } from '../helpers/functions';

const Card = ({ recipe, setSelectedRecipes, selectedRecipes, card_selected, setCard_selected }) => {

  const setSelectedRecipe = (selRec, id, title, subtitle) => {
     if (selRec.length < 2) {
      setSelectedRecipes([ 
        ...selRec, 
        { id: id, recipe: title, recipeSubtitle: subtitle} 
      ])
    } else {
      console.log ('only two recipes allowed')
    }
    
  }
    return (
      <div
        onClick={() => setSelectedRecipe(selectedRecipes, recipe.id, recipe.title, recipe.subtitle)}
        className={card_selected ? 'card_selected card' : 'card'}
      >
        <img 
            src={recipe.image.url ?? ''}
            alt={recipe.title}
            width='436'
        />
        <div className='recipe_details'>
            <p className='recipe_type'>
                {recipe.mealType}
            </p>
            <p className='recipe_title' >
                {recipe.title}
            </p>
            <p className='recipe_subtitle'>
                {recipe.subtitle}
            </p>

            <div className='recipe_labels'>
                {recipe.attributes.map((attribute) => (
                    <span
                        key={attribute.key}
                        className='recipe_label'
                    >
                        {mealAttKeys[attribute.key]}
                    </span>
                ))}
            </div>
            
        </div>
        
      </div>
    );
  }
  
export default Card;
