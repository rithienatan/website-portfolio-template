/**
 * App
 * 
 * @author Rithie Natan
 * @date 2023-01-23
 * Last update: 2023-01-23
 */
//---------- Imports ----------
//----- Interface and Types -----
import { AppProps } from "next/app";

//---------- Custom Imports ----------
//----- Styles -----
import "../styles/globals.css";


//---------- Exports ----------
/**
 * App component
 * 
 * @param {AppProps} - Component, pageProps
 * @returns {JSX.Element} 
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element
{ return <Component {...pageProps} /> }