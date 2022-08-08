import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase.config";
import Spinner from "../components/Spinner";
import shareIcon from "../assets/svg/shareIcon.svg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Listing = () => {
  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      console.log("useEffect");

      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
console.log('docSnap.exists() ', docSnap.exists())
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setListing(docSnap.data());
        setLoading(false);
      }
    };
    fetchListing();
  }, [navigate, params.listingId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      <div
        className="shareIconDiv"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => setShareLinkCopied(false));
        }}
      >
        <img src={shareIcon} alt="share" />
      </div>
      {shareLinkCopied && <p className="linkCopied">Link Copied</p>}
      <div className="listingDetail">
        <p className="listingName">
          {listing?.name}-
          {listing?.offer
            ? listing.discountedPrice
                .toString()
                .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")
            : listing.regularPrice
                .toString()
                .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}
        </p>
        <p className="listingType">
          {listing.type === "rent" ? "Rent" : "Sale"}
        </p>
        {listing.offer && (
          <p className="discoutPrice">
            ${listing.regularPrice - listing.discountedPrice} discount
          </p>
        )}
        <ul className="listingDetailsList">
          <li>
            {listing.bedrooms > 1
              ? `${listing.bedrooms} Bedrooms`
              : "1 Bedroom"}
          </li>
          <li>
            {listing.bathrooms > 1
              ? `${listing.bathrooms} Bathrooms`
              : "1 Bathroom"}
          </li>
          <li>{listing.parking && "Parking Spot"}</li>
          <li>{listing.furnished && "Furnished"}</li>
        </ul>
        <p className="listingLocationTitle">location</p>
        <div className="leafletContainer">
          <MapContainer
            style={{ height: "100%", width: "100%" }}
            center={[listing.geolocation.lat, listing.geolocation.lng]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[listing.geolocation.lat, listing.geolocation.lng]}>
              <Popup>
                {listing.location}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        {auth.currentUser?.uid !== listing.userRef && (
          <Link
            className="primaryButton"
            to={`/contact/${listing.userRef}?listingName=${listing.name}`}
          >
            Contact Landlord
          </Link>
        )}
      </div>
    </main>
  );
};

export default Listing;

// route
