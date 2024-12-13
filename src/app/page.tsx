import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import purposeImg from '@/imgs/purpose.webp'

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
							<h1>Our Purpose</h1>
							<p>sdf</p>
						</div>
					</div>
					<div></div>
			</section>
			{/* <Footer/> */}
		</div>
	);
}
