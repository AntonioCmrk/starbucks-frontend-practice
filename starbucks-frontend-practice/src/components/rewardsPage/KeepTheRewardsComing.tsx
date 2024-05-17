import "./KeepTheRewardsComing.css";
import Background from "../../assets/images/keep-rewards-comming-background.webp";
import LeftStars from "../../assets/images/left-stars.svg";
import RightStars from "../../assets/images/right-stars.svg";
import TopLeftStars from "../../assets/images/top-left-stars.svg";
import BottomRightStars from "../../assets/images/bottom-right-stars.svg";
import DeltaSkymilesImg from "../../assets/images/delta-skymiles.webp";
import BankOfAmericaImg from "../../assets/images/bank-of-america.webp";
import { useEffect, useState } from "react";

export const KeepTheRewardsComing = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        backgroundSize: "cover",
        padding: "2rem 2rem 2rem 2rem",
      }}
    >
      <div className="keep-the-rewards-coming">
        <div
          className="keep-the-rewards-coming-star-background"
          style={
            windowWidth > 768
              ? {
                  alignSelf: "left",
                  backgroundImage: `url(${LeftStars})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "50%",
                  backgroundSize: "auto 100%",
                }
              : {
                  alignSelf: "left",
                  backgroundImage: `url(${TopLeftStars})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10% 0%",
                  backgroundSize: "auto 100%",
                }
          }
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
          style={
            windowWidth > 768
              ? {
                  alignSelf: "right",
                  backgroundImage: `url(${RightStars})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "50%",
                  backgroundSize: "auto 100%",
                }
              : {
                  alignSelf: "right",
                  backgroundImage: `url(${BottomRightStars})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "90% 0%",
                  backgroundSize: "auto 90%",
                }
          }
        ></div>
      </div>
    </div>
  );
};
