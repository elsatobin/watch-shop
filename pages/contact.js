import ContactUs from "@/Components/ContactUs";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import CarouselMain from "@/Components/Home/CarouselMain";
import OfferCards from "@/Components/Home/OfferCards";
import { Box, Container, Stack, Typography } from "@mui/material";
import ProductsSections from "@/Components/Home/ProductsSections";
import ImageSlider from "@/Components/ImageSlider";
// import Contact from "@/Components/Contact";
import CountDownSale from "@/Components/Home/CountDownSale";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
   return (
      <>
         <Head>
            {/* <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" /> */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            <meta name="description" content="Divita Watch Contact us" />
            <title>Divita Watch</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
         </Head>
         <div>
            <ContactUs />
         </div>
      </>
   );
}
