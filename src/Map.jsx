import { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    //googleMapsApiKey: "", /TODO: This doesn't work
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
  });

  const initialMarker = useMemo(() => ({ lat: 0, lng: 0 }), []);

  if (!isLoaded) return null;

  return (
    <div className="map-container">
      <GoogleMap
        zoom={2}
        center={{ lat: 0, lng: 0 }}
        mapContainerClassName="map-container"
      >
        <Marker position={initialMarker}></Marker>
      </GoogleMap>
    </div>
  );
};

export default Map;
