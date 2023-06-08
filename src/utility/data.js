import team_member_img1 from "../images/team-1.jpg";
import team_member_img2 from "../images/team-2.jpg";
import team_member_img3 from "../images/team-3.jpg";
import team_member_img4 from "../images/team-4.jpg";

// blog images --------------------
import blog_img_1 from "../images/blog-1.jpg";
import blog_img_2 from "../images/blog-2.jpg";
import blog_img_3 from "../images/blog-3.jpg";
import blog_img_4 from "../images/blog-4.jpg";
import blog_img_5 from "../images/blog-5.jpg";
import blog_img_6 from "../images/blog-6.jpg";
import blog_img_7 from "../images/blog-7.jpg";
import blog_img_8 from "../images/blog-8.jpg";
import blog_img_9 from "../images/blog-9.jpg";



// products images ------------------
import image_1 from "../images/pro-watch-1.png";
import image_2 from "../images/pro-watch-2.png";
import image_3 from "../images/pro-watch-3.png";
import image_4 from "../images/pro-watch-4.png";
import image_5 from "../images/pro-watch-5.png";
// export const languages = [
//    ["img", "Arabic"]
//    ["img", "English"] ,
// ];

export const languages = [
  { name: "Arabic", img: "" },
  { name: "English", img: "" },
];

export const curancy = [
  { name: "SAR", img: "" },
  { name: "EGP", img: "" },
  { name: "USD", img: "" },
];

// export const navItems = ["Home", "Shop", "Blog", "About", "Contact"];


export const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Shop", href: "/shop" },
	{ label: "Blog", href: "/blog" },
	{ label: "About us", href: "/about" },
	{ label: "Contact us", href: "/contact" },
];
// Product Types list --> home page
export const ProductTypes = ["New Arrivals", "Featured Top", "Top Rated"];

// SocialLinks
export const social_links = [
  { title: "Facebook", link: "http://faceboock.com", icon: "<FaFacebook />" },
  { title: "Instgram", link: "http://Instagram.com", icon: "<FaInstagram />" },
  { title: "Twitter", link: "http://Twitter.com", icon: "<FaTwitter />" },
  { title: "Linkedin", link: "http://Linkedin.com", icon: "<FaLinkedinIn />" },
  { title: "Github", link: "http://Github.com", icon: "<FaGithub />" },
];

// Team Members
export const team_members = [
  {
    id: 1,
    img: team_member_img1,
    name: "Mr.Mike Banding",
    title: "Manager",
    facebook: "#",
    insta: "#",
    twitter: "#",
  },
  {
    id: 2,
    img: team_member_img3,
    name: "Mr.Peter Pan",
    title: "Development",
    facebook: "#",
    insta: "#",
    twitter: "#",
  },
  {
    id: 3,
    img: team_member_img2,
    name: "Ms.Sophia",
    title: "Designer",
    facebook: "#",
    insta: "#",
    twitter: "#",
  },
  {
    id: 4,
    img: team_member_img4,
    name: "Mr.John Lee",
    title: "Chairmen",
    facebook: "#",
    insta: "#",
    twitter: "#",
  },
];

// Testimonials

export const testimonials = [
  {
    name: "Mr.John Lee",
    title: "Chairmen",
    text: "“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat. ”",
  },
  {
    name: "Mr.Mike Banding",
    title: "Manager",
    text: "“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat. ”",
  },
  {
    name: "Mr.Peter Pan",
    title: "Development",
    text: "“ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse cillum dolore eu fugiat. ”",
  },
];

export const blogs = [
  {
    id: 1,
    img: blog_img_1,
    title: "When an unknown printer took a galley of type.",
    text: "The first line of lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.",
    date: "2022.May.01",
    comments: 5,
    badge: "New",
  },
  {
    id: 2,
    img: blog_img_2,
    title: "Many desktop publishing packages and web page editors.",
    text: "The first line of lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.",
    date: "2022.May.02",
    comments: 10,
    badge: "Spcial",
  },
  {
    id: 3,
    img: blog_img_3,
    title: "Various versions have evolved over the years sometimes.",
    text: "The first line of lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.",
    date: "2022.May.03",
    comments: 2,
    badge: "New",
  },
  {
    id: 4,
    img: blog_img_4,
    title: "Many desktop publishing packages and web page editors.",
    text: "The first line of lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.",
    date: "2022.May.04",
    comments: 0,
    badge: "Spcial",
  },
  {
    id: 5,
    img: blog_img_5,
    title: "When an unknown printer took a galley of type.",
    text: "The first line of lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.",
    date: "2022.May.05",
    comments: 3,
    badge: "New",
  },
  {
    id: 6,
    img: blog_img_6,
    title: "Various versions have evolved over the years sometimes.",
    text: "The first line of lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.",
    date: "2022.May.06",
    comments: 8,
    badge: "Spcial",
  },
  {
    id: 7,
    img: blog_img_7,
    title: "Many desktop publishing packages and web page editors.",
    text: "The first line of lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.",
    date: "2022.May.07",
    comments: 1,
    badge: "New",
  },
  {
    id: 8,
    img: blog_img_8,
    title: "When an unknown printer took a galley of type.",
    text: "The first line of lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.",
    date: "2022.May.08",
    comments: 6,
    badge: "Spcial",
  },
  {
    id: 9,
    img: blog_img_9,
    title: "Many desktop publishing packages and web page editors.",
    text: "The first line of lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.",
    date: "2022.May.09",
    comments: 4,
    badge: "New",
  },
];



export const products = [
  {
    id: "1",
    brand: "Rolex",
    model: "Datejust",
    title: "Rolex Datejust 36mm",
    quantity: 10,
    rate: 4.5,
    description:
      "Classic and timeless, the Rolex Datejust is a watch for any occasion.",
    price: 7999.99,
    endprice: null,
    discount: null,
    img: image_1,
    filter: "new arrivals",
  },
  {
    id: "2",
    brand: "Omega",
    model: "Seamaster",
    title: "Omega Seamaster Diver 300M",
    quantity: 5,
    rate: 4.8,
    description:
      "A popular choice for divers and enthusiasts, the Omega Seamaster is a versatile watch with great durability and precision.",
    price: 5999.99,
    endprice: 4799.99,
    discount: 20,
    img: image_2,
    filter: "featured",
    images:[],
  },
  {
    id: "3",
    brand: "Cartier",
    model: "Tank Solo",
    title: "Cartier Tank Solo Large",
    quantity: 8,
    rate: 4.2,
    description:
      "A modern and stylish watch, the Cartier Tank Solo is a classic choice for any wardrobe.",
    price: 4999.99,
    endprice: null,
    discount: null,
    img: image_3,
    filter: "new arrivals",
    images:[],
  },
  {
    id: "4",
    brand: "TAG Heuer",
    model: "Carrera",
    title: "TAG Heuer Carrera Calibre 16",
    quantity: 3,
    rate: 4.7,
    description:
      "A sporty and elegant watch, the TAG Heuer Carrera is a perfect blend of performance and style.",
    price: 7499.99,
    endprice: 6499.99,
    discount: 13.3,
    img: image_4,
    filter: "top rated",
    images:[],
  },
  {
    id: "5",
    brand: "Breitling",
    model: "Navitimer",
    title: "Breitling Navitimer 01",
    quantity: 6,
    rate: 4.9,
    description:
      "The Breitling Navitimer is an iconic aviation watch with a timeless design and exceptional functionality.",
    price: 8999.99,
    endprice: null,
    discount: null,
    img: image_5,
    filter: "featured",
  },
  {
    id: "6",
    brand: "Patek Philippe",
    model: "Calatrava",
    title: "Patek Philippe Calatrava",
    quantity: 2,
    rate: 5,
    description:
      "A masterpiece of fine watchmaking, the Patek Philippe Calatrava is a symbol of elegance and refinement.",
    price: 24999.99,
    endprice: null,
    discount: null,
    img: image_1,
    filter: "top rated",
  },
  {
    id: "7",
    brand: "IWC",
    model: "Portugieser",
    title: "IWC Portugieser Automatic",
    quantity: 4,
    rate: 4.6,
    description:
      "The IWC Portugieser is a timeless classic with a distinct design and excellent performance.",
    price: 8499.99,
    endprice: 6999.99,
    discount: 17.6,
    img: image_2,
    filter: "featured",
  },
  {
    id: "8",
    brand: "Jaeger-LeCoultre",
    model: "Master Ultra Thin",
    title: "Jaeger-LeCoultre Master Ultra Thin Moon",
    quantity: 1,
    rate: 4.8,
    description:
      "The Jaeger-LeCoultre Master Ultra Thin Moon is a beautifully crafted watch with a classic design and exceptional craftsmanship.",
    price: 15999.99,
    endprice: null,
    discount: null,
    img: image_3,
    filter: "new arrivals",
  },
  {
    id: "9",
    brand: "Hublot",
    model: "Big Bang",
    title: "Hublot Big Bang Unico Titanium",
    quantity: 3,
    rate: 4.4,
    description:
      "The Hublot Big Bang is a bold and modern watch with a distinctive design and exceptional performance.",
    price: 11999.99,
    endprice: null,
    discount: null,
    img: image_4,
    filter: "top rated",
  },
  {
    id: "10",
    brand: "Panerai",
    model: "Luminor",
    title: "Panerai Luminor Marina",
    quantity: 7,
    rate: 4.5,
    description:
      "The Panerai Luminor is a durable and stylish watch with a unique design and excellent functionality.",
    price: 6999.99,
    endprice: null,
    discount: null,
    img: image_5,
    filter: "featured",
  },
  {
    id: "11",
    brand: "Audemars Piguet",
    model: "Royal Oak",
    title: "Audemars Piguet Royal Oak Selfwinding",
    quantity: 2,
    rate: 4.9,
    description:
      "The Audemars Piguet Royal Oak is an iconic watch with a distinctive design and exceptional performance.",
    price: 29999.99,
    endprice: null,
    discount: null,
    img: image_1,
    filter: "new arrivals",
  },
  {
    id: "12",
    brand: "Girard-Perregaux",
    model: "WW.TC",
    title: "Girard-Perregaux WW.TC Chronograph",
    quantity: 3,
    rate: 4.7,
    description:
      "The Girard-Perregaux WW.TC is a unique and sophisticated watch with a complex mechanism and a bold design.",
    price: 16999.99,
    endprice: null,
    discount: null,
    img: image_2,
    filter: "top rated",
  },
];


