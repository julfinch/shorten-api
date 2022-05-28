import BoostStyles from "./BoostStyles.css";
import bgDesktop from "../../assets/bg-boost-desktop.svg";
import bgMobile from "../../assets/bg-boost-mobile.svg";

const Boost = () => {
  return (
    <>
      <section className="boost">
        <div className="container">
          <picture>
            <source media="max-width: 768px" srcSet={bgMobile} />
            <img src={bgDesktop} alt="" />
          </picture>
          <div className="content boost-inner">
            <h2>Boost your links today</h2>
            <button className="btn-2">Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Boost;
