// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
//}



import {Fragment} from "react";
import Header from "../components/Header";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
  <Fragment>
      <Header/>
      <Component {...pageProps}/>
    </Fragment> 
  );
}

export default MyApp;