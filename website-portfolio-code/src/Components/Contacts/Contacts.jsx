/*----- Imports React and others -----*/
import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CakeIcon from '@material-ui/icons/Cake';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

/*----- Import css -----*/
import './Contacts.scss';

/*----- Classes and Functions -----*/
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(0),
      width: 200
    },
}));


function Contacts()
{
    const classes = useStyles();

    return(
        <div className="container__Contacts">
            <h3>Contacts</h3>
            <Divider />
            <div className="description">
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <TextField
                                id="filled-read-only-input"
                                label="Phone"
                                defaultValue="+99 99 99999-9999"
                                InputProps={{ readOnly: true }}
                                variant="filled"
                            />
                        } />
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <TextField
                                id="filled-read-only-input"
                                label="email"
                                defaultValue="youremail@email.com"
                                InputProps={{ readOnly: true }}
                                variant="filled"
                            />
                        } />
                        <ListItemIcon>
                            <LinkedInIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Link href="Input link for your linkedin here!">
                                Link name!
                            </Link>
                        }/>

                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CakeIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2000-12-31"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                            }}
                            />
                        } />
                        <ListItemIcon>
                            <PlaceIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <TextField
                                id="filled-read-only-input"
                                label="Place"
                                defaultValue="Insert your citie here!"
                                InputProps={{ readOnly: true }}
                                variant="filled"
                            />
                        } />
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Link href="Input link for your github here!">
                                Link name!
                            </Link>
                        }/>
                    </ListItem>
                </List>
            </div>
        </div>
    );
}//end Contacts()

export default Contacts;