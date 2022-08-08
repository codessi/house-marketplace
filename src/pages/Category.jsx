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

const Category = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

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
  

        let newListings = [];

        querySnap.forEach((doc) => {
          return newListings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(newListings);
        console.log('listing is ',newListings)
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listings");
      }
    };
    fetchListings();

  }, []);
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
          <main>
            <ul className="categoryListings">
                {listings.map((listing) => (
                  <ListingItem listing={listing.data} id={listing.id} key={listing.id} />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>No Listings for {params.categoryName}</p>
      )}
    </div>
  );
};

export default Category;
