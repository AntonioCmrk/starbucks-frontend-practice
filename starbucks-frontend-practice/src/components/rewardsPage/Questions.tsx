import "./Questions.css";
import { TbExternalLink } from "react-icons/tb";

const Questions = () => {
  return (
    <div>
      <div>
        <div className="questions">
          <div className="questions-title">Questions?</div>
          <div className="questions-text">
            We want to help in any way we can. You can ask your barista anytime
            or we’ve answered the most commonly asked questions
            <a href="#" className="green-link">
              {" "}
              right over here
            </a>
            <a href="#" style={{ color: "var(--green)" }}>
              <TbExternalLink />
            </a>
            .
          </div>
        </div>
        <div className="questions-gray-section">
          <div className="questions-gray-section-text">
            <div>
              <div style={{ paddingBlock: "0.4rem" }}>
                At participating stores. Restrictions apply.
              </div>{" "}
              <div style={{ paddingBlock: "0.4rem" }}>
                <sup>1</sup>Excludes taxes and gratuities. At participating
                stores. Some restrictions apply. Flights purchased close to
                departure may not earn double Stars. Stars and miles may not be
                earned on purchases of alcohol, Starbucks Cards and Starbucks
                Card reloads. For details, visit{" "}
                <a href="#" className="green-link">
                  deltastarbucks.com/terms
                </a>
                <a href="#" style={{ color: "var(--green)" }}>
                  <TbExternalLink />
                </a>
                .↩
              </div>
              <div>
                <sup>2</sup>At participating stores only. Some restrictions
                apply. Linked Card members will earn 2% Cash Back on the full
                purchase price of every Qualifying Purchase. Extra Star offer
                excludes taxes and tips. Stars may not be earned on purchases of
                alcohol or on reloads of Starbucks Cards that are not
                registered. For details, visit{" "}
                <a href="#" className="green-link">
                  Terms and Conditions
                </a>
                <a href="#" style={{ color: "var(--green)" }}>
                  <TbExternalLink />
                </a>
                . Bank of America, N.A. Member FDIC.↩
              </div>
            </div>
            <div>
              <div>
                <div className="questions-gray-section-item-box">
                  <div>
                    <div className="questions-gray-section-item-title">
                      EARNING STARS
                    </div>
                    <div className="questions-gray-section-item-text">
                      Stars cannot be earned on purchases of alcohol, Starbucks
                      Cards or Starbucks Card reloads. <br /> <br />
                      Earn 1 Star per $1 spent when you scan your member barcode
                      in the app, then pay with cash, credit/debit cards or
                      mobile wallets at participating stores. You can also earn
                      1 Star per $1 spent when you link a payment method and pay
                      directly through the app.
                      <br /> <br /> Earn 2 Stars per $1 spent when you load
                      funds and pay with your digital Starbucks Card in the app.
                      You can also earn 2 Stars per $1 spent when you pay
                      in-person at a participating store with your registered
                      physical Starbucks Card or scan your member barcode in the
                      app, and then use any physical Starbucks Card (regardless
                      of whether it is registered) to complete the purchase.
                    </div>
                  </div>
                  <div>
                    <div className="questions-gray-section-item-title">
                      TERMS OF USE
                    </div>
                    <div className="questions-gray-section-item-text">
                      For full program details visit{" "}
                      <a href="#" className="green-link">
                        starbucks.com/rewards/terms
                      </a>
                      <a href="#" style={{ color: "var(--green)" }}>
                        <TbExternalLink />
                      </a>
                      . <br /> <br />
                      Starbucks® Rewards benefits are available at participating
                      Starbucks stores. Not all stores have the ability to honor
                      Rewards at this time. Visit the{" "}
                      <a href="#" className="green-link">
                        Starbucks Store Locator
                      </a>{" "}
                      <a href="#" style={{ color: "var(--green)" }}>
                        <TbExternalLink />
                      </a>
                      and search for locations honoring “Redeem Rewards”.
                    </div>
                  </div>
                </div>
                <div className="questions-gray-section-item-box">
                  <div>
                    <div className="questions-gray-section-item-title">
                      BENEFITS
                    </div>
                    <div className="questions-gray-section-item-text">
                      Free refills available during same in-store visit only. To
                      qualify for the Birthday Reward, you must have made at
                      least one Star-earning transaction.
                    </div>{" "}
                  </div>
                  <div>
                    <div className="questions-gray-section-item-title">
                      REDEEMING REWARDS
                    </div>
                    <div className="questions-gray-section-item-text">
                      Rewards cannot be redeemed for alcoholic beverages or
                      multi-serve items. You pay the difference for any beverage
                      customization over $1 and/or merchandise item over $20.
                      Not all stores honor tiered Rewards. Select stores redeem
                      200 Stars for free food or drink items only.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
