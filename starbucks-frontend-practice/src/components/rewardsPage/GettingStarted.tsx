import "./GettingStarted.css";
import gettingStarted1 from "../../assets/images/getting-started-1@2x.webp";
import gettingStarted2 from "../../assets/images/getting-started-2@2x.webp";
import gettingStarted3 from "../../assets/images/getting-started-3@2x.webp";

export const GettingStarted = () => {
  return (
    <div className="rewards-second-section">
      <h2>Getting started is easy</h2>
      <div style={{ fontSize: "1.1rem" }}>
        Earn Stars and get rewarded in a few easy steps.
      </div>
      <div className="rewards-second-section-subsections">
        <div className="rewards-second-section-subsection">
          <img src={gettingStarted1} width={48} />
          <h3>Create an account</h3>
          <div>
            To get started,{" "}
            <a href="#" className="green-link">
              join now
            </a>
            . You can also{" "}
            <a href="#" className="green-link">
              join in the app
            </a>{" "}
            to get access to the full range of Starbucks® Rewards benefits.
          </div>
        </div>
        <div className="rewards-second-section-subsection">
          <img src={gettingStarted2} width={48} />
          <h3>Order and pay how you’d like</h3>
          <div>
            Use cash, credit/debit card or save some time and pay right through
            the app. You’ll collect Stars all ways.{" "}
            <a href="#" className="green-link">
              Learn how
            </a>
          </div>
        </div>
        <div className="rewards-second-section-subsection">
          <img src={gettingStarted3} width={48} />
          <h3>Earn Stars, get Rewards</h3>
          <div>
            As you earn Stars, you can redeem them for Rewards—like free food,
            drinks, and more. Start redeeming with as little as 25 Stars!
          </div>
        </div>
      </div>
    </div>
  );
};
