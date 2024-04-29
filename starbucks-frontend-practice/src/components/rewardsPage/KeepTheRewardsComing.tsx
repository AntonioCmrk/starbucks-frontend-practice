import "./KeepTheRewardsComing.css";
import Background from "../../assets/images/keep-rewards-comming-background.webp";
import LeftStars from "../../assets/images/left-stars.svg";
import RightStars from "../../assets/images/right-stars.svg";
import DeltaSkymilesImg from "../../assets/images/delta-skymiles.webp";
import BankOfAmericaImg from "../../assets/images/bank-of-america.webp";

export const KeepTheRewardsComing = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        padding: "2rem 2rem 2rem 2rem",
      }}
    >
      <div className="keep-the-rewards-coming ">
        <div
          className="keep-the-rewards-coming-star-background"
          style={{
            backgroundImage: `url(${LeftStars})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50%",
            backgroundSize: "auto 100%",
          }}
        ></div>
        <div className="keep-the-rewards-coming-body">
          <h2 className="keep-the-rewards-coming-title">
            Keep the Rewards Coming
          </h2>
          <div className="keep-the-rewards-coming-text">
            The Rewards don't stop at your morning coffee. Join Starbucks®
            Rewards and unlock perks from our partners, all while earning more
            Stars.
          </div>
          <div className="keep-the-rewards-coming-section">
            <div className="keep-the-rewards-coming-item">
              <img height={100} src={DeltaSkymilesImg} alt="DeltaSkymilesImg" />
              <div>
                <a href="#" className="green-link">
                  Link your Delta SkyMiles®
                </a>{" "}
                and Starbucks® Rewards accounts to earn 1 mile per $1 spent at
                Starbucks and double Stars on Delta travel days.
              </div>
            </div>
            <div className="keep-the-rewards-coming-item">
              <img height={100} src={BankOfAmericaImg} alt="BankOfAmericaImg" />
              <div>
                <a href="#" className="green-link">
                  Link your Bank of America
                </a>{" "}
                eligible card and Starbucks® Rewards account to earn 2% Cash
                Back and Bonus Stars on qualifying Starbucks in-app purchases.
              </div>
            </div>
          </div>
          <button className="btn green-btn keep-the-rewards-coming-btn">
            Join Starbucks® Rewards
          </button>
        </div>
        <div
          className="keep-the-rewards-coming-star-background"
          style={{
            backgroundImage: `url(${RightStars})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50%",
            backgroundSize: "auto 100%",
          }}
        ></div>
      </div>
    </div>
  );
};