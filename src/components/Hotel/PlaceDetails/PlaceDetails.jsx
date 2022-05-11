import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';


const PlaceDeatils = ({ place, selected, refProp }) => {

    const classes = useStyles();

    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return (
        <Card elevation={6}>
            <CardMedia 
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}
            />

            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between" my={2}>
                    <Rating name="read-only" value={Number(place.rating)} readOnly />
                    <Typography component="legend">out of {place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking_position}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                    <img src={award.images.small} />
                    <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                </Box>
                ))}
                {place?.cuisine?.map(({ name }) => (
                <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {place.address && (
                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                    <LocationOnIcon />{place.address}
                </Typography>
                )}
                {place.phone && (
                <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                    <PhoneIcon /> {place.phone}
                </Typography>
                )}
            </CardContent>

            <CardActions>
                <Button size="small" color="primary" onClick={() => window.open("https://www.tripadvisor.com/")}>
                Website
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.photo.images.large.url)}>
                Picture
                </Button>
            </CardActions>

        </Card>
    );
}

export default PlaceDeatils;