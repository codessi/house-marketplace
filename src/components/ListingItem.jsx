import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";
import { ReactComponent as EditIcon } from "../assets/svg/editIcon.svg";

const ListingItem = ({ listing, id, onDelete, onEdit }) => {

  // console.log(listing)
  return (
    <>
      <Link to={`/category/${listing.type}/${id}`}>
        <div className="relative text-white">
          <img className="z-0 object-cover" src={listing?.imgUrls[0]} alt="" />
          <div className="absolute flex justify-between p-2 right-0 left-0 bottom-0 gap-2 z-10">
            <div>
              <div className="text-lg font-bold">${listing.regularPrice.toString()
                    .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}</div>
              {/*  .toString()
                    .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,") */}
              <div className="text-xs">{listing.location}</div>
            </div>
            <div className="flex divide-x ">
              <div className="px-1 flex flex-col items-center justify-center">
                <div>{listing.bedrooms}</div>
                <div>Bed</div>
              </div>
              <div className="px-1 flex flex-col items-center justify-center">
                <div>{listing.bathrooms}</div>
                <div>Bath</div>
              </div>
            </div>
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

      {onEdit && <EditIcon className="editIcon" onClick={() => onEdit(id)} />}
    </>
  );
};

export default ListingItem;
