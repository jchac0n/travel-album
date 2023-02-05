import { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Map = () => {
  const initialMarker = useMemo(() => ({ lat: 0, lng: 0 }), []);

  return (
    <GoogleMap
      zoom={2}
      center={{ lat: 0, lng: 0 }}
      mapContainerClassName="map-container"
    >
      <Marker position={initialMarker}></Marker>
    </GoogleMap>
  );
};

export default Map;
