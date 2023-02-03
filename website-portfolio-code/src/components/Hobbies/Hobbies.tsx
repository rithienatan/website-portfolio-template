/**
 * Hobbies
 * 
 * @author Rithie Natan
 * @date 2023-01-24
 * Last update: 2023-01-24
 */
//---------- Imports ----------
//----- Components -----
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//----- Icons -----
import FlightIcon from '@mui/icons-material/Flight';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import GamesIcon from '@mui/icons-material/Games';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PoolIcon from '@mui/icons-material/Pool';


//---------- Custom Imports ----------
import style from "./Hobbies.module.scss";


//---------- Exports ----------
/**
 * Hobbies component
 * 
 * @returns {JSX.Element}
 */
export default function Hobbies(): JSX.Element
{
    return (
        <div className={style.container__Hobbies}>
            <h3>Hobbies</h3>
            <Divider />
            <div className={style.description}>
                <List>
                    <ListItem className={style.listItem}>
                        <ListItemIcon>
                            <PlayArrowIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!"/>
                    </ListItem>
                    <ListItem className={style.listItem}>
                        <ListItemIcon>
                            <GamesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!"/>
                    </ListItem>
                    <ListItem className={style.listItem}>
                        <ListItemIcon>
                            <FlightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!"/>
                    </ListItem>
                    <ListItem className={style.listItem}>
                        <ListItemIcon>
                            <PoolIcon />
                        </ListItemIcon>
                        <ListItemText primary="Input your text here!"/>
                    </ListItem>
                    <ListItem className={style.listItem}>
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