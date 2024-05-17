import { useState } from "react";
import "./GetFavouritesForFree.css";
import { GetFavouritesForFreeSelected } from "./GetFavouritesForFreeComponents/GetFavouritesForFreeSelected";

export const GetFavouritesForFree = () => {
  const [selectedStars, setSelectedStars] = useState<
    "25" | "100" | "200" | "300" | "400"
  >("25");
  return (
    <>
      <div className="get-favourites-for-free">
        <h2>Get your favorites for free</h2>
        <div className="get-favourites-for-free-selector">
          <ul className="menu-tabs-stars">
            <li
              className={selectedStars === "25" ? "selected-stars" : ""}
              onClick={() => setSelectedStars("25")}
            >
              <span className="get-favourites-for-free-selector-numbers">
                25
              </span>
              <span aria-hidden="true" className="color-gold text-xs">
                ★
              </span>
            </li>
            <li
              className={selectedStars === "100" ? "selected-stars" : ""}
              onClick={() => setSelectedStars("100")}
            >
              <span className="get-favourites-for-free-selector-numbers">
                100
              </span>
              <span aria-hidden="true" className="color-gold text-xs">
                ★
              </span>
            </li>
            <li
              className={selectedStars === "200" ? "selected-stars" : ""}
              onClick={() => setSelectedStars("200")}
            >
              <span className="get-favourites-for-free-selector-numbers">
                200
              </span>
              <span aria-hidden="true" className="color-gold text-xs">
                ★
              </span>
            </li>
            <li
              className={selectedStars === "300" ? "selected-stars" : ""}
              onClick={() => setSelectedStars("300")}
            >
              <span className="get-favourites-for-free-selector-numbers">
                300
              </span>
              <span aria-hidden="true" className="color-gold text-xs">
                ★
              </span>
            </li>
            <li
              className={selectedStars === "400" ? "selected-stars" : ""}
              onClick={() => setSelectedStars("400")}
            >
              <span className="get-favourites-for-free-selector-numbers">
                400
              </span>
              <span aria-hidden="true" className="color-gold text-xs">
                ★
              </span>
            </li>
          </ul>
        </div>
      </div>
      <GetFavouritesForFreeSelected selectedStars={selectedStars} />
    </>
  );
};
