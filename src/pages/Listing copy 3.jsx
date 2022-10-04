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

// import "swiper/swiper-bundle.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/thumbs/thumbs.min.css";
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
    // container
    <div className="border-2 w-1/2  p-4  border-green-400">
      {/* <img src={listing.imgUrls[0]} alt="" /> */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        className="border-4 h-96 border-red-400 "

        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {listing?.imgUrls.map((url, index) => (
          <SwiperSlide className="border-4 border-yellow-400 " key={index}>
            <img className="w-full h-full object-cover" src={url} alt="" />
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
        className=" border-4  border-blue-400"
      >
        {listing?.imgUrls.map((url, index) => (
          <SwiperSlide className=" border-black border-4 " key={index}>
            <img className="w-24" src={url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Listing;
