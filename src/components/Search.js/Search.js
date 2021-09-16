import { Container, Grid, CssBaseline, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid gray',
        borderRadius: '4px',
        marginTop: '3px',
        maxWidth: '225px',
        marginLeft: '46.5%',
        marginRight: 'auto',
    },
    list: {
        color: '#000',
        textDecoration: 'none',
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
                        options={shows}
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
                className={classes.links}
            >
                {shows.map(s => (
                    <Grid item>
                        <Link to={'/shows/' + s.show.id} className={classes.list}>
                            {s.show.name}
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
};

export default Search;
