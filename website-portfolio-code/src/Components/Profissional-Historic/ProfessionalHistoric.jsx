/*----- Imports React and others -----*/
import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarsIcon from '@material-ui/icons/Stars';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

/*----- Import css -----*/
import './ProfessionalHistoric.scss';

/*----- Classes and Functions -----*/
function ProfessionalHistoric()
{
    return(
        <div className="container__ProfessionalHistoric">
            <h2>Professional Historic - or set another name</h2>
            <Divider />
            <div className="description">
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <StarsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!" secondary="Input another text here!" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <WorkOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!" secondary="Input another text here!" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <WorkOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!" secondary="Input another text here!" />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}//end ProfessionalHistoric()

export default ProfessionalHistoric;