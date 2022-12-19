import Link from 'next/link'

function UserDetails() {
    return (
      <div>
        <h1>User Details test</h1>

        <Link href='/confirmation'>
        Confirmation
        </Link>

      </div>
    );
  }
  
  export default UserDetails;