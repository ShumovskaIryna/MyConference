/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};
const center = {
  lat: 47.839,
  lng: 35.125,
};
function GoogleMapCustom(props) {
  const { lat, lng } = props;
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA69OWMQ-Hpg2G4Cwx5rvnDfAnJRxTKpTQ',
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const shouldShowMap = lat !== undefined && lng !== undefined;

  useEffect(() => {
    if (map && shouldShowMap) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(new window.google.maps.LatLng(lat, lng));
      map.fitBounds(bounds);
    }
  }, [map]);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={1}
      center={{
        lat,
        lng,
      }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {shouldShowMap ? (
        <MarkerF
          position={{
            lat,
            lng,
          }}
        />
      ) : undefined}
    </GoogleMap>
  ) : (
    <div>NOT FOUND</div>
  );
}
GoogleMapCustom.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};
export default React.memo(GoogleMapCustom);
