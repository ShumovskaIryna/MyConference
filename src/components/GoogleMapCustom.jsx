/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

// const DEFAULT_POSITION = {
//   lat: -3.745,
//   lng: -38.523,
// };

const center = {
  lat: -3.745,
  lng: -38.523,
};

function GoogleMapCustom(props) {
  const { lat, lng } = props;
  console.log(props);

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

  const shouldShowMarker = lat !== undefined && lng !== undefined;
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={1}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}

      {
        shouldShowMarker ? (
          <MarkerF
            position={{
              lat: parseInt(lat, 10),
              lng: parseInt(lng, 10),
            }}
          />
        ) : undefined
      }

    </GoogleMap>
  ) : <div>NOT FOUND</div>;
}

GoogleMapCustom.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default React.memo(GoogleMapCustom);
