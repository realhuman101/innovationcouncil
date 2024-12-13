"use client"

import React, { useState } from 'react'

import LogoImg from '@/imgs/logo.png'

function Header() {
	const [state, changeState] = useState(false);

	window.addEventListener('scroll', () => {changeState((document.documentElement.clientHeight ? document.documentElement : document.body).scrollTop != 0)});

	return (
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
		</div>
	)
}

export default Header