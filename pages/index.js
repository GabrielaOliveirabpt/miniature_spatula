import Link from 'next/link';
import Card from '/components/Card.js';
import Header from '/components/Header.js';


function Home() {
    return (
      <div>
        <Header/>

        <div className='container_instructions'>
          <div className='amarelo'>
            <h4>It' your choice</h4>
            <p>Choose 2 from our 30 delicious dishes. Whether meat & fish, vegetarian, fit & healthy, fast food or family-friendly - we have something for everyone! Then presse the continue button at the end of the page.</p>
          </div>
        </div>

        <div className='container_card'>

          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
        </div>
       
       <br/>
       <br/>
       <br/>

        <Link href='/user-details'>
        User Details
        </Link>
      </div>
    );
  }
  
  export default Home;