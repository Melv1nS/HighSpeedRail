interface RailRoute {
  id: string;
  name: string;
  coordinates: [number, number][];
  color: string;
}

export const railRoutes: RailRoute[] = [
  {
    id: 'northeast-corridor',
    name: 'Northeast Corridor',
    coordinates: [
      [42.3601, -71.0589], // Boston
      [40.7128, -74.0060], // New York
      [39.9526, -75.1652], // Philadelphia
      [38.9072, -77.0369], // Washington DC
    ],
    color: '#FF4444'
  },
  {
    id: 'california',
    name: 'California High-Speed Rail',
    coordinates: [
      [37.7749, -122.4194], // San Francisco
      [36.7378, -119.7871], // Fresno
      [34.0522, -118.2437], // Los Angeles
      [32.7157, -117.1611], // San Diego
    ],
    color: '#4444FF'
  },
  // Add more routes as needed
];
