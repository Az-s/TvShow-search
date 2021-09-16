import { Container, Grid, CssBaseline, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// import ShowInfo from '../ShowInfo/ShowInfo';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
}));

const Search = () => {
    const classes = useStyles();

    const [shows, setShows] = useState([]);
    const [text, setText] = useState('');

    const requestShows = useCallback(async () => {
        const response = await axios.get('http://api.tvmaze.com/search/shows?q=' + text);
        setShows(response.data);
    }, [text]);

    useEffect(() => {
        if (text.length > 3) {
            requestShows().catch(console.error);
        }
    }, [text, requestShows]);

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
                        onChange={e => setText(e.target.value)}
                    />
                </Grid>
                {/* <Grid item>
                    <Autocomplete
                        id="combo-box-demo"
                        options={top100Films}
                        getOptionLabel={(option) => option.name}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search show" variant="outlined" type='text' onChange={e => setText(e.target.value)} />}
                    />
                </Grid> */}
            </Grid>
            <Grid
                container
                spacing={1}
                justifyContent="center"
                alignItems="center"
            >
                {shows.map(s => (
                    <Grid item>
                        <Link to={'/shows/' + s.show.id} >
                            {s.show.name}
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Search;
