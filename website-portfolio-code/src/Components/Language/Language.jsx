/*----- Imports React and others -----*/
import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

/*----- Import css -----*/
import './Language.scss';

/*----- Begin class and functions -----*/
const useStyles = makeStyles((theme) => ({
    listItem: {
        paddingBottom: 0,
        paddingTop: 0
    },
}));

function Language()
{
    const classes = useStyles();

    return(
        <div className="container__Language">
            <h3>Language</h3>
            <Divider />
            <div className="description">
                <List>
                    <ListItem className={classes.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={3} readOnly />
                        } />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}//end Language()

export default Language;