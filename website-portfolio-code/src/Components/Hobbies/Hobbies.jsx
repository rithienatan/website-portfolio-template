/*----- Imports React and others -----*/
import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import PoolIcon from '@material-ui/icons/Pool';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';

/*----- Import css -----*/
import './Hobbies.scss';

/*----- Begin class and functions -----*/
const useStyles = makeStyles((theme) => ({
    listItem: {
        paddingBottom: 0,
        paddingTop: 0
    },
}));

function Hobbies()
{
    const classes = useStyles();

    return(
        <div className="container__Hobbies">
            <h3>Hobbies</h3>
            <Divider />
            <div className="description">
                <List>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon>
                            <PlayArrowIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!"/>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon>
                            <SportsEsportsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!"/>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon>
                            <AirplanemodeActiveIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!"/>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon>
                            <PoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!"/>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon>
                            <FilterDramaIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!"/>
                    </ListItem>
                </List>
            </div>
        </div>
    );
}//end Hobbies()

export default Hobbies;