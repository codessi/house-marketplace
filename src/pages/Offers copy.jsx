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
import 'swiper/swiper-bundle.css'

const Offers = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null)

  const params = useParams();
  
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "listings");

        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(10), 
      
        );
        const querySnap = await getDocs(q);

        const lastVisible = querySnap.docs[querySnap.docs.length - 1]
        
        setLastFetchedListing(lastVisible)
    

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
        setLoading(false);
      }
    };
    fetchListings();

  }, []);

  const onFetchMoreListings = async () => {
    try {
      const listingsRef = collection(db, "listings");

      const q = query(
        listingsRef,
        where("offer", "==", true),
        orderBy("timestamp", "desc"),
        limit(10), 
        startAfter(lastFetchedListing)
    
      );
      const querySnap = await getDocs(q);

      const lastVisible = querySnap.docs[querySnap.docs.length - 1]
      
      setLastFetchedListing(lastVisible)
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
      setLoading(false);
    }
  };
  return (
    <div className="category">
      <header>
        <p className="pageHeader">
   Offers
        </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
                {listings.map((listing) => (
                  <ListingItem listing={listing.data} id={listing.id} key={listing.id} />
              ))}
            </ul>
            </main>
            <br />
            <br />
            <br />
            {lastFetchedListing && (
              <p className="loadMore" onClick={onFetchMoreListings}>Load More</p>
            )}
        </>
      ) : (
        <p>No Listings for Offers</p>
      )}
    </div>
  );
};

export default Offers;
