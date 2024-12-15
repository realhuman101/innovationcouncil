import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParallaxText from "@/components/ParallaxText";

import missionIcon from "@/imgs/icon-mission.svg";
import visionIcon from "@/imgs/icon-vision.svg";

import purposeImg from '@/imgs/purpose.webp'
import { p } from "framer-motion/client";

export default function Home() {
	return (
		<div className={styles.page}>
			<Header/>

			<section id={styles.hero} className="blueBg">
				<video src="/heroVideo.mp4" disablePictureInPicture playsInline autoPlay loop muted/>
				<div id={styles.heroTitles}>
					<h1>Student</h1>
					<h1>Innovation</h1>
					<h1>Council</h1>
				</div>
				<button>Join Us Now!</button>
			</section>

			<section id={styles.purpose} style={{backgroundImage: `url(${purposeImg.src})`}}>
					<div>
						<div>
							<img src={missionIcon.src} />
							<h1>Our Purpose</h1>
							<p>sdf</p>
						</div>
						<div>
							<h1>Our Purpose</h1>
							<p>sdf</p>
						</div>
						<div>
							<img src={visionIcon.src} />
							<h1>Our Purpose</h1>
							<p>sdf</p>
						</div>
					</div>
					<div>
						<p>INNOVATION COUNCIL</p>
						<div>
							<img src={missionIcon.src}/>
							<a href="https://maps.app.goo.gl/e1qpsafGD8u6bGaM8" target="_blank">Hong Kong</a>
						</div>
						<div>
							<img src={missionIcon.src}/>
							<a href="" target="_blank">@Innocouncil</a>
						</div>
						<div>
							<img src={missionIcon.src}/>
							<a href="/">innocouncil.com</a>
						</div>
					</div>
			</section>

			<section id={styles.projects}>
				<h1>OUR PROJECTS</h1>
				<div>
					<div></div>
				</div>
			</section>

			<section id={styles.schedule}>
				<h1>SCHEDULE</h1>
			</section>

			<section id={styles.keyWords}>
				<ParallaxText baseVelocity={5}>
					<p>Design</p>
					<img src={missionIcon.src} />
					<p>Business</p>
				</ParallaxText>
				<ParallaxText baseVelocity={-5}>
					<p>Engineering</p>
					<img src={missionIcon.src} />
					<img src={missionIcon.src} />
				</ParallaxText>
				<ParallaxText baseVelocity={5}>
					<p>Science</p>
					<img src={missionIcon.src} />
					<img src={missionIcon.src} />
					<p>Technology</p>
				</ParallaxText>
				<ParallaxText baseVelocity={-5}>
					<img src={missionIcon.src} />
					<img src={missionIcon.src} />
					<p>Economics</p>
				</ParallaxText>
			</section>

			{/* <Footer/> */}
		</div>
	);
}
