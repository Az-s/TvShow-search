import React from 'react';
import { Container, Grid, CssBaseline, Card, Typography, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
    },
    card: {
        minWidth: 500,
        minHeight: 200,
        display: 'flex',
    },
    title: {
        fontSize: 14,
    },
    cover: {
        width: '30%',
    },
    content: {
        width: '70%',
    },
}));


const ShowInfo = () => {
    const classes = useStyles();
    return (
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
                            image="https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            title="TV Show"
                        />
                        <CardContent className={classes.content}>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ShowInfo;
