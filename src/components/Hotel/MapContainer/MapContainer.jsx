import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import mapStyles from './mapStyle.js';
import useStyles from './styles.js';

const MapContainer = ({places, setChildClicked }) => {
    // const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();

    const center_loc = { lat: 40.7580, lng: -73.9855 };

    const final = [];
    for (const i in places) {
        var tmp = ["", "", "", "", ""];
        for (const j in places[i]) {
            if (j === "latitude") {
                tmp[0] = places[i][j];
            } else if  (j === "longitude") {
                tmp[1] = places[i][j];
            } else if  (j === "name") {
                tmp[2] = places[i][j];
            } else if  (j === "photo") {
                tmp[3] = places[i][j]["images"]["large"]["url"];
            } else if  (j === "rating") {
                tmp[4] = places[i][j];
            }

        }
        var tmplist = {"latitude": tmp[0], "longitude": tmp[1], "name": tmp[2], "photo": tmp[3], "rating": tmp[4]};
        final.push(tmplist);
    }
    // console.log("tmp", final[0]);
    // console.log("set data", places);

    // return (
    //     <div>Test</div>
    // )

    return (
    <div className={classes.mapContainer}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDyVt3WbjR3-5EmpZO8pOJQAjCSldXWIb0" }}
            defaultCenter={center_loc}
            center={center_loc}
            defaultZoom={12}
            margin={[50, 50, 50, 50]}
            options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
            onChange={(e) => {}}
            onChildClick={(child) => {
                setChildClicked(child);
            }}
        >
            {final?.map((place, i) => (
                <div
                    className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                >
                {
                    <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.typography} variant="subtitle2" gutterBottom>{place.name}</Typography>
                        <img
                            className={classes.pointer}
                            alt="hotel"
                            src={place ? place.photo : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                        />
                        <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                    </Paper>
                }
                </div>
            ))}
        </GoogleMapReact>
    </div>
    )
}

export default MapContainer;