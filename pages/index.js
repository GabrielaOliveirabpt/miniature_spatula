import Link from 'next/link';
import Card from '/components/Card.js';
import Header from '/components/Header.js';


function Home({ recipes }) {
    return (
      <div>
        <Header/>

        <div className='container_instructions'>
          <div className='yellow_box'>
            <h4>It' your choice</h4>
            <p>Choose 2 from our 30 delicious dishes. Whether meat & fish, vegetarian, fit & healthy, fast food or family-friendly - we have something for everyone! Then presse the continue button at the end of the page.</p>
          </div>
        </div>
        
        <div className='container_card'>
        {!!recipes.length &&
          recipes.map((recipe) => (
            <Card
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
       
       <br/>
       <br/>
       <br/>
        <Link href='/user-details' className='btn_center'>
            <div className="btn_continue">Continue</div>
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
    };
  };