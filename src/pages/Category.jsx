import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import ListingItem from "../components/ListingItem";
import { MapContainer, Marker, Tooltip, Popup, TileLayer } from "react-leaflet";
import "swiper/css/bundle";

const Category = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "listings");

        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(10)
        );
        const querySnap = await getDocs(q);

        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedListing(lastVisible);

        let newListings = [];

        querySnap.forEach((doc) => {
          return newListings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(newListings);

        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listings");
      }
    };
    fetchListings();
  }, []);


  const geoArray = listings?.map((listing) => {
    return [
      listing?.data.name,
      listing?.data.geolocation.lat,
      listing?.data.geolocation.lng,
    ];
  });

  console.log(listings);

  const onFetchMoreListings = async () => {
    try {
      const listingsRef = collection(db, "listings");

      const q = query(
        listingsRef,
        where("type", "==", params.categoryName),
        orderBy("timestamp", "desc"),
        limit(10),
        startAfter(lastFetchedListing)
      );
      const querySnap = await getDocs(q);

      const lastVisible = querySnap.docs[querySnap.docs.length - 1];

      setLastFetchedListing(lastVisible);
      let newListings = [];

      querySnap.forEach((doc) => {
        return newListings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings([...listings, ...newListings]);

      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch listings");
    }
  };

  return (
    <div className="category">
      <header>
        <p className="pageheader">
          {params.categoryName === "rent"
            ? "Place for rent"
            : "Places for Sale"}
        </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <div className="category-listing-container">
            <main className="category-main">
              <ul className="categoryListings">
                {listings.map((listing) => (
                  <ListingItem
                    listing={listing.data}
                    id={listing.id}
                    key={listing.id}
                  />
                ))}
              </ul>
              {lastFetchedListing && (
                <p className="loadMore" onClick={onFetchMoreListings}>
                  Load More
                </p>
              )}
            </main>

            <div className="leafletContainer ">
              <MapContainer
                style={{ height: "100%", width: "100%" }}
                // center={[listing.geolocation.lat, listing.geolocation.lng]}
                center={[34.076160894634135, -118.33566945328269]}
                zoom={10}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                  {listings.map((listing) => {
                  const {lat, lng} = listing.data.geolocation
                  return (
                    <Marker eventHandlers={{
                      click: (e) => {
                        window.open(`${listing.data.type}/${listing.id}`, '_blank', 'noopener,noreferrer')
                      },
                    }} key={listing.id} position={[lat, lng]}>
                      <Tooltip >{listing.data.name}</Tooltip>
                    </Marker>
                  );
                })}
            
              </MapContainer>
            </div>
          </div>
        </>
      ) : (
        <p>No Listings for {params.categoryName}</p>
      )}
    </div>
  );
};

export default Category;
