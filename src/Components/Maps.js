import React, { Component } from 'react';
 
// Import Markers On Map
import MarkersOnMap from 'markers-on-map-react';
 
// Any component you need to use
class Map extends Component {
 
    
  // Any lifecycle method you need to use
  componentDidMount() {
 
    // Basic initialize
    MarkersOnMap.Init({
 
      googleApiKey: "AIzaSyDRFXFjw7tXP9h2QD8VDBGOcHnmZI__LOE", // required => Google Maps JavaScript API Key (in string format)
 
      markerObjects: [
        // at least one object required 
        {
          markerLat: 33.8732, // marker latitude as number
          markerLong: 35.7000, // marker longitude as number
        },
      ],
      
      googlePlacesApiEnabled: true,
      googlePlacesContentButton: 'Get Directions',
      mapTypeId: 'roadmap', 
      mapZoomControl: true,
    });
 
    // Select map element (ID or Class)
    MarkersOnMap.Run('div#GoogleMap');
 
  }
  
  render() {
 
    return (
 
      // Map element
      <div id="GoogleMap"></div>
 
    );
 
  }
 
}
export default Map;