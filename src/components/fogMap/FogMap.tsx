import React, { useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { useLocation } from '../../hooks';
import { Coordinates, Region } from '../../types';

import FogOverlay from './FogOverlay';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: '100%',
  },
});

const FogMap = () => {
  const mapRef = useRef<any>();
  const currentCoordinates = useLocation();
  const initialRegion = {
    ...currentCoordinates,
    latitudeDelta: 0.0212,
    longitudeDelta: 0.0121,
  };
  const [region, setRegion] = useState<Region>(initialRegion);
  const [mapBoundary, setMapBoundary] = useState<Coordinates>();

  const handleRegionChange = async (value: Region) => {
    setRegion(value);
    const boundary = await mapRef.current?.getMapBoundaries();
    setMapBoundary({
      latitude: boundary.northEast.latitude,
      longitude: boundary.southWest.longitude,
    });
  };

  return (
    <>
      <MapView
        ref={mapRef}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        region={initialRegion}
        showsBuildings={false}
        showsUserLocation
        onRegionChange={handleRegionChange}
      />
      <FogOverlay region={region} northWestCoordinates={mapBoundary} />
    </>
  );
};

export default FogMap;
