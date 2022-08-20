/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const position = {
  lat: -3.945,
  lng: -38.923,
};
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA69OWMQ-Hpg2G4Cwx5rvnDfAnJRxTKpTQ',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}

      <MarkerF
        position={position}
      />

    </GoogleMap>
  ) : <div>NOT FOUND</div>;
}

export default React.memo(MyComponent);
