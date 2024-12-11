import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import heroImg from '@/imgs/hero.png'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>

      <div id={styles.hero}>
        <div id={styles.heroTitles}>
          <h1>Student</h1>
          <h1>Innovation</h1>
          <h1>Council</h1>
        </div>
        <button>Join Us Now!</button>
      </div>

      <div id={styles.purpose}>
          <h2>The Interschool Student Innovation Council</h2>
          <p>Are you interested in making an impact on our community?</p>
          <p/>
          <p><b>Sign up to connect with like-minded high school students & professionals in your fields of interest</b> to <b>create large events</b> and <b>impactful projects</b>. Apply as subject leaders to turn <b>research into workshops</b> in our upcoming innovative scholar's program. Other initiatives will be available to <b>earn credits for awards.</b></p>
          <p/>
          <p>Sign up with our forms below, before <b>Dec 12th</b></p>
      </div>

      <Footer/>
    </div>
  );
}
