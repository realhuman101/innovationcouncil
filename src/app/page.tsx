import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>

      <div id={styles.hero}>
        <video src="/heroVideo.mp4" disablePictureInPicture playsInline autoPlay loop muted/>
        <div id={styles.heroTitles}>
          <h1>Student</h1>
          <h1>Innovation</h1>
          <h1>Council</h1>
        </div>
        <button>Join Us Now!</button>
      </div>

      <div id={styles.purpose}>
         
      </div>
      {/* <Footer/> */}
    </div>
  );
}
