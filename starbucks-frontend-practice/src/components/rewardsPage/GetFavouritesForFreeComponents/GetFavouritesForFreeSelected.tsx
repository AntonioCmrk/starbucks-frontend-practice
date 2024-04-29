import "./GetFavouritesForFreeSelected.css";
import image25 from "../../../assets/images/25.webp";
import image100 from "../../../assets/images/100.webp";
import image200 from "../../../assets/images/200.webp";
import image300 from "../../../assets/images/300.webp";
import image400 from "../../../assets/images/400.webp";

export const GetFavouritesForFreeSelected = ({ selectedStars }: any) => {
  return (
    <div className="get-favourites-for-free-selected">
      {selectedStars === "25" ? (
        <div className="get-favourites-for-free-selected-item">
          <img src={image25} alt="image25" height="200px" />
          <div className="get-favourites-for-free-selected-item-text">
            <div className="get-favourites-for-free-selected-item-title">
              Customize your drink
            </div>
            <div className="get-favourites-for-free-selected-item-subtext">
              Make your drink just right with an extra espresso shot, nondairy
              milk or a dash of your favorite syrup.
            </div>
          </div>
        </div>
      ) : null}
      {selectedStars === "100" ? (
        <div className="get-favourites-for-free-selected-item">
          <img src={image100} alt="image100" height="200px" />
          <div className="get-favourites-for-free-selected-item-text">
            <div className="get-favourites-for-free-selected-item-title">
              Brewed hot or iced coffee or tea, bakery item, packaged snack and
              more
            </div>
            <div className="get-favourites-for-free-selected-item-subtext">
              Treat yourself to an iced coffee, buttery croissant, bag of chips
              and more.
            </div>
          </div>
        </div>
      ) : null}
      {selectedStars === "200" ? (
        <div className="get-favourites-for-free-selected-item">
          <img src={image200} alt="image200" height="200px" />
          <div className="get-favourites-for-free-selected-item-text">
            <div className="get-favourites-for-free-selected-item-title">
              Handcrafted drink (Cold Brew, lattes and more) or hot breakfast
            </div>
            <div className="get-favourites-for-free-selected-item-subtext">
              Turn good mornings great with a delicious handcrafted drink of
              your choice, breakfast sandwich or oatmeal on us.
            </div>
          </div>
        </div>
      ) : null}
      {selectedStars === "300" ? (
        <div className="get-favourites-for-free-selected-item">
          <img src={image300} alt="image300" height="200px" />
          <div className="get-favourites-for-free-selected-item-text">
            <div className="get-favourites-for-free-selected-item-title">
              Sandwich, protein box or at-home coffee
            </div>
            <div className="get-favourites-for-free-selected-item-subtext">
              Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag
              of coffee—including Starbucks VIA Instant®.
            </div>
          </div>
        </div>
      ) : null}
      {selectedStars === "400" ? (
        <div className="get-favourites-for-free-selected-item">
          <img src={image400} alt="image400" height="200px" />
          <div className="get-favourites-for-free-selected-item-text">
            <div className="get-favourites-for-free-selected-item-title">
              Select Starbucks® merchandise
            </div>
            <div className="get-favourites-for-free-selected-item-subtext">
              Take home a signature cup, drink tumbler or your choice of coffee
              merch up to $20.
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
