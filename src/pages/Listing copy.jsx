import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase.config";
import Spinner from "../components/Spinner";
import shareIcon from "../assets/svg/shareIcon.svg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Thumbs,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

const Listing = () => {
  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
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
    <main className="mx-auto p-5 px-10 space-y-4">
      <div className="flex justify-around border-2 border-indigo-400 px-24">
        <div className="w-2/3  border  gap-9">
          <Swiper 
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            className="border-2  border-red-500 items-center "
          >
            {listing?.imgUrls.map((url, index) => (
              <SwiperSlide className=" border-2 border-yellow-600" key={index}>
                <img className="w-full object-cover"  src={url} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            slidesPerView={5}
            freeMode={true}
            watchSlidesVisibility={true}
            watchSlidesProgress={true}
            className=" bg-blue-400 "
          >
            {listing?.imgUrls.map((url, index) => (
              <SwiperSlide key={index} className="">
                <div
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                  className=" bg-yellow-400 h-32 w-32"
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full p-10 border border-blue-500">
          {/* <div
          className="shareIconDiv"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setShareLinkCopied(true);
            setTimeout(() => setShareLinkCopied(false), 2000);
          }}
        >
          <img src={shareIcon} alt="share" />
        </div>
        {shareLinkCopied && <p className="linkCopied">Link Copied</p>} */}
          <div className="">
            <div className="listingDetails">
              <p className="listingName">
                {listing?.name}- $
                {listing?.offer
                  ? listing.discountedPrice
                      .toString()
                      .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")
                  : listing?.regularPrice
                      .toString()
                      .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}
              </p>
              <p className="listingLocation">{listing.address}</p>
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
            </div>
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
      </div>

      <div className="flex justify-around gap-3">
        <ul className="text-lg space-y-2   bg-slate-100  p-5">
          <li>Beautiful Mid Century Home.</li>
          <li>
            This secluded home is nestled in the much sought after hills of
            Glassell Park.
          </li>
          <li>
            Three bedrooms and two and a half bathrooms with hard wood floors
            and gorgeous open plan layout with high ceilings make this a very
            attractive home.
          </li>
          <li>
            {" "}
            Outside space for entertaining, garage and separate laundry room.
          </li>
          <li>Garden is landscaped with mature trees and has great privacy.</li>
          <li>
            Mount Washington Elementary and Eagle Rock Middle and High School.
            Wonderful location!
          </li>
        </ul>

        <div className="leafletContainer-listing h-96 w-[50vw]">
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
            <Marker
              position={[listing?.geolocation?.lat, listing.geolocation.lng]}
            >
              <Popup>{listing?.location}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </main>
  );
};

export default Listing;
