import {createGlobalStyle} from "styled-components";
import {CartContextProvider} from "@/components/CartContext";
import React from 'react';
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet');
  body {
  background-color: #eee; /* couleur de fond du SVG */
  //background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' id='visual' viewBox='0 0 960 540' width='960' height='540' version='1.1'><defs><filter id='blur1' x='-10%' y='-10%' width='120%' height='120%'><feFlood flood-opacity='0' result='BackgroundImageFix'/><feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/><feGaussianBlur stdDeviation='163' result='effect1_foregroundBlur'/></filter></defs><rect width='960' height='540' fill='#011224'/><g filter='url(%23blur1)'><circle cx='348' cy='388' fill='#ADEFD1' r='363'/><circle cx='799' cy='363' fill='#011224' r='363'/><circle cx='23' cy='314' fill='#ADEFD1' r='363'/><circle cx='342' cy='178' fill='#ADEFD1' r='363'/><circle cx='878' cy='94' fill='#011224' r='363'/><circle cx='593' cy='521' fill='#ADEFD1' r='363'/></g></svg>");
  background-size: cover; /* pour couvrir l'ensemble du corps */
  background-repeat: no-repeat; /* pour éviter la répétition */
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
