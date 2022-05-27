import HeroStyles from "./HeroStyles.css";
import heroBg from "../../assets/illustration-working.svg";

const Hero = () => {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url("${heroBg}")`,
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container">
          <div className="content">
            <h1>
              More than just
              <br /> shorter links
            </h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn-2">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
