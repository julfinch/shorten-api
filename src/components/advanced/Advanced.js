import AdvancedStyles from "./AdvancedStyles.css";
import Shortener from "../shortener/Shortener";

const Advanced = () => {
  return (
    <>
      <section className="advanced-section">
        <Shortener />

        <div className="advanced">
          <div className="container">
            <div className="content">
              <div className="stats">
                <h2>Advanced Statistics</h2>
                <p>
                  Track how your links are performing across the web with our
                  advanced statistics dashboard.
                </p>
              </div>
              <div className="card-container">
                <div className="cards">
                  <h3>Brand Recognition</h3>
                  <p>
                    Boost your brand recognition with each click. Generic links
                    don't mean a thing. Branded links help instil confidence in
                    your content.
                  </p>
                </div>
                <div className="cards">
                  <h3>Detailed Records</h3>
                  <p>
                    Gain insights into who is clicking your links. Knowing when
                    and where people engage with your content helps inform
                    better decisions.
                  </p>
                </div>
                <div className="cards">
                  <h3>Fully Customizable</h3>
                  <p>
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advanced;
