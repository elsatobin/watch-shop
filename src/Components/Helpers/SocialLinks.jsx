import React, { Fragment } from "react";
import { IconButton, Link, Stack, Tooltip } from "@mui/material";

import {
   FaFacebook,
   FaInstagram,
   FaTwitter,
   FaLinkedinIn,
   FaGithub,
} from "react-icons/fa";

export default function SocialLinks() {
   return (
      <Fragment>
         <Stack
            direction="row"
            spacing={2}
            justifyContent={{ xs: "center", md: "start" }}
         >
            <Tooltip title="Add" arrow>
               <IconButton sx={{ width: "30px", height: "30px" }}>
                  <Link
                     href="http://faceboock.com"
                     title="faceboock"
                     target="_blank"
                  >
                     <FaFacebook size={30} />
                  </Link>
               </IconButton>
            </Tooltip>

            <IconButton elevation={3} sx={{ width: "30px", height: "30px" }}>
               <Link href="http://twitter.com" target="_blank">
                  <FaTwitter size={30} />
               </Link>
            </IconButton>

            <IconButton elevation={3} sx={{ width: "30px", height: "30px" }}>
               <Link href="http://Instagram.com" target="_blank">
                  <FaInstagram size={30} />
               </Link>
            </IconButton>

            <IconButton elevation={3} sx={{ width: "30px", height: "30px" }}>
               <Link href="http://Linkedin.com" target="_blank">
                  <FaLinkedinIn size={30} />
               </Link>
            </IconButton>

            <IconButton elevation={3} sx={{ width: "30px", height: "30px" }}>
               <Link href="http://Github.com" target="_blank">
                  <FaGithub size={30} />
               </Link>
            </IconButton>
         </Stack>
      </Fragment>
   );
}
