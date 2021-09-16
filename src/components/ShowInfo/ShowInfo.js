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


const ShowInfo = (props) => {
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
                            image={props.img}
                            title="TV Show"
                        />
                        <CardContent className={classes.content}>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {props.name}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {props.info}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ShowInfo;
