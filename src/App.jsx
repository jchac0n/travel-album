import ReactDOM from "react-dom";
import Map from "./Map";

import { useLoadScript } from "@react-google-maps/api";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
    //    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
  });

  return (
    <div>
      {!isLoaded ? <div>Loading...</div> : <Map />}
      {/* <MyFuturePicturesComponent><MyFuturePicturesComponent/> */}
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
