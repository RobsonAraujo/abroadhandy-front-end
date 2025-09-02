"use client";

import {
  useJsApiLoader,
  Libraries,
  GoogleMap as GoogleMapsApi,
  Marker,
} from "@react-google-maps/api";
import { CSSProperties } from "react";

type GoogleMapProps = {
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  options?: google.maps.MapOptions;
  mapContainerStyle?: CSSProperties;
};

const defaultMapContainerStyle: CSSProperties = {
  width: "100%",
  height: "80vh",
  borderRadius: "15px 0px 0px 15px",
};

const defaultMapCenter: google.maps.LatLngLiteral = {
  lat: 37.4239163,
  lng: -122.0947209,
};

const defaultMapZoom: number = 17;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
};

const libraries: Libraries = ["places", "drawing", "geometry"];

const GoogleMap = ({
  center = defaultMapCenter,
  zoom = defaultMapZoom,
  options = defaultMapOptions,
  mapContainerStyle = defaultMapContainerStyle,
}: GoogleMapProps) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  if (loadError) return <p>Failed to load Google Maps</p>;
  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <div className="w-full">
      <GoogleMapsApi
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={options}
      >
        <Marker position={center} />
      </GoogleMapsApi>
    </div>
  );
};

export default GoogleMap;
