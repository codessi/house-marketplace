import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../components/Spinner";

function CreateListing() {
  // eslint-disable-next-line

  console.log(process.env.REACT_APP_GEOCODE_API_KEY);

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
          setFormData({ ...formData, userRef: user.uid });
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
          : data.results[0]?.formatted_address;

      if (location === undefined || location.includes("undefined")) {
        setLoading(false);
        toast.error("Please enter a correct address");
        return;
      }
    } else {
      geolocation.lat = latitude;
      geolocation.lng = longitude;
    }

    // Store image in firebase
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
              default:
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
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
      toast.error("Images not uploaded");
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

    const docRef = await addDoc(collection(db, "listings"), formDataCopy);
    setLoading(false);
    toast.success("Listing saved");
    navigate(`/category/${formDataCopy.type}/${docRef.id}`);
  };

  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === "true") {
      boolean = true;
    }
    if (e.target.value === "false") {
      boolean = false;
    }

    // Files
    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        images: e.target.files,
      }));
    }

    // Text/Booleans/Numbers
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="listing outline-1 outline outline-gray-300 w-max mx-auto p-6 m-6 rounded-lg">
      <header>
        <p className="text-xl font-bold mx-auto">Create a Listing</p>
      </header>

      <main>
        <form
          onSubmit={onSubmit}
          className="lg:flex justify-center gap-7 text-lg"
        >
          <div className="space-y-4 w-1/2">
            <label className="formLabel">Sell / Rent</label>
            <div className="space-x-2">
              <button
                type="button"
                className={
                  type === "sale"
                    ? "bg-green-500 text-white rounded-xl p-2 px-4"
                    : " border border-gray-400 rounded-xl p-2 px-4 hover:bg-green-400 hover:border hover:border-white hover:text-white"
                }
                id="type"
                value="sale"
                onClick={onMutate}
              >
                Sell
              </button>
              <button
                type="button"
                className={
                  type === "rent"
                    ? "bg-green-500 text-white rounded-xl p-2 px-4"
                    : " border border-gray-400 rounded-xl p-2 px-4 hover:bg-green-400 hover:border hover:border-white hover:text-white"
                }
                id="type"
                value="rent"
                onClick={onMutate}
              >
                Rent
              </button>
            </div>
            <label className="block">Name</label>
            <input
              className="border"
              type="text"
              id="name"
              value={name}
              onChange={onMutate}
              maxLength="32"
              minLength="10"
              required
            />
            <div className=" space-y-3">
              <div className="space-x-2">
                <label >Bedrooms</label>
                <input
                  className="border"
                  type="number"
                  id="bedrooms"
                  value={bedrooms}
                  onChange={onMutate}
                  min="1"
                  max="50"
                  required
                />
              </div>
              <div className="space-x-2">
                <label className="formLabel">Bathrooms</label>
                <input
                  className="border"
                  type="number"
                  id="bathrooms"
                  value={bathrooms}
                  onChange={onMutate}
                  min="1"
                  max="50"
                  required
                />
              </div>
            </div>
            
            
            <div>
              <label className="block">Parking spot</label>
                         <div className="space-x-2">
                <button
                  className={
                    parking
                      ? "bg-green-500 text-white rounded-xl p-2 px-4"
                      : " border border-gray-400 rounded-xl p-2 px-4 hover:bg-green-400 hover:border hover:border-white hover:text-white"
                  }
                  type="button"
                  id="parking"
                  value={true}
                  onClick={onMutate}
                  min="1"
                  max="50"
                >
                  Yes
                </button>
                <button
                  className={
                    !parking && parking !== null
                      ? "bg-green-500 text-white rounded-xl p-2 px-4"
                      : " border border-gray-400 rounded-xl p-2 px-4 hover:bg-green-400 hover:border hover:border-white hover:text-white"
                  }
                  type="button"
                  id="parking"
                  value={false}
                  onClick={onMutate}
                >
                  No
                </button>
              </div>
            </div>
            <div>
              <label className="block">Furnished</label>
              <div className="space-x-2">
                <button
                  className={
                    furnished
                      ? "bg-green-500 text-white rounded-xl p-2 px-4"
                      : " border border-gray-400 rounded-xl p-2 px-4 hover:bg-green-400 hover:border hover:border-white hover:text-white"
                  }
                  type="button"
                  id="furnished"
                  value={true}
                  onClick={onMutate}
                >
                  Yes
                </button>
                <button
                  className={
                    !furnished && furnished !== null
                      ? "bg-green-500 text-white rounded-xl p-2 px-4"
                      : " border border-gray-400 rounded-xl p-2 px-4 hover:bg-green-400 hover:border hover:border-white hover:text-white"
                  }
                  type="button"
                  id="furnished"
                  value={false}
                  onClick={onMutate}
                >
                  No
                </button>
              </div>
            </div>
            <label className="block">Address</label>
            <textarea
              className="border"
              type="text"
              id="address"
              value={address}
              onChange={onMutate}
              required
            />
          </div>
          <div className="space-x-2 w-1/2">
            {!geolocationEnabled && (
              <div className="formLatLng flex">
                <div>
                  <label className="formLabel">Latitude</label>
                  <input
                    className="border"
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
                    className="border"
                    type="number"
                    id="longitude"
                    value={longitude}
                    onChange={onMutate}
                    required
                  />
                </div>
              </div>
            )}

            <label className="formLabel">Offer</label>
            <div className="space-x-2">
              <button
                className={
                  offer
                    ? "bg-green-500 text-white rounded-xl p-2 px-4"
                    : " border border-gray-400 rounded-xl p-2 px-4 hover:bg-green-400 hover:border hover:border-white hover:text-white"
                }
                type="button"
                id="offer"
                value={true}
                onClick={onMutate}
              >
                Yes
              </button>
              <button
                className={
                  !offer && offer !== null
                    ? "bg-green-500 text-white rounded-xl p-2 px-4"
                    : " border border-gray-400 rounded-xl p-2 px-4 hover:bg-green-400 hover:border hover:border-white hover:text-white"
                }
                type="button"
                id="offer"
                value={false}
                onClick={onMutate}
              >
                No
              </button>
            </div>

            <label className="block">Regular Price</label>
            <div className="flex">
            <span>$</span><input
                className="border "
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onMutate}
                min="50"
                max="750000000"
                required
              />
              {type === "rent" && <p className="formPriceText"> / Month</p>}
            </div>

            {offer && (
              <>
                <label className="block">Discounted Price</label>
                <span>$</span><input
                  className="border"
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onMutate}
                  min="50"
                  max="750000000"
                  required={offer}
                />
              </>
            )}

            <label className="block mt-4 ">Images</label>
            <p className="imagesInfo">
              The first image will be the cover (max 6).
            </p>
            <input
              className="border file:border-none file:hover:bg-green-300 file:hover:text-white transition file:duration-0 file:hover:duration-1150 w-full file:text-sm file:font-bold file:py-2"
              type="file"
              id="images"
              onChange={onMutate}
              max="6"
              accept=".jpg,.png,.jpeg"
              multiple
              required
            />
            <button
              type="submit"
              className=" block mt-9 w-full bg-green-500 text-white rounded-xl p-2 px-4 hover:bg-green-400 hover:border hover:border-white hover:text-white"
            >
              Create Listing
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default CreateListing;
