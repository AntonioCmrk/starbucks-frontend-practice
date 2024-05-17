import "./JoinToStartEarningRewards.css";
import Background from "../../assets/images/xl-hero-desktop_2021.webp";

export const JoinToStartEarningRewards = () => {
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
          {window.innerWidth > 768 ? "Join now" : "Join in the app"}
        </button>
        <div className="join-to-start-earning-rewards-text-2">
          {window.innerWidth > 768 ? "Or " : ""}
          <a className="join-to-start-earning-rewards-link" href="#">
            {window.innerWidth > 768 ? "Or join online" : "join in the app"}
          </a>{" "}
          {window.innerWidth > 768 ? "for the best experience" : ""}
        </div>
      </div>
    </div>
  );
};
