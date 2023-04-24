import React from 'react';
import { Box, useTheme } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { transformCoordinatesToScreen } from './coordMaths';
import { Coordinates, Region } from '../../types';
import { testRoute } from '../../test/mockCoords';

type Props = {
  region: Region;
  northWestCoordinates?: Coordinates;
};

const testCoords: Coordinates = {
  latitude: 51.45264,
  longitude: -0.1031,
};

const FogOverlay: React.FC<Props> = ({ region, northWestCoordinates }) => {
  const theme = useTheme();

  if (!northWestCoordinates) return null;

  const testScreenPosition = transformCoordinatesToScreen(
    { x: 100, y: 100 },
    {
      latitudeDelta: region.latitudeDelta,
      longitudeDelta: region.longitudeDelta,
    },
    testCoords,
    northWestCoordinates,
  );

  return (
    <>
      <Box
        position={'absolute'}
        left={`${testScreenPosition.x}%`}
        top={`${testScreenPosition.y}%`}
      >
        <Feather
          name="arrow-up-left"
          size={24}
          color={theme.colors.primary[800]}
        />
      </Box>
    </>
  );
};

export default FogOverlay;
