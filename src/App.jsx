import ReactDOM from "react-dom";
import Map from "./Map";
import Album from "./Album";
import GoogleInfo from "./GoogleInfo";
import { useLoadScript } from "@react-google-maps/api";

const App = () => {
  const { isLoaded } = useLoadScript({
    //googleMapsApiKey: "", /TODO: This doesn't work
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
  });

  return (
    <div>
      {!isLoaded ? (
        <div>Map Loading...</div>
      ) : (
        <div>
          <Map />
        </div>
      )}
      <div>
        <GoogleInfo />
      </div>
      <div>
        <Album />
      </div>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<App />);
