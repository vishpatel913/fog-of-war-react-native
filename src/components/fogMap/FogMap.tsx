import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Overlay, PROVIDER_GOOGLE } from 'react-native-maps';

import { useLocation } from '../../hooks';
import { Region, MapBoundingBox } from '../../types';

import FogOverlay from './FogOverlay';

const styles = StyleSheet.create({
  map: {
    alignSelf: 'stretch',
    height: '100%',
    ...StyleSheet.absoluteFillObject,
  },
});

const FogMap = () => {
  const mapRef = useRef<MapView>(null);
  const currentCoordinates = useLocation();
  const initialRegion = useMemo(
    () => ({
      ...currentCoordinates,
      latitudeDelta: 0.0212,
      longitudeDelta: 0.0121,
    }),
    [currentCoordinates],
  );
  const [region, setRegion] = useState<Region>(initialRegion);
  const [mapBoundary, setMapBoundary] = useState<MapBoundingBox>();

  const handleRegionChange = useCallback(async (value: Region) => {
    setRegion(value);
    const boundary = await mapRef.current?.getMapBoundaries();
    if (boundary) {
      setMapBoundary(boundary);
    }
  }, []);

  useEffect(() => {
    handleRegionChange(initialRegion);
  }, [handleRegionChange, initialRegion]);

  // useEffect(() => {
  //   mapRef.current.
  // }, [third])

  return (
    <>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={initialRegion}
        showsBuildings={false}
        showsUserLocation
        onRegionChange={handleRegionChange}
      />
      <FogOverlay region={region} mapBoundary={mapBoundary} />
    </>
  );
};

export default FogMap;
