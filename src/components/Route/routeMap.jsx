/*global google*/
import {compose, withProps, lifecycle} from 'react-recompose';
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");



const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDyVt3WbjR3-5EmpZO8pOJQAjCSldXWIb0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      // const hotel_name = localStorage.getItem('selected_hotel_name');
      // const hotel_latitude = localStorage.getItem('selected_hotel_latitude');
      // const hotel_longitude = localStorage.getItem('selected_hotel_longitude');
      const hotel_name = "Royalton New York";
      const hotel_latitude = "40.755596";
      const hotel_longitude = "-73.98231";
      // console.log("larry, hotel_name", hotel_name);
      // console.log("larry, hotel_latitude", hotel_latitude);
      // console.log("larry, hotel_longitude", hotel_longitude);
      this.setState({
        hotel: [hotel_name, hotel_latitude, hotel_longitude]
      })
      this.setState({
          directions:[]
      })
      // const attraction_list = JSON.parse(localStorage.getItem('coordinates_list'));
      const attraction_list = [{lat: 40.7484, lng: -73.9857}, {lat: 40.75889, lng: -73.98512}];
      // console.log("larry, attraction_list: ", attraction_list);
      // console.log("route info: ", localStorage.getItem('routeInfo'));
      // origin = visitSeq[0];
      // destination = visitSeq[visitSeq.length - 1];
      var waypoints = [];
      for (var i = 0; i < attraction_list.length; i++) {
        waypoints.push({
          location: new google.maps.LatLng(attraction_list[i].lat, attraction_list[i].lng),
          stopover: true
        });
      }
      
      
      DirectionsService.route({
        origin: new google.maps.LatLng(parseFloat(hotel_latitude), parseFloat(hotel_longitude)),
        destination: new google.maps.LatLng(parseFloat(hotel_latitude), parseFloat(hotel_longitude)),
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: waypoints,
        optimizeWaypoints: true,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        //   console.log(this.props);
         console.log(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(parseFloat(props.hotel_latitude), parseFloat(props.hotel_longitude))}
    margin={[50, 50, 50, 50]}
    options={{zoomControl: true }}
  >
    {
        props.directions &&

                <DirectionsRenderer directions={props.directions}  />
    }
  </GoogleMap>
);

export default MapWithADirectionsRenderer;