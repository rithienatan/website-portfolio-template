/**
 * Professional Historic
 * 
 * @author Rithie Natan
 * @date 2023-01-30
 * Last update: 2023-01-30
 */
//---------- Imports ----------
//----- Components -----
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//----- Icons -----
import StarsIcon from '@mui/icons-material/Stars';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';


//---------- Custom Imports ----------
import style from "./ProfessionalHistoric.module.scss";


//---------- Exports ----------
/**
 * Professional Historic component
 * 
 * @returns {JSX.Element}
 */
export default function ProfessionalHistoric()
{
    return (
        <div className={style.container__ProfessionalHistoric}>
            <h2>Professional Historic - or set another name</h2>
            <Divider />
            <div className={style.description}>
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
}//end AcademicHistoric()