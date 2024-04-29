import { EarningStars } from "../components/rewardsPage/EarningStars";
import { EndlessExtras } from "../components/rewardsPage/EndlessExtras";
import { GetFavouritesForFree } from "../components/rewardsPage/GetFavouritesForFree";
import { GettingStarted } from "../components/rewardsPage/GettingStarted";
import { JoinToStartEarningRewards } from "../components/rewardsPage/JoinToStartEarningRewards";
import { KeepTheRewardsComing } from "../components/rewardsPage/KeepTheRewardsComing";
import Questions from "../components/rewardsPage/Questions";
import "./Rewards.css";

export const Rewards = () => {
  return (
    <div>
      <div className="rewards-title">
        <div className="rewards-title-text">STARBUCKS® REWARDS</div>
      </div>
      <JoinToStartEarningRewards />
      <GettingStarted />
      <GetFavouritesForFree />
      <EndlessExtras />
      <EarningStars />
      <KeepTheRewardsComing />
      <Questions />
    </div>
  );
};
