/*----- Imports React and others -----*/
import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

/*----- Import css -----*/
import './HardSkills.scss';

/*----- Begin class and functions -----*/
const useStyles = makeStyles((theme) => ({
    listItem: {
        paddingBottom: 0,
        paddingTop: 0
    },
}));

function HardSkills()
{
    const classes = useStyles();

    return(
        <div className="container__HardSkills">
            <h3>Hard skills</h3>
            <Divider />
            <div className="description">
                <List>
                    <ListItem className={classes.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={4} readOnly />
                        } />
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={3} readOnly />
                        } />
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={1} readOnly />
                        } />
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={4} readOnly />
                        } />
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemText primary="Input your text here!" secondary={
                            <Rating name="read-only" value={5} readOnly />
                        } />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}//end HardSkills()

export default HardSkills;