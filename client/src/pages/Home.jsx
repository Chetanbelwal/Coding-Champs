import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the World Best Coding Tutors</p>
              <h1>Welcome to Coding Champs</h1>
              <p>
                Empowering Your Learning Journey with Expert-Led Courses &
                Professional Services. At Coding Champs, we provide top-notch
                courses and services designed to help you achieve your goals.
                Whether you're looking to upskill, start a new career, or
                enhance your business with our specialized services, we have
                something for everyone.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              {" "}
              Ready to elevate your skills and drive success? Connect with us
              today for a personalized consultation and discover how [Your
              Website Name] can empower you with top-tier courses and services
              designed to fuel your growth in today's fast-paced world.{" "}
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
