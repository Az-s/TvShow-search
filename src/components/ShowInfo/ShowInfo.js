import React, { useEffect, useState } from 'react';
import { Container, Grid, CssBaseline, Card, Typography, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
    },
    card: {
        minWidth: 'auto',
        minHeight: '400px',
        display: 'flex',
    },
    title: {
        fontSize: 16,
    },
    cover: {
        width: '30%',
    },
    content: {
        width: '70%',
    },
}));


const ShowInfo = ({ match }) => {
    const classes = useStyles();
    const [showInfo, setShowInfo] = useState(null);

    useEffect(async () => {
        const fetchData = async () => {
            const response = await axios.get('http://api.tvmaze.com/shows/' + match.params.id);
            setShowInfo(response.data);
        };
        fetchData().catch(console.error);
    }, [match.params.id]);

    return showInfo && (
        <Container maxWidth='md' className={classes.root}>
            <CssBaseline />
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cover}
                            image={showInfo.image.medium}
                            title="TV Show"
                        />
                        <CardContent className={classes.content}>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {showInfo.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Summary:
                            </Typography>
                            <Typography variant="body2" component="p">
                                {showInfo.summary}
                            </Typography>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {showInfo.network.country.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
};

export default ShowInfo;
