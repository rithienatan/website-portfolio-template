/*----- Imports React and others -----*/
import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';

/*----- Import css -----*/
import './SoftSkills.scss';

/*----- Begin class and functions -----*/
const useStyles = makeStyles((theme) => ({
    listItem: {
        paddingBottom: 0,
        paddingTop: 0
    },
}));

function SoftSkills()
{
    const classes = useStyles();

    return(
        <div className="container__SoftSkills">
            <h3>Soft Skills - or set another name</h3>
            <Divider />
            <div className="description">
                <List>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Set your skill name here!" />
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Set your skill name here!" />
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Set your skill name here!" />
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Set your skill name here!" />
                    </ListItem>
                    <ListItem className={classes.listItem}> 
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Set your skill name here!" />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}//end Softskills()

export default SoftSkills;