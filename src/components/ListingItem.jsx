import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";
import {ReactComponent as EditIcon} from '../assets/svg/editIcon.svg'

const ListingItem = ({ listing, id, onDelete, onEdit }) => {

  return (
    <li className="categoryListing">
      <Link to={`/category/${listing.type}/${id}`} className="categoryListingLink">
       { listing.imgUrls !== undefined && <img
            className="categoryListingImg"
            src={listing?.imgUrls[0]}
            alt={listing.name}
          />}
          
          <div className="categoryListingDetails">
            <p className="categoryListingLocation">{listing.location}</p>
            <p className="categoryListingName">{listing.name}</p>
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

      {onEdit && (
        <EditIcon className="editIcon" onClick={() => onEdit(id)}/>
      )}
    </li>
  );
};

export default ListingItem;
