// extractLocations() will take in all event objects from the API
// and return an array of all unique "location" values

export const extractLocations = (events) => {
    var extractLocations = events.map(event => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
  }