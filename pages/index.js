import Link from 'next/link'

function Home() {
    return (
      <div>
        <h1>Home</h1>
        <Link href='/user-details'>
        User Details
        </Link>
      </div>
    );
  }
  
  export default Home;