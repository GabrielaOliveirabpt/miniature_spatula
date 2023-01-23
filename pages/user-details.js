import Link from 'next/link'
import React from 'react'
import { useAppContext } from '../context/state';
import Head from 'next/head';

const UserDetails = () => {
    const { selectedRecipes } = useAppContext();
    const [ firstName, setFirstName ] = React.useState('')
    const [ email, setEmail ] = React.useState('')

    const submitData = async () => {
        const response = await fetch('https://code-challenge-mid.vercel.app/api/submit', {
            method: 'POST',
            body: JSON.stringify({ 
                firstName: firstName, 
                email: email, 
                recipes: selectedRecipes
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await response.json()
        console.log(data)
    }
   

    return (
        <div className='container_instructions'>
            <Head>
                <title>Miniature Spatula - Registration </title>
            </Head>
            <div className='yellow_box'>
            <h4>Registration</h4>            
            <p>You have selected the following recipes:</p>
            {selectedRecipes.map((recipe) => (
                <p key={recipe.id}>- {recipe.recipe} {recipe.recipeSubtitle}</p>
            ))}
               
            <p>Please insert your name and email address to complete the registration process:</p>
            
            <form className='container_input'>
                <input
                    type='text'
                    value={firstName}
                    placeholder='Name'
                    onChange={(e) => setFirstName(e.target.value)}
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
                    <Link href='/' className='btn_centre' style={{ textDecoration: 'none' }}>
                        <div 
                            className='btn_continue' 
                        >
                            Go Back 
                        </div>
                    </Link>

                    <Link href='/confirmation' className='btn_centre' style={{ textDecoration: 'none' }}>
                        <div 
                            className='btn_continue'
                            onClick={() => submitData()}
                        >
                            Send
                        </div>
                    </Link>
                    
                </div>
            </form>
            <br/>
            <br/>   

            </div>
        </div>
    );
  }
  
  export default UserDetails;