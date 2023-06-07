"use client";

import React, { useRef, useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material/";

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

// Import Swiper styles
import "../../../node_modules/swiper/swiper.css";
import "../../../node_modules/swiper/swiper-bundle.css";

// import required modules
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import axios from "axios";
import ProductCard from "./ProductCard";

export default function ProductsSwiper({ word1, word2 = word1 }) {
	// get Featured Top
	const [products, setProducts] = useState([]);
	useEffect(() => {
		async function getProducts() {
			await axios
				.get("/assist/productsData/products.json")
				.then((res) => {
					setProducts(res.data);
					console.log(res.data);
				})
				.catch((error) => console.log(error));
		}
		getProducts();
	}, []);

	// handel swiper ----------------------
	SwiperCore.use([Navigation]);
	const useSwiperRef = () => {
		const [wrapper, setWrapper] = useState(null);
		const ref = useRef(null);

		useEffect(() => {
			if (ref.current) {
				setWrapper(ref.current);
			}
		}, []);

		return [wrapper, ref];
	};

	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const swipers = useSwiper();
	console.log(swipers);
	// swiper.on("slideChange", (e) => {
	//   setSlideProgress(e.progress);
	// });

	const [nextEl, nextElRef] = useSwiperRef();
	const [prevEl, prevElRef] = useSwiperRef();

	return (
		<Swiper
			spaceBetween={16}
			slidesPerView={3}
			loop
			navigation={{ prevEl, nextEl }}
			onInit={(swiper) => {
				swiper.params.navigation.prevEl = prevRef.current;
				swiper.params.navigation.nextEl = nextRef.current;
				swiper.navigation.update();
				console.log(prevRef.current);
			}}
			breakpoints={{
				320: { slidesPerView: 1.5 },
				991: { slidesPerView: 3.5 },
			}}
		>
			{/* prev button ------------------------------ */}
			<Button
				variant="contained"
				// color="shift"
				sx={{
					minWidth: "35px",
					height: 35,
					p: 0,
					position: "absolute",
					top: "50%",
					left: 0,
					transform: "translateY(-50%)",
					zIndex: 1,
				}}
				ref={prevElRef}
			>
				<KeyboardArrowLeft />
			</Button>
			{/* next button ------------------------------ */}
			<Button
				variant="contained"
				// color="shift"
				sx={{
					minWidth: "35px",
					height: 35,
					p: 0,
					position: "absolute",
					top: "50%",
					right: 0,
					transform: "translateY(-50%)",
					zIndex: 1,
				}}
				ref={nextElRef}
			>
				<KeyboardArrowRight />
			</Button>
			{products &&
				products.map(
					(item, i) =>
						(item.filter.includes(word1) ||
							item.filter.includes(word2)) && (
							<SwiperSlide key={`slide_${i}`}>
								{/* reusable Product card --------------------- */}
								<ProductCard item={item} />
							</SwiperSlide>
						)
				)}
		</Swiper>
	);
}
