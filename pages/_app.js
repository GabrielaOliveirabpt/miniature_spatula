import { AppWrapper } from '../context/state';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
     <Component {...pageProps} />
    </AppWrapper>
 )
}


