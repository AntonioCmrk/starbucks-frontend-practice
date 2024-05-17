import "./JoinToStartEarningRewards.css";
import Background from "../../assets/images/xl-hero-desktop_2021.webp";
import { useEffect, useState } from "react";

export const JoinToStartEarningRewards = () => {
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
      className="join-to-start-earning-rewards"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
        backgroundSize: "auto 100%",
        display: "flex",
      }}
    >
      <div style={{ width: "60%" }}>
        <div className="join-to-start-earning-rewards-title">
          FREE COFFEE IS A TAP AWAY
        </div>
        <div className="join-to-start-earning-rewards-text-1">
          Join now to start earning Rewards.
        </div>
        <button className="btn green-btn join-to-start-earning-rewards-btn">
          {windowWidth > 768 ? "Join now" : "Join in the app"}
        </button>
        <div className="join-to-start-earning-rewards-text-2">
          {windowWidth > 768 ? "Or " : ""}
          <a className="join-to-start-earning-rewards-link" href="#">
            {windowWidth > 768 ? "Or join online" : "join in the app"}
          </a>{" "}
          {windowWidth > 768 ? "for the best experience" : ""}
        </div>
      </div>
    </div>
  );
};
