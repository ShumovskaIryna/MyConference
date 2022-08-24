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
  lat: 0,
  lng: 0,
};
function GoogleMapCustom(props) {
  const { lat, lng } = props;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA69OWMQ-Hpg2G4Cwx5rvnDfAnJRxTKpTQ',
  });

  const shouldShowMap = lat !== undefined
  && lng !== undefined && !Number.isNaN(lat) && !Number.isNaN(lng);

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds({ lat, lng });
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  useEffect(() => {
    if (map && shouldShowMap) {
      const bounds = new window.google.maps.LatLngBounds({
        lat, lng,
      });
      bounds.extend(new window.google.maps.LatLng(parseFloat(lat), parseFloat(lng)));
      map.fitBounds(bounds);
    }
  }, [map]);

  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={2}
      center={{
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      }}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {shouldShowMap ? (
        <MarkerF
          position={{
            lat: parseFloat(lat),
            lng: parseFloat(lng),
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
