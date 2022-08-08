import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../firebase.config";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Spinner from "./Spinner";

// import Spinner from './Spinner';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Slider = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getFetch = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);
      querySnap.forEach((doc) =>
        listings.push({
          id: doc.id,
          data: doc.data(),
        })
      );
      setListings(listings);
      setLoading(false);
      console.log('listing ', listings);
    };
    let listings = [];

    getFetch();
  }, []);

  if (loading) <Spinner />;

  return (
    listings && (
      <>
        <div className="exploreHeading">Recommended</div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          style={{ height: "300px" }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        >
          {listings && listingsmap((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  background: `url(${item.imgUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="swiperSlideDiv"
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  );

  return <div>Slider</div>;
};

export default Slider;
