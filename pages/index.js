import Head from "next/head";
import { Inter } from "next/font/google";
import CarouselMain from "@/Components/Home/CarouselMain";
import OfferCards from "@/Components/Home/OfferCards";
import { Container } from "@mui/material";
import ProductsSections from "@/Components/Home/ProductsSections";
import CountDownSale from "@/Components/Home/CountDownSale";
import ProductsSwiper from "@/Components/Home/ProductsSwiper";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" /> */}
        <title>Divita Watch</title>
        <meta
          name="description"
          content="Divita Watch Devloped by Mustafa Abutabl"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <CarouselMain />
        <Container>
            <OfferCards />
            <ProductsSections />
        </Container>
        <CountDownSale />
        <Container>
          <ProductsSwiper />
        </Container>
      </>
    </>
  );
}
