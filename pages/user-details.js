import Link from 'next/link'
import { useState } from 'react'

function UserDetails() {
const [ name, setName ] = useState('')
const [ email, setEmail ] = useState('')

// const submitData = async () => {
//     const response = await fetch('https://code-challenge-mid.vercel.app/api/submit', {
//         method: 'POST',
//         body: JSON.stringify({ name, email }),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//     const data = await response.json()
//     console.log(data)

// }
   

    return (
      <div className='user_details_container'>
        <h1>User Details</h1>

        <h2>You have select the following Recipes:</h2>
        <h3>Recipe 1</h3>
        <h3>Recipe 2</h3>

        <h2>Please insert your Name and Email address in the fields:</h2>
        <br/>

        <input
            type='text'
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <br/>
        <input
            type='text'
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
        />

        <br/>
        <br/>
        <div className='display_opposite'>
            <Link href='/' className='btn_centre'>
                <div 
                    className="btn_continue"
                    // onClick={submitData}
                >
                    Go Back 
                </div>
            </Link>

            <Link href='/confirmation' className='btn_centre'>
                <div 
                    className="btn_continue"
                    // onClick={submitData}
                >
                    Send
                </div>
            </Link>
            
        </div>

      </div>
    );
  }
  
  export default UserDetails;