import React from 'react';
import { Dimensions } from 'react-native';
import { Box, useTheme } from 'native-base';
import { Feather } from '@expo/vector-icons';
import * as d3 from 'd3';
import { G, Line, Path, Svg } from 'react-native-svg';

import { transformCoordinatesToScreen } from './coordMaths';
import { Coordinates, MapBoundingBox, Region } from '../../types';

import { testRoute } from '../../test/mockCoords';

type Props = {
  region: Region;
  mapBoundary?: MapBoundingBox;
};

type CoordTuple = [number, number];

const testPoints: Coordinates[] = [
  {
    latitude: 51.460071,
    longitude: -0.113023,
  },
  {
    latitude: 51.459621,
    longitude: -0.115315,
  },
  {
    latitude: 51.455192,
    longitude: -0.113683,
  },
];

const FogOverlay: React.FC<Props> = ({ region, mapBoundary }) => {
  const dimensions = Dimensions.get('screen');
  const theme = useTheme();
  const overlayHeight = dimensions.height - theme.sizes[12];
  const overlayWidth = dimensions.width;

  if (!mapBoundary) return null;

  const makeGraph = (data: CoordTuple[]) => {
    const y = d3
      .scaleLinear()
      .domain([mapBoundary.southWest.latitude, mapBoundary.northEast.latitude])
      .range([overlayHeight, 0]);
    const x = d3
      .scaleLinear()
      .domain([
        mapBoundary.northEast.longitude,
        mapBoundary.southWest.longitude,
      ])
      .range([dimensions.width, 0]);

    const getLine = d3
      .line<CoordTuple>()
      .x(d => x(d[0]))
      .y(d => y(d[1]));

    return {
      line: getLine(data),
    };
  };

  const graphData: any = [makeGraph(testRoute as CoordTuple[])];

  return (
    <Box position={'absolute'}>
      <Svg height={overlayHeight} width={overlayWidth} stroke="#6231ff">
        <G y={0}>
          <Path d={graphData[0].line} strokeWidth="8" />
        </G>
      </Svg>
    </Box>
  );
};

export default FogOverlay;
