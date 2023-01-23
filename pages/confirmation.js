import Head from 'next/head';


function Confirmation() {
    return (
        <div className='container_instructions'>
            <Head>
                <title>Miniature Spatula - Confirmation </title>
            </Head>
            <div className='yellow_box'>
            <h4>Thank You!</h4>
            <p>Your choices were registered and we'll be delivering our box to your home very soon!</p>
            </div>
        </div>
    );
  }
  
  export default Confirmation;
