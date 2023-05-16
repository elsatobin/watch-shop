
import Head from "next/head";

import { Inter } from "next/font/google";

import Blog from "@/Components/Blog";

const inter = Inter({ subsets: ["latin"] });

export default function Blogs() {
   return (
      <>
         <Head>
            {/* <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" /> */}
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />

            <meta name="description" content="Divita Watch Blogs" />
            <title>Divita Watch</title>
         </Head>
         <div>
            <Blog />
         </div>
      </>
   );
}
