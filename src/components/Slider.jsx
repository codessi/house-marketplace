import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
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

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const Slider = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);

      let listings = [];
      querySnap.forEach((doc) =>
        listings.push({
          id: doc.id,
          data: doc.data(),
        })
      );
      setListings(listings);
      setLoading(false);
    };

    fetchListings();
  }, []);

  if (listings?.length === 0) {
    return <></>;
  }

  if (loading) {
    return <Spinner />;
  }

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
          {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                style={{
                  background: `url(${data.imgUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="swiperSlideDiv"
              >
                <p className="swiperSlideText">{data.name}</p>
                <p className="swiperSlidePrice">
                  $
                  {data.discountedPrice
                    ?.toString()
                    .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,") ??
                    data.regularPrice
                      ?.toString()
                      .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")}{" "}
                  {data.type === "rent" && "/ month"}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  );
};

export default Slider;
