export type Coordinates = {
  longitude: number;
  latitude: number;
};

export type CoordinatesDelta = {
  latitudeDelta: number;
  longitudeDelta: number;
};

export type Region = Coordinates & CoordinatesDelta;
