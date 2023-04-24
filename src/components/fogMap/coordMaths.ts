import { Coordinates, CoordinatesDelta } from '../../types';

type Dimensions = {
  height: number;
  width: number;
};

type Position = {
  x: number;
  y: number;
};

export const INITIAL_LATITUDE_DELTA = 0.0212;
export const INITIAL_LONGITUDE_DELTA = 0.0121;

export const calculateScreenScale = (
  screenDimensions: Position,
  screenDelta: CoordinatesDelta,
): Position => ({
  x: screenDimensions.x / screenDelta.longitudeDelta,
  y: screenDimensions.y / screenDelta.latitudeDelta,
});

export const calculateCoordinatesDelta = (
  start: Coordinates,
  finish: Coordinates,
): Position => ({
  x: finish.longitude - start.longitude,
  y: finish.latitude - start.latitude,
});

export const transformCoordinatesToScreen = (
  screenDimensions: Position,
  screenDelta: CoordinatesDelta,
  pointCoordinates: Coordinates,
  boundaryCoordinates: Coordinates,
): Position => {
  const scale = calculateScreenScale(screenDimensions, screenDelta);
  const coordinatesDelta = calculateCoordinatesDelta(
    boundaryCoordinates,
    pointCoordinates,
  );
  const x = scale.x * coordinatesDelta.x;
  const y = -1 * scale.y * coordinatesDelta.y;

  return { x, y };
};
