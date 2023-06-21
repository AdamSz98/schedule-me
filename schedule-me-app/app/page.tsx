import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  //navot majd különszedni
  return (
    <>
      <header>
        <div className="logo_container">
          <Image src="/favicon.ico" width={30} height={30} alt="logo"></Image>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/" className="nav_link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="nav_link">
                Product
              </Link>
            </li>
            <li>
              <Link href="/" className="nav_link">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="nav_link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="nav_buttons">
          <button className="login_btn">Login</button>
          <button className="get_started">Get started</button>
        </div>
      </header>
      <main className={styles.main}>
        <div className="hero_content">
          <div className="title_container">
            <h1>
              Scheduling never been <br /> easier
            </h1>
          </div>
          <div className="main-text-container">
            <p className="main_text">
              Most calendars are designed for teams. Slate is <br /> designed
              for freelancers
            </p>
          </div>
        </div>
        <div className="hero_buttons">
          <button>Get started</button>
          <button>Introduction</button>
        </div>
      </main>
      <section className="image_section">
        <img
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="placeholder"
        />
      </section>
      <section className="more_info">
        <p>So easy</p>
        <h2>Never make a phone call again</h2>
        <p>Making an appointment with a blablabalabalaalalala</p>
      </section>
    </>
  );
}
