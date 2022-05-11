import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = ({ places, childClicked, isLoading, rating, setRating, type, setType }) => {

    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        var ll = 0;
        if (places === undefined) {
            ll = 0;
        } else {
            ll = places.length;
        }
        const refs = Array(ll).fill().map((_, i) => elRefs[i] || createRef());
        
        setElRefs(refs);
    }, [places]);
    
    return (
        <div className={classes.container}>
            {isLoading ? (
                <div className={classes.loading}>
                <CircularProgress size="5rem" />
                </div>
            ) : (
            <>
                <FormControl className={classes.formControl}>
                    <InputLabel id="rating">Rating</InputLabel>
                    <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <MenuItem value="0.0">All</MenuItem>
                        <MenuItem value="3.0">Above 3.0</MenuItem>
                        <MenuItem value="4.0">Above 4.0</MenuItem>
                        <MenuItem value="4.5">Above 4.5</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="type">Price Level</InputLabel>
                    <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="$">$</MenuItem>
                        <MenuItem value="$$">$$</MenuItem>
                        <MenuItem value="$$$">$$$</MenuItem>
                        <MenuItem value="$$$$">$$$$</MenuItem>
                    </Select>
                </FormControl>               
                <Grid container spacing={3} className={classes.list}>
                    {places?.map((place, i) => (
                        <Grid ref={elRefs[i]} item key={i} item xs={12}>
                            <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
                        </Grid>
                    ))}
                </Grid>
            </>
            )}
        </div>
    );
}

export default List;