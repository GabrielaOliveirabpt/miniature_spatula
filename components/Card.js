function Card() {
    return (
      <div
        className="card"
      >
        <img 
            src="https://marleyspoon.com/media/recipes/158961/main_photos/medium/easy-cde135e964e1ba41257767eea724ec18.jpeg"
            alt="placeholder" 
            width="436" 
        />
        <div className="recipe_details">
            <p className="recipe_type">Meat</p>
            <p 
                className="recipe_title" 
            >
                Creamy Vegetable Feta Penne
            </p>
            <p className="recipe_subtitle">with Minted Massala Rice</p>
            <div className="recipe_labels">
                <span className="recipe_label">Under 30 min.</span>
                <span className="recipe_label">Family Friendly</span>
                <span className="recipe_label">Under 30 min.</span>
                <span className="recipe_label">Family Friendly</span>
            </div>
        </div>
        
      </div>
    );
  }
  
export default Card;
