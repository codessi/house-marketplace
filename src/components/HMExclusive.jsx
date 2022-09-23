import React, {useEffect, useState} from "react";
import home from "./../assets/jpg/sellCategoryImage.jpg";
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


export default function HMExclusive() {
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
  return (
    <>
      <div className="">
        <div className="font-bold text-3xl">House <span className="font-normal">Marketplace</span> <span className="font-normal">Exclusives</span></div>
        <p className="text-sm mb-7 ">
          Be the first to browse exclusive listings before they hit the market.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
          {listings && listings.map((listing) => (
                  <ListingItem listing={listing.data} id={listing.id} key={listing.id} />
              ))}
        </div>
        <button className="p-3 px-6 my-5 bg-blue-500 text-white">View All HM Exclusives -></button>
      </div>
    </>
  );
}
