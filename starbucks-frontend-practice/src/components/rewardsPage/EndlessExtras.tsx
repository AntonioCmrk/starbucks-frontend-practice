import "./EndlessExtras.css";
import FunFreebiesImg from "../../assets/images/1-fun-freebies.webp";
import OrderAndPayAheadImg from "../../assets/images/2-order-and-pay-ahead.webp";
import GetToFreeFasterImg from "../../assets/images/3-get-to-free-faster.webp";

export const EndlessExtras = () => {
  return (
    <div className="endless-extras">
      <h2 className="endless-extras-title">Endless Extras</h2>
      <div className="endless-extras-text">
        Joining Starbucks® Rewards means unlocking access to exclusive benefits.
        Say hello to easy ordering, tasty Rewards and—yes, free coffee.
      </div>
      <div className="endless-extras-section">
        <div className="endless-extras-subsection">
          <img src={FunFreebiesImg} alt="FunFreebiesImg" height="120px" />
          <h3>Fun freebies</h3>
          <div className="endless-extras-subsection-text">
            Not only can you earn free coffee, look forward to a birthday treat
            plus coffee and tea refills.
          </div>
          <a href="#" className="green-link">
            Learn more
          </a>
        </div>
        <div>
          <div className="endless-extras-subsection">
            <img
              src={OrderAndPayAheadImg}
              alt="OrderAndPayAheadImg"
              height="120px"
            />
            <h3>Order & pay ahead</h3>
            <div className="endless-extras-subsection-text">
              Enjoy the convenience of in-store, curbside or drive-thru pickup
              at select stores.
            </div>
            <a href="#" className="green-link">
              Learn more
            </a>
          </div>
        </div>
        <div className="endless-extras-subsection">
          <img
            src={GetToFreeFasterImg}
            alt="GetToFreeFasterImg"
            height="120px"
          />
          <h3>Get to free faster</h3>
          <div className="endless-extras-subsection-text">
            Earn Stars even quicker with Bonus Star challenges, Double Star Days
            and exciting games.
          </div>
          <a href="#" className="green-link">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};
