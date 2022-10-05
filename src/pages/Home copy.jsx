import React, { useState, useEffect } from "react";
import HMExclusive from "../components/HMExclusive";
import home from "./../assets/jpg/indigo-home.jpg";
import Fixup from "./../components/Fixup.jsx";
import { useNavigate, useParams } from "react-router-dom";
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

export default function Home() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);
  const [buy, setBuy] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "listings");

        const q = query(
          listingsRef,
          where("offer", "==", true),
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
        setLoading(false);
      }
    };
    fetchListings();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buy) {
      navigate('/category/sale')
    }
    navigate('/category/rent')
  };

  return (
    <div>
      <div className="md:h-[80vh] overflow-hidden outline-1 relative flex justify-center items-center">
        <img
          className="w-full   object-cover object-center"
          src={home}
          alt=""
        />
        <div className="w-full  bg-gray-900/20 absolute inset-0 z-10"></div>
        <div className="absolute z-20 mt-12 h-40 w-3/4  md:w-1/2">
          <h3 className="text-white font-semibold text-5xl font-serif text-center">
            Find your place
          </h3>
          <form onSubmit={handleSubmit} action="">
            <label
              className="absolute bottom-0 right-0 left-0 index-10"
              htmlFor=""
            >
              <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                  type="button" onClick={() => setBuy(false)}
                  className={`py-2 px-4 text-sm font-medium${!buy? "z-10  bg-white text-black text-balck " :" text-white bg-black  hover:bg-white hover:text-black "
                 }`}
                >
                  Rent
                </button>

                <button
                     type="button" onClick={() => setBuy(true)}
                     className={`py-2 px-4 text-sm font-medium${buy? "z-10  bg-white text-black text-balck " :" text-white bg-black  hover:bg-white hover:text-black "
                    }`}
                >
                  Buy
                </button>
              </div>
              <br />
              <div className="bg-white flex">
                <input
                  className="bg-white p-1 w-full h-16 placeholder:pl-3"
                  placeholder="city, zip, address"
                  type="text"
                />
                <button
                  type="submit"
                  className="text-white p-1 px-3 m-2 bg-blue-400"
                >
                  Go
                </button>
              </div>
            </label>
          </form>
        </div>
      </div>
      {/* contents */}
      <div className="p-8 md:px-16  ">
        <HMExclusive />
        <Fixup />
      </div>
    </div>
  );
}
