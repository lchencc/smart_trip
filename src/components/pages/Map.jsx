import React, {useState, useEffect} from 'react';
import List from '../Hotel/List/List.jsx';
import MapContainer from '../Hotel/MapContainer/MapContainer.jsx';
import MapData from '../../assets/data/MapData.json';

import '../../App.css';
import '../styles/Map.css';
import { Button } from '../Button.jsx';

const Map = () => {

  console.log("MapData", MapData);

  const [rating, setRating] = useState('');
  const [type, setType] = useState('');

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [coordinates_list, setCoordinates] = useState([
    { lat: 40.70786, lng: -74.01184 },
    { lat: 40.74836, lng: -73.98462 }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);

  const LoadMapDataLocal = async ({MapData, coordinates_list}) => {

    const data = [];
    for (const loc in coordinates_list) {

      const id = String(coordinates_list[loc].lat) + " " + String(coordinates_list[loc].lng);
      data.push(MapData[id]);
    }

    const dat = [];
    for (const i in data) {
      for (const j in data[i]) {
        dat.push(data[i][j]);
      }
    }

    return dat;
  };

  useEffect(() => {
    setIsLoading(true);

    const coordinates_list = JSON.parse(localStorage.getItem("coordinates_list"));
    console.log("selected_coords", coordinates_list);

    LoadMapDataLocal({MapData, coordinates_list})
      .then((result) => {

        console.log("filtered data", result);
        console.log("test_data", result[0].latitude);
    
        setPlaces(result);
        setRating("");
        setType("");
        setIsLoading(false);
    
    });

  }, [coordinates_list]);

  useEffect(() => {
    const filtered = places.filter((place) => place.rating > rating);

    setFilteredPlaces(filtered);
  }, [rating, places]);

  useEffect(() => {
    if (type !== "") {
      const filtered = places.filter((place) => place.price_level === type);
      setFilteredPlaces(filtered);
    }
  }, [type, places]); 

  return (
    <div class="wrapper">
      <h2 style={{color:"white", background:"steelblue"}}>Please Select Your Hotel on the Map</h2>
      <div class="boxmainmap">
        <div className="cards">
          <MapContainer 
            setChildClicked={setChildClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
          />
        </div>
      </div>
      <div class="sidemap">
        <div class="box1map">
          <List 
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            rating={rating}
            setRating={setRating}
            type={type}
            setType={setType}
          />
        </div>
        {/* <div class="box2">
          &nbsp;&nbsp;&nbsp;
          {typeof childClicked === 'string' && <text>Selected Hotel: {places[parseInt(childClicked, 10)].name}</text>}
          <br></br>
        </div> */}
      <div class="box3map">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          tolink="/final"
        >
          Next: Generate Route
        </Button>
      </div>
      </div>
    </div>
  );
}

export default Map;