import React from 'react';
import { Dimensions } from 'react-native';
import { Box, useTheme } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { transformCoordinatesToScreen } from './coordMaths';
import { Coordinates, MapBoundingBox, Region } from '../../types';
import { testRoute } from '../../test/mockCoords';

type Props = {
  region: Region;
  mapBoundary?: MapBoundingBox;
};

const testCoords: Coordinates = {
  latitude: 51.45264,
  longitude: -0.1031,
};

const FogOverlay: React.FC<Props> = ({ region, mapBoundary }) => {
  const theme = useTheme();

  if (!mapBoundary) return null;

  return <></>;
};

export default FogOverlay;
