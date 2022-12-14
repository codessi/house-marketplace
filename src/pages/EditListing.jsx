import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "../firebase.config";
import { v4 as uuidv4 } from "uuid";
import {doc, updateDoc,  serverTimestamp, getDoc } from "firebase/firestore";

const EditListing = () => {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 50,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });
  const [listing, setListing] = useState(null)
  //

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    images,
    latitude,
    longitude,
  } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const params = useParams()
  const isMounted = useRef(true);

// fetching to Edit
  useEffect(() => {
    setLoading(true)
    const fetchListing = async () => {
      const docRef = doc(db, 'listings', params.listingId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setListing(docSnap?.data())
        setFormData({...docSnap.data(), address: docSnap.data().location })
        setLoading(false)
      } else {
        navigate('/')
        toast.error('Listing does not exist')
      }


    }
    fetchListing()
   
  }, [])

  useEffect(() => {
    if (listing && listing.userRef !== auth.currentUser.uid) {
      toast.error("You can not edit this listing")
      navigate('/')
    } 

  }, [])
  
  
// adding  user id to create

  useEffect(() => {
   
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData((previous) => {
            return { ...previous, userRef: user.uid };
          });
        } else {
          navigate("/sign-in");
        }
      });
    }

    return () => {
      isMounted.current = false;
    };
    //
  }, [isMounted]);

  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }

    if (e.target.value === "false") {
      boolean = false;
    }

    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }

    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,

        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (discountedPrice >= regularPrice) {
      setLoading(false);
      toast.error("Discounted price needs to be less than regular price");
      return;
    }
    if (images.length > 6) {
      setLoading(false);
      toast.error("Max 6 images");
      return;
    }

    let geolocation = {};
    let location;

    if (geolocationEnabled) {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GEOCODE_API_KEY}`
      );

      const data = await response.json();

      geolocation.lat = data.results[0]?.geometry.location.lat ?? 0;
      geolocation.lng = data.results[0]?.geometry.location.lng ?? 0;

      location =
        data.status === "ZERO_RESULTS"
          ? undefined
          : data.result[0]?.formatted_address;

      if (location === undefined || location.include("undefined")) {
        setLoading(false);
        toast.error("please enter a correct address");
        return;
      }
    } else {
      geolocation.lat = latitude;
      geolocation.lng = longitude;
      location = address;
    }

    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, "images/" + fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const imgUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch(() => {
      setLoading(false);
      toast.error("Image not uploaded");
      return;
    });

    
    const formDataCopy = {
      ...formData,
      imgUrls,
      geolocation,
      timestamp: serverTimestamp(),
    };

    formDataCopy.location = address;
    delete formDataCopy.images;

    delete formDataCopy.address;


    !formDataCopy.offer && delete formDataCopy.discountedPrice;


    const docRef = doc(db, 'listings', params.listingId)
    await updateDoc(docRef, formDataCopy)

    setLoading(false);

    toast.success("success");
    navigate(`/category/${formDataCopy.type}/${docRef.id}`);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="profile">
      <header>
        <p className="pageHeader">Edit a Listing</p>
      </header>

      <main>
        <form action="" onSubmit={onSubmit}>
          <label className="formLabel">Sell /Rent</label>
          <div className="formButtons">
            <button
              type="button"
              className={type === "sale" ? "formButtonActive" : "formButton"}
              id="type"
              value="sale"
              onClick={onMutate}
            >
              Sell
            </button>
            <button
              type="button"
              className={type === "rent" ? "formButtonActive" : "formButton"}
              id="type"
              value="rent"
              onClick={onMutate}
            >
              Rent
            </button>
          </div>

          <label className="formLabel">Name</label>
          <input
            type="text"
            id="name"
            className="formInputName"
            value={name}
            onChange={onMutate}
            maxLength={32}
            minLength={1}
            required
          />

          <div className="formRooms flex">
            <div>
              <label htmlFor="" className="formLabel">
                Bedrooms
              </label>
              <input
                type="number"
                id="bedrooms"
                value={bedrooms}
                onChange={onMutate}
                min={1}
                max={50}
                required
                className="formInputSmall"
              />
            </div>
            <div>
              <label htmlFor="" className="formLabel">
                Bathrooms
              </label>
              <input
                type="number"
                id="bathrooms"
                value={bathrooms}
                onChange={onMutate}
                className="formInputSmall"
                min={1}
                max={50}
                required
              />
            </div>
          </div>

          <label htmlFor="" className="formLabel">
            Parking spot
          </label>
          <div className="formButtons">
            <button
              type="button"
              className={parking ? "formButtonActive" : "formButton"}
              id="parking"
              value="true"
              onClick={onMutate}
            >
              yes
            </button>
            <button
              type="button"
              className={
                !parking && parking !== null ? "formButtonActive" : "formButton"
              }
              id="parking"
              value="false"
              onClick={onMutate}
            >
              No
            </button>
          </div>

          {/* furnished */}
          <label htmlFor="" className="formLabel">
            Furnished
          </label>
          <div className="formButtons">
            <button
              type="button"
              id="furnished"
              value="true"
              className={furnished ? "formButtonActive" : "formButton"}
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              type="button"
              value="false"
              id="furnished"
              onClick={onMutate}
              className={
                !furnished && furnished !== null
                  ? "formButtonActive"
                  : "formButton"
              }
            >
              No
            </button>
          </div>

          <label htmlFor="" className="formLabel">
            Address
          </label>
          <textarea
            type="text"
            className="formInputAddress"
            placeholder="address"
            id="address"
            value={address}
            onChange={onMutate}
            required
          />

          {!geolocationEnabled && (
            <div className="formLatLng flex">
              <div>
                <label className="formLabel">Latitude</label>
                <input
                  className="formInputSmall"
                  type="number"
                  id="latitude"
                  value={latitude}
                  onChange={onMutate}
                  required
                />
              </div>
              <div>
                <label className="formLabel">Longitude</label>
                <input
                  className="formInputSmall"
                  type="number"
                  id="longitude"
                  value={longitude}
                  onChange={onMutate}
                  required
                />
              </div>
            </div>
          )}

          <label htmlFor="" className="formLabel">
            Offer
          </label>
          <div className="formButtons">
            <button
              type="button"
              id="offer"
              value={true}
              className={offer ? "formButtonActive" : "formButton "}
              onClick={onMutate}
            >
              Yes
            </button>
            <button
              type="button"
              className={!offer ? "formButtonActive" : "formButton"}
              id="offer"
              value={false}
              onClick={onMutate}
            >
              No
            </button>
          </div>

          <label htmlFor="" className="formLabel">
            Regular Price
          </label>

          <div className="formPriceDiv">
            <input
              type="number"
              className="formInputSmall"
              id="regularPrice"
              value={regularPrice}
              onChange={onMutate}
              required
              min={50}
              max={10000000000}
            />{" "}
            {type === "rent" && <p className="formPriceText">$ / Month</p>}
          </div>

          {offer && (
            <>
              <label htmlFor="" className="formLabel">
                Discounted Price
              </label>
              <input
                type="nubmer"
                id="discountedPrice"
                value={discountedPrice}
                className="formInputSmall"
                onChange={onMutate}
                min={50}
                max={1000000000}
              />
            </>
          )}

          <label htmlFor="" className="formLabel">
            Images
          </label>
          <p className="imagesInfor">
            The first image will be the cover (max 6).
          </p>
          <input
            className="formInputFile"
            type="file"
            accept=".jpg,.png,.jpeg"
            id="images"
            onChange={onMutate}
            required
            max={6}
            multiple
          />
          <button type="submit" className="primaryButton editListingButton">
            Edit A Listing
          </button>
        </form>
      </main>
    </div>
  );
};

export default EditListing;
