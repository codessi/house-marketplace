import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const CreatingListing = () => {
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
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });

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
  const isMounted = useRef(true);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  const onMutate = (e) => {
    // set the value to the sale

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
        images: e.target.files
      }));
    }

    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }))
    }
  };

  setLoading(true)

  const onSubmit = (e) => {
    e.preventDefault()
    if (discountedPrice >= regularPrice) {
      setLoading(false) 
      toast.error('Discounted price needs to be less than regular price')
      return
    }
    console.log(formData)
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="profile">
      <header>
        <p className="pageHeader">Create a Listing</p>
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
            max={6}

            required
            multiple
          />
          <button
            type="submit"
            className="primaryButton createListingButton"
          >Create Listing</button>
        </form>
      </main>
    </div>
  );
};

export default CreatingListing;
