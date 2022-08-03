import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";

const ListingItem = ({ listing, id, onDelete }) => {
  console.log(listing);
  return (
    <li className="categoryListing">
      <Link to={`/category/${listing.type}`} className="categoryListingLink">
       
          <img
            className="categoryListingImg"
            src={listing.imageUrls[0]}
            alt={listing.name}
          />
          <div className="categoryListingDetails">
            <p className="categoryListingLocation">{listing.location}</p>
            <p className="catetgoryListingName">{listing.name}</p>
            <p className="categoryListingPrice">
              $
              {listing.offer
                ? listing.discountedPrice
                    .toString()
                    .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")
                : listing.regularPrice
                    .toString()
                    .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}
              {listing.type === "rent" && " / Month"}
            </p>

            <div className="categoryListingInfoDiv">
              <img src={bedIcon} alt="bed" />
              <p className="categoryListingInfoText">
                {listing.bedroom > 1
                  ? `${listing.bedrooms} Bedrooms`
                  : "1 Bedroom"}
              </p>

              <img src={bathtubIcon} alt="bathroom" />
              <p className="categoryListingInfoText">
                {listing.bathroom > 1
                  ? `${listing.bathrooms} Bathrooms`
                  : "1 Bathroom"}
              </p>
            </div>
          </div>
      
      </Link>

      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231,76,60)"
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}
    </li>
  );
};

export default ListingItem;
