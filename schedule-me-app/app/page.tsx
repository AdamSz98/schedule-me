import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
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
          <button className="login_btn">
            <Link href={"/login"}>Login</Link>
          </button>
          <button className="get_started">
            {" "}
            <Link href={"/register"}>Get started</Link>
          </button>
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
        <div className="text_content">
          <p className="small_text">So easy</p>
          <h2 className="headline">Never make a phone call again</h2>
          <p className="section_text">
            Making an appointment with a blablabalabalaalalala
          </p>
        </div>
        <div className="section_buttons">
          <button className="section_button">
            <span> Download</span>
          </button>
          <button className="section_button lighter">
            <span>Annything really</span>
          </button>
        </div>
      </section>
      <section className="blog_content">
        <div className="content">
          <div className="blog_text_content">
            <p className="blog_title">ScheduleMe features</p>
            <p className="blog_introduction">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <Link href="/" className="blog_link">
              Learn more
            </Link>
          </div>
          <div className="blog_image">
            <Image
              src="/blog_calendar.avif"
              width={516}
              height={350}
              alt="Calendar blog image"
            ></Image>
          </div>
        </div>
      </section>
      <section className="blog_content">
        <div className="content reverse">
          <div className="blog_text_content">
            <p className="blog_title">ScheduleMe features</p>
            <p className="blog_introduction">
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </p>
            <Link href="/" className="blog_link">
              Learn more
            </Link>
          </div>
          <div className="blog_image">
            <Image
              src="/blog_calendar.avif"
              width={516}
              height={350}
              alt="Calendar blog image"
            ></Image>
          </div>
        </div>
      </section>
      <section className="another_cta">
        <div className="another_cta_content">
          <h1 className="another_cta_heading">A rethink of how we work</h1>
          <p className="another_cta_text">
            Being a freelancer is a rollercoaster of emotions. We built Slate to
            keep your
          </p>
          <div>
            <div className="progress_bar">
              <div className="progress"></div>
              <div className="progress_remaining"></div>
            </div>
            <div className="progress_title">
              <p>Title</p>
              <p>50%</p>
            </div>
          </div>
          <button className="cta_button">Just do it lol</button>
        </div>
      </section>
      <section className="pricing">
        <div className="pricing_content">
          <div className="pricing_text_content">
            <div className="pricing_headline">
              <p>Pricing</p>
            </div>
            <div className="pricing_text">
              <p>
                Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their schedule.
              </p>
            </div>
          </div>
          <div className="pricing_text_content second_content">
            <div className="pricing_sub_title">
              <p>Ide is akarmi</p>
            </div>
            <div className="pricing_info">
              <div className="pricing_info_head">
                <p>0$</p>
              </div>
              <div className="pricing_info_sub">
                <p>/month per user</p>
              </div>
            </div>
            <div className="pricing_text pricing_text_b">
              <p>Most calendars are designed for teams. </p>
            </div>
            <button className="cta_button">Just do it lol</button>
          </div>
        </div>
      </section>
      <section className="more_info_b">
        <div className="more_info_content">
          <div className="more_info_text_block">
            <div className="more_info_title_text">
              <p>We focus on ergonomic meeting</p>
            </div>
          </div>
          <div className="more_info_text_row">
            <div className="row_text">
              <p>
                Being a freelancer is a rollercoaster of emotions. We built
                Slate to keep your freelance business building...
              </p>
              <p>
                Being a freelancer is a rollercoaster of emotions. We built
                Slate to keep your freelance business building...
              </p>
            </div>
            <button className="cta_button">Just do it lol</button>
          </div>
        </div>
      </section>
      <section className="footer"></section>
    </>
  );
}
