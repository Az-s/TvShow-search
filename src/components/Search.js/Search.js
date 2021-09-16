import { Container, Grid, CssBaseline, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
}));

const Search = () => {
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
                    <Typography>
                        Search for TV Show:
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField
                        label="Search show"
                        variant="outlined"
                        type='text'
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Search;
