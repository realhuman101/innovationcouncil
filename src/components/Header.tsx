"use client"

import React, { useLayoutEffect, useState, useEffect } from 'react'

import LogoImg from '@/imgs/logo.png'

function Header() {
	const [state, changeState] = useState(false);
	const [size, setSize] = useState([0, 0]);
	const [hState, setHState] = useState(false);

	window.addEventListener('scroll', () => {changeState((document.documentElement.clientHeight ? document.documentElement : document.body).scrollTop != 0)});

	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener('resize', updateSize);
	}, []);

	return (
		size[0] >= 845 ? 
		
		// Main Header
		<div id="header" 
			style={state ? {
				backgroundColor: "rgba(255, 255, 255, 0.8)",
				color: "var(--foreground)",
				backdropFilter: "blur(10px)"
			} : {
				backgroundColor: "transparent",
				color: "var(--background)",
				backdropFilter: "none",
			}}
		>
			<div>
				<img src={LogoImg.src} alt="Innovation Council Logo" width="45" height="45"/>
			</div>
			<div>
				<a href="">Positions Open</a>
				<a href="">Projects</a>
				<a href="">Leaderboard</a>
				<a href="">Schedule</a>
				<a href="">Get In Touch</a>
			</div>
		</div> :
		
		// Mobile Header
		<div id="header">
			<div>
				<img src={LogoImg.src} alt="Innovation Council Logo" width="45" height="45"/>
			</div>
			<div>
				<div id="hamburger">
					<label id="hamburgerIcon">
						<input type="checkbox" />
						<svg viewBox="0 0 32 32">
							<path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
							<path className="line" d="M7 16 27 16"></path>
						</svg>
					</label>
				</div>
			</div>
		</div>
	)
}

export default Header