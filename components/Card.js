import { mealAttKeys } from '../helpers/functions';

function Card({ recipe }) {
    return (
      <div
        className="card"
      >
        <img 
            src={recipe.image.url ?? ''}
            alt={recipe.title}
            width="436"
        />
        <div className="recipe_details">
            <p className="recipe_type">
                
                {recipe.mealType}
            </p>
            <p className="recipe_title" >
                {recipe.title}
            </p>
            <p className="recipe_subtitle">
                {recipe.subtitle}
            </p>

            <div className="recipe_labels">
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
