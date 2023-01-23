import React, { useState } from 'react';
import { useAppContext } from '../context/state';
import Link from 'next/link';
import Card from '/components/Card.js';
import Header from '/components/Header.js';
import Head from 'next/head';


const Home = ({ recipes }) => {
  const { selectedRecipes, setSelectedRecipes } = useAppContext([]);
  const [ card_selected, setCard_selected] = useState(false)

    return (
      <div>
        <Header/>
        <Head>
          <title>Miniature Spatula - Home </title>
        </Head>
        <div className='container_instructions'>
          <div className='yellow_box'>
            <h4>Miniature Spatula</h4>
            <p>Choose two out of our 30 delicious dishes. Whether meat & fish, vegetarian, fit & healthy, fast food or family-friendly - we have something for everyone! Then press the continue button at the end of the page.</p>
          </div>
        </div>
        
        <div className='container_card'>
        {recipes.length > 0 &&
          recipes.map((recipe) => (
            <Card
              key={recipe.id}
              recipe={recipe}
              setSelectedRecipes={setSelectedRecipes}
              selectedRecipes={selectedRecipes}
              card_selected={!!selectedRecipes.find((selectedRecipe) => selectedRecipe.id === recipe.id)}
              setCard_selected={setCard_selected}
            />
          ))}
        </div>
       
       <br/>
       <br/>
       <br/>
        <Link href='/user-details' className='btn_center' style={{ textDecoration: 'none' }} >
            <div className='btn_continue'>
              Continue
            </div>
        </Link>
        <br/>
       <br/>
       <br/>    
      </div>
    );
  }
  
  export default Home;


  export const getStaticProps = async () => {
    const response = await fetch('https://code-challenge-mid.vercel.app/api/recipes');
    const { recipes = [] } = await response.json();
  
    return {
      props: {
        recipes,
      },
      revalidate: 10,
    };
  };