import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline, Region } from 'react-native-maps';

import { useLocation } from '../../hooks';
import { testRoute } from '../../test/mockCoords';
import MaskedView from '@react-native-masked-view/masked-view';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: '100%',
  },
});

const FogMap = () => {
  // const [region, setRegion] = useState<Region>();
  const currentCoordinates = useLocation();
  const lineCoords = testRoute.map(([longitude, latitude]) => ({
    latitude,
    longitude,
  }));

  const initialRegion = {
    ...currentCoordinates,
    latitudeDelta: 0.0212,
    longitudeDelta: 0.0121,
  };

  // React.useEffect(() => {
  //   console.log('region :>> ', region);
  // }, [region]);

  return (
    <>
      <MapView
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        region={initialRegion}
        showsBuildings={false}
        showsUserLocation
        // onRegionChange={value => setRegion(value)}
      >
        <Polyline coordinates={lineCoords} strokeWidth={5} />
      </MapView>
    </>
  );
};

export default FogMap;
