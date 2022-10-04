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
      <div className="flex justify-around  border-2 border-indigo-400 px-18">
        <div className="w-2/3  border-2 shrink-0 border-pink-600  gap-9">
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
              <SwiperSlide
                className=" border-2 border-yellow-600 w-full"
                key={index}
              >
                <img className="w-full object-cover" src={url} alt="" />
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
          <div className="text-sm space-y-3">
            <h3 className="text-lg font-bold mb-5">{listing?.name}</h3>
            <div className="flex border-b border-gray-200 ">
              <div className="basis-24 shrink-0 text-gray-500">Price</div>
              <div className="font-bold">
                $
                {listing?.offer
                  ? listing.discountedPrice
                      .toString()
                      .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")
                  : listing?.regularPrice
                      .toString()
                      .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}
              </div>
            </div>
            <div className="flex border-b border-gray-200">
              <div className="basis-24 shrink-0 text-gray-500">address</div>
              <div className="font-bold">
                {listing.address ?? listing.location}
              </div>
            </div>

            <div className="flex border-b border-gray-200">
              <div className="basis-24 shrink-0 text-gray-500">
                Listing Type
              </div>

              <div className="font-bold">
                {listing.type === "rent" ? "Rent" : "Sale"}
              </div>
            </div>

            {listing.offer && (
              <div className="flex border-b border-gray-200">
                <div className="basis-24 shrink-0 text-gray-500">Discount</div>
                <div className="font-bold">
                  ${listing.regularPrice - listing.discountedPrice}
                </div>
              </div>
            )}

            <div className="flex border-b border-gray-200">
              <div className="basis-24 shrink-0 text-gray-500">Bedroom</div>
              <div className="font-bold">{listing.bedrooms}</div>
            </div>
            <div className="flex border-b border-gray-200">
              <div className="basis-24 shrink-0 text-gray-500">Bathroom</div>
              <div className="font-bold">{listing.bathrooms}</div>
            </div>
            <div className="flex border-b border-gray-200">
              <div className="basis-24 shrink-0 text-gray-500">
                Parking Spot
              </div>
              <div className="font-bold">{listing.parking ? "Yes": "No"}</div>
            </div>
            <div className="flex border-b border-gray-200">
              <div className="basis-24 shrink-0 text-gray-500">
                Furnished
              </div>
              <div className="font-bold">{listing.furnished? "Yes": "No"}</div>
            </div>
          </div>{" "}
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
