import "./EarningStars.css";
import a1 from "../../assets/images/1A.png";
import b1 from "../../assets/images/1B.webp";
import a2 from "../../assets/images/2A.png";
import b2 from "../../assets/images/2B.webp";

export const EarningStars = () => {
  return (
    <div className="earning-stars">
      <h2>Cash or card, you earn Stars</h2>
      <div className="earning-stars-text">
        No matter how you pay, you can earn Stars with your morning coffee.
        Those Stars add up to (really delicious) Rewards.
      </div>
      <div className="earning-stars-content">
        <div className="earning-stars-content-section">
          <div>
            <div className="earning-stars-content-section-title">
              1★ per dollar
            </div>
            <div className="earning-stars-content-section-text">
              Pay as you go
            </div>
          </div>
          <div className="earning-stars-content-box">
            <div className="earning-stars-content-subsection">
              <img src={a1} alt="a1" height="160px" />
              <div className="earning-stars-content-subsection-item">
                <div className="earning-stars-content-subsection-title">
                  Scan and pay separately
                </div>
                <div>Use cash or credit/debit card at the register.</div>
              </div>
            </div>
            <div className="earning-stars-content-subsection">
              <img src={b1} alt="b1" height="160px" />
              <div className="earning-stars-content-subsection-item">
                <div className="earning-stars-content-subsection-title">
                  Save payment in the app
                </div>
                <div>
                  Check-out faster by saving a credit/debit card or PayPal to
                  your account. You’ll be able to order ahead or scan and pay at
                  the register in one step.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ maxWidth: 1400, opacity: 0.25 }} />
      <div className="earning-stars-content">
        <div className="earning-stars-content-section">
          <div>
            <div className="earning-stars-content-section-title">
              2★ per dollar
            </div>
            <div className="earning-stars-content-section-text">
              Add funds in the app
            </div>
          </div>
          <div className="earning-stars-content-box">
            <div className="earning-stars-content-subsection">
              <img src={a2} alt="a2" height="160px" />
              <div className="earning-stars-content-subsection-item">
                <div className="earning-stars-content-subsection-title">
                  Preload
                </div>
                <div>
                  To save time and earn Stars twice as fast, add money to your
                  digital Starbucks Card using any payment option. Scan and pay
                  in one step or order ahead in the app.
                </div>
              </div>
            </div>
            <div className="earning-stars-content-subsection">
              <img src={b2} alt="b2" height="160px" />
              <div className="earning-stars-content-subsection-item">
                <div className="earning-stars-content-subsection-title">
                  Register your gift card
                </div>
                <div>
                  Then use it to pay through the app. You can even consolidate
                  balances from multiple cards in one place.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
