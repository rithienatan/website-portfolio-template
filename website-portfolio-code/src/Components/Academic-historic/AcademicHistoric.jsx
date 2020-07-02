/*----- Imports React and others -----*/
import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SearchIcon from '@material-ui/icons/Search';

/*----- Import css -----*/
import './AcademicHistoric.scss';

/*----- Classes and Functions -----*/
function AcademicHistoric()
{
    return(
        <div className="container__AcademicHistoric">
            <h2>Academic Historic</h2>
            <Divider />
            <div className="description">
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <LocalLibraryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!" secondary="Input another text here!" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!" secondary="Input another text here!" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <StarBorderIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!" secondary="Input another text here!" />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}//end AcademicHistoric()

export default AcademicHistoric;