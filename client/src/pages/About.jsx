import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <h1>
                {user && user.username
                  ? `Welcome, ${user.username} to Coding Champs`
                  : "Welcome to Coding Champs"}
              </h1>
              <p>
                {" "}
                **Expertise**: Our team of skilled developers and educators
                stays current with the latest coding trends to offer you
                practical, real-world knowledge.{" "}
              </p>{" "}
              <p>
                {" "}
                **Customization**: We understand every learner is unique. Our
                personalized learning paths help you master the skills that
                matter most to you.{" "}
              </p>{" "}
              <p>
                {" "}
                **Student-Centric Approach**: Your success is our priority. We
                provide dedicated support to guide you through your coding
                journey.{" "}
              </p>{" "}
              <p>
                {" "}
                **Affordability**: Get high-quality coding education at
                competitive prices. We ensure our courses maintain excellent
                standards without breaking the bank.{" "}
              </p>{" "}
              <p>
                {" "}
                **Reliability**: We’re here when you need us, offering
                consistent access to resources and support to keep you on track
                with your coding goals.{" "}
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink >
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
