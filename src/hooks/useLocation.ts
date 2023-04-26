import { useEffect, useState } from 'react';
import { Coordinates } from './../types';
import * as Location from 'expo-location';

const DEFAULT_COORDS = {
  latitude: 51.5286416,
  longitude: -0.1015987,
};

const useLocation = () => {
  const [location, setLocation] = useState<Coordinates>(DEFAULT_COORDS);

  useEffect(() => {
    const fetchLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      const currentPosition = await Location.getCurrentPositionAsync({});
      const coordinates: Coordinates = {
        longitude: currentPosition.coords.longitude,
        latitude: currentPosition.coords.latitude,
      };
      setLocation(coordinates);
    };
    fetchLocation();
  }, []);

  return location;
};

export default useLocation;
