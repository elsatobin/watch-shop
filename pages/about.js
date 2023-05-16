import React from "react";
import Head from "next/head";
import AboutUs from "@/Components/About/AboutUs";

export default function About() {
   return (
      <>
         <Head>
            {/* <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" /> */}
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />

            <meta name="description" content="Divita Watch About Us" />
            <title>Divita Watch</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
         </Head>
         <>
            <AboutUs />
         </>
      </>
   );
}
