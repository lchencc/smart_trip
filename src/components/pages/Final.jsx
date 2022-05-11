import React, {useState, useEffect} from 'react';
import MapWithADirectionsRenderer from "../Route/routeMap"
import '../../App.css';
import '../styles/Map.css';

const Final = () => {
  const [routeSet, setRouteSet] = useState([]);
  const [routePoints, setRoutePoints] = useState([]);
 
  useEffect(() => {
    const routeInfo = JSON.parse(localStorage.getItem("routeInfo"));
    var routes = [];
    for(var i = 0; i < routeInfo.length; i++){
      routes.push(routeInfo[i]);
    }
    const visitSeq =  JSON.parse(localStorage.getItem("visitSeq"));
    const visitWayPoints = JSON.parse(localStorage.getItem("visitWayPoints"));
    // const routePlan = JSON.parse(localStorage.getItem('routePlan'));
    console.log("saved route info: ", routeInfo);
    console.log("saved visit seq: ", visitSeq);
    console.log("saved visit Waypoints: ", visitWayPoints);
    console.log("routes: ", routes);
    setRouteSet(routes);
    console.log("routeSet: ", routeSet);

    const attraction_list = JSON.parse(localStorage.getItem('coordinates_list'));
    console.log("attraction list: ", attraction_list);
    var endpoints = [];
    var address_names = [];
    for (i = 0; i < attraction_list.length; i++){
      console.log("attraction ", i, " name: ", attraction_list[i].name);
      address_names.push(attraction_list[i].name);
    }
    console.log("address names: ", address_names);
    var hotel_name = "Hotel " + localStorage.getItem("selected_hotel_name");
    address_names.push(hotel_name);
    var routeTwoPoints = [[hotel_name, address_names[0]]];
    for(i = 0; i < address_names.length - 1; i++){
      routeTwoPoints.push([address_names[i], address_names[i+1]]);
    }
    setRoutePoints(routeTwoPoints);
  }, []);
  
  // this.setState({ routes: routes});
  return (
    <div class="wrapper">
      <div class="boxMain">
        <div className="cards">
          <MapWithADirectionsRenderer></MapWithADirectionsRenderer>
          {/* <Map dataFromParent={routeInfo}></Map> */}
        </div>
      </div>
      <div class="side">
        <div class="box1">
          <div>
            <h1>Route Plan</h1>
            <h2>{routeSet.length} routes:</h2>
            {routeSet?.map((route, i)=>(
              <li id={i}>Distance: {route.distance} Duration: {route.duration}</li>
            ))}
          </div>
          <br></br>
          <table className="table">
            <tbody>
              {routeSet.map(function (routeInfo, i) {
                return (
                  <tr key={i}>
                    <tr>
                      <td>
                        <b>Route {i}:  From {routePoints[i][0] && routePoints[i][0]} to {routePoints[i][1] && routePoints[i][1]}</b>
                      </td>
                    </tr>
                    {routeInfo.steps.map(function (step, j) {
                      return (
                        <div dangerouslySetInnerHTML={{ __html: step["html_instructions"] }} key={j} />
                      );
                    })}
                    <br></br>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div> 
  )
  
}

export default Final;